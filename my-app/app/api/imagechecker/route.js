// pages/api/openai-upload.js
import { OpenAI } from 'openai';
import Busboy from 'busboy';

export const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

export const config = {
  api: {
    bodyParser: false, 
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const busboy = Busboy({ headers: req.headers });
  console.log(busboy)
  const files = [];
  console.log(files)

  // Process uploaded files in memory
  busboy.on('file', (name, file, info) => {
    const { mimeType } = info;
    const chunks = [];

    file.on('data', (chunk) => chunks.push(chunk));
    file.on('end', () => {
      // Convert buffer to base64 for OpenAI
      const buffer = Buffer.concat(chunks);
      const base64 = buffer.toString('base64');
      files.push({ mimeType, base64 });
    });
  });

  // Send files to OpenAI after processing
  busboy.on('finish', async () => {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, // Ensure this is defined in .env.local
        },
        body: JSON.stringify({
          model: "gpt-4o", // Use correct model name
          messages: [
            {
              role: "user",
              content: [
                { type: "text", text: "Describe these images:" },
                ...files.map((file) => ({
                  type: "image_url",
                  image_url: {
                    url: `data:${file.mimeType};base64,${file.base64}`,
                  },
                })),
              ],
            },
          ],
          max_tokens: 300,
        }),
      });
  
      // Parse JSON response
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(`OpenAI API Error: ${data.error?.message || "Unknown error"}`);
      }
  
      res.status(200).json({ result: data.choices[0].message.content });
    } catch (error) {
      console.error("OpenAI API Error:", error);
      res.status(500).json({ error: "Failed to process images" });
    }
  });
  

  req.pipe(busboy); 
}