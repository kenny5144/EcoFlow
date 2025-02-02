"use client"
import React from 'react'
import { useState } from 'react'
const Home = ({session}) => {
    const [files , setFiles]= useState([])
    console.log(files)
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
    
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    
      try {
        const response = await fetch("http://localhost:3000/api/imagechecker", {
          method: "POST",
          body: formData,
        });
    
        // Check response content type
        const contentType = response.headers.get("content-type");
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log("Upload success:", data);
        } else {
          const text = await response.text();
          console.error("Unexpected response (Not JSON):", text);
        }
      } catch (error) {
        console.error("Upload failed:", error);
      }
    
      console.log("Form Data Sent:", formData);
    };
    
    
  return (
    <>
    
    <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
        <p className="text-gray-600">Signed in as:{session.user.email}</p>
        <p className="font-medium">ei</p>
      </div>

      <form onSubmit={handleSubmit}>
      <input
        type="file"
        name="images"
        multiple 
        onChange={(e) => setFiles(Array.from(e.target.files))}
      />
      <button type="submit">Upload</button>
    </form>
    </>
  )
}

export default Home