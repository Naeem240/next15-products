import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("myStore"); // database name
    const collection = db.collection("products"); // collection name

    const result = await collection.insertOne(body);

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}

// Get All Products (GET)
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("myStore");
    const collection = db.collection("products");

    const products = await collection.find({}).toArray();

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
