// app/dashboard/add-product/page.jsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import AddProductForm from "@/components/AddProductForm"; // client form

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow bg-white">
      <h1 className="text-2xl font-bold mb-6">Add a New Product</h1>
      <AddProductForm />
    </div>
  );
}
