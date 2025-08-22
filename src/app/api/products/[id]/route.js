import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

// GET /api/products/:id
export async function GET(req, { params }) {
  try {
    const { id } = params;
    const client = await clientPromise;
    const db = client.db("myStore");
    const collection = db.collection("products");

    const product = await collection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
