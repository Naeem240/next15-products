"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function AddProductForm() {
  const [form, setForm] = useState({ name: "", description: "", price: "", img: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("✅ Product added successfully!");
        setForm({ name: "", description: "", price: "", img: "" });
      } else {
        const error = await res.json();
        toast.error("❌ Failed: " + error.error);
      }
    } catch (err) {
      toast.error("❌ Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Product Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Product Description"
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Price ($)</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Buying Price"
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Product Image URL</label>
        <input
          type="url"
          name="img"
          value={form.img}
          onChange={handleChange}
          placeholder="Photo URL"
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 010 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
            ></path>
          </svg>
        )}
        {loading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
}
