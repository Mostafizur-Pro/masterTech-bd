// User: master-tech   pass: K4QhoBCbnA75AHu0

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://master-tech:K4QhoBCbnA75AHu0@cluster0.5xecsyp.mongodb.net/?retryWrites=true&w=majority";

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
      if (!req.query.id) {
        const products = await productCollection.find({}).toArray();
        return res.status(200).json(products);
      } else {
        const id = req.query.id;
        const query = { _id: new ObjectId(id) };
        const product = await productCollection.findOne(query);

        if (!product) {
          return res
            .status(404)
            .json({ message: "Product not found", status: 404 });
        }

        return res
          .status(200)
          .json({ message: "Success", status: 200, data: product });
      }
    } else {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  } finally {
  }
}
// run().catch(console.dir);
export default run;
