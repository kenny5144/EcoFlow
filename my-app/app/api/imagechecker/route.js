import { OpenAI } from "openai";

export async function POST(req) {
  try {
    // Ensure the request contains form data
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return new Response(
        JSON.stringify({
          error: "Invalid Content-Type, expected multipart/form-data",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Get form data from request
    const formData = await req.formData();
    const files = formData.getAll("images");

    if (!files || files.length === 0) {
      return new Response(JSON.stringify({ error: "No files uploaded" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Convert each file to base64 for OpenAI API
    const base64Files = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          mimeType: file.type,
          base64: buffer.toString("base64"),
        };
      })
    );

    // Send images to OpenAI API with structured prompt
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_KEY}`, // Ensure API key is set
      },
      body: JSON.stringify({
        model: "gpt-4o", // Ensure you're using the correct model
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Analyze the environmental impact of the product in this image and return a structured JSON response with the following fields:",
              },
              {
                type: "text",
                text: "1. `rating`: A number from 1 to 10 (1 = very harmful, 10 = very eco-friendly).",
              },
              {
                type: "text",
                text: "2. `reasoning`: Explain why the product received this rating, listing specific ingredients or materials.",
              },
              {
                type: "text",
                text: "3. `recommendation`: If the rating is 5 or lower, suggest specific alternative products with **brand names and model names** that are better for the environment.",
              },
              {
                type: "text",
                text: "Ensure the response is **valid JSON format** with keys: `rating`, `reasoning`, and `recommendation`.",
              },
              {
                type: "text",
                text: "For `recommendation`, provide at least 3 alternative eco-friendly products with brand names and model names.",
              },
              ...base64Files.map((file) => ({
                type: "image_url",
                image_url: {
                  url: `data:${file.mimeType};base64,${file.base64}`,
                },
              })),
            ],
          },
        ],
        max_tokens: 500,
        response_format: { type: "json_object" }, // ✅ Correct format
      }),
    });

    // Parse and return structured response
    const data = await response.json();

    // Check if the response contains the expected data structure
    if (!response.ok) {
      throw new Error(`OpenAI API Error: ${data.error?.message || "Unknown error"}`);
    }

    // Ensure the content is a valid JSON response
    const content = data.choices && data.choices[0] && data.choices[0].message.content;
    if (content) {
      try {
        // Parse content into JSON if it's a valid JSON string
        const parsedContent = JSON.parse(content);
        
        // Return the parsed JSON response
        return new Response(JSON.stringify(parsedContent), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        throw new Error("Failed to parse OpenAI response as JSON.");
      }
    } else {
      throw new Error("Invalid response structure from OpenAI API.");
    }
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process images" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
