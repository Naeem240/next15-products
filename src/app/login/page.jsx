"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: true,
      email: form.email,
      password: form.password,
    });

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Login successful!");
      router.push("/products");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="flex items-center my-4">
        <hr className="flex-1 border-gray-300" />
        <span className="mx-2 text-gray-500">OR</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <button
        onClick={() => signIn("google")}
        className="w-full flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}
