import Product from "./models/Product.js";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await handleGetProducts(req, res);
    case "POST":
      return await handleAddProduct(req, res);
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}

async function handleGetProducts(req, res) {
  try {
    const products = await Product.getAll();
    return res.status(200).json(products);
  } catch (e) {
    console.error("Error fetching products:", e);
    return res.status(500).json({ error: "Server issue retrieving products." });
  }
}

async function handleAddProduct(req, res) {
  try {
    const { productName, price, productDesc, imgSrc } = req.body;
    await Product.addProduct(productName, price, productDesc, imgSrc);
    return res.status(201).json({ message: "Product added successfully!" });
  } catch (e) {
    console.error("Error adding product:", e);
    return res.status(500).json({ error: "Issue adding the product." });
  }
}
