import Link from "next/link";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store", // always fetch latest
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
          >
            {/* Image Placeholder */}
            <img
              src={product.img}
              alt={product.name}
              className="w-3/4 md:3/5 mx-auto h-48 object-cover rounded mb-4"
            />

            <h2 title={product.name} className="text-xl font-semibold">{product.name.slice(0,20)}...</h2>
            <p className="text-gray-600 mb-2">{product.description.slice(0,50)}...</p>
            <p className="font-bold text-blue-600">${product.price}</p>

            <Link
              href={`/products/${product._id}`}
              className="text-blue-500 hover:underline mt-3 inline-block"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
