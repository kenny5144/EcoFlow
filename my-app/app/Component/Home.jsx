"use client";
import React, { useState } from "react";

const Home = ({ session }) => {
  const [files, setFiles] = useState([]);
  const [analysis, setAnalysis] = useState(null); // Stores AI response
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      setError("Please select an image before uploading.");
      return;
    }

    setLoading(true);
    setError(null);
    setAnalysis(null);

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    try {
      const response = await fetch("/api/imagechecker", {
        method: "POST",
        body: formData,
      });

      const contentType = response.headers.get("content-type");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Upload success:", data);
        setAnalysis(data); // Store response in state
      } else {
        const text = await response.text();
        console.error("Unexpected response (Not JSON):", text);
        setError("Unexpected response format.");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setError("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-100 rounded-lg p-4 mt-20 text-center mb-6">
        <p className="text-gray-600">Signed in as: {session.user.email}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={(e) => setFiles(Array.from(e.target.files))}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {analysis && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-semibold">Analysis Result</h2>
          <p>
            <strong>Rating:</strong> {analysis.rating}/10
          </p>
          <p>
            <strong>Reasoning:</strong> {analysis.reasoning}
          </p>
          {analysis.recommendation && (
            <p>
              <strong>Recommendation:</strong> {analysis.recommendation}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
