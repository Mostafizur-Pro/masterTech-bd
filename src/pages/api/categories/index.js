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

    const categoryCollection = client
      .db("master-tech")
      .collection("categories");
    const productCollection = client
      .db("master-tech")
      .collection("AllProducts");

    if (req.method === "GET") {
      const name = req.query.categoryName;
      if (name) {
        const query = { categoryName: name };
        const result = await productCollection.find(query).toArray();
        return res.status(200).json(result);
      }
      const products = await categoryCollection.find({}).toArray();
      return res.status(200).json(products);
    }
  } finally {
  }
}

export default run;
