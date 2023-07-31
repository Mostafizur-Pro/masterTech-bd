const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5xecsyp.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const productCollection = client
      .db("master-tech")
      .collection("AllProducts");

    if (req.method === "GET") {
      const products = await productCollection.find({}).toArray();
      return res.status(200).json(products);
    }
  } finally {
  }
}
// run().catch(console.dir);
export default run;
