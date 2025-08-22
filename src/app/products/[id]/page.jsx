import { notFound } from "next/navigation";

async function getProduct(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

export default async function ProductDetailsPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Product Image */}
      <img
        src={product.img || "https://placehold.co/600x400"}
        alt={product.name}
        className="w-3/4 md:w-4/5 mx-auto object-cover rounded-lg mb-6"
      />

      {/* Product Info */}
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-2xl font-semibold text-blue-600 mb-6">
        ${product.price}
      </p>

      {/* Extra: Could add “Buy Now” or “Back to Products” button */}
      <a
        href="/products"
        className="text-blue-500 hover:underline inline-block mt-4"
      >
        ← Back to Products
      </a>
    </div>
  );
}
