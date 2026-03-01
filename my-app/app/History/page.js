"use client";
import { useEffect, useState } from "react";

const HistoryPage = () => {
  const [historyItems, setHistoryItems] = useState([]);

  useEffect(() => {
    fetch("/api/history")
      .then((res) => res.json())
      .then((data) => setHistoryItems(data))
      .catch(console.error);
  }, []);

  if (!historyItems.length) return <p>No uploads yet.</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload History</h1>
      <ul className="space-y-4">
        {historyItems.map((item) => (
          <li key={item.id} className="border p-4 rounded-lg">
            <img
              src={item.imageUrl}
              className="w-32 h-32 object-cover mb-2"
              alt="Uploaded product"
            />
            <p><strong>Rating:</strong> {item.rating}</p>
            <p><strong>Reasoning:</strong> {item.reasoning}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;