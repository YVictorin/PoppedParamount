import Product from "./models/Product.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const products = await Product.getAll();
      return res.status(200).json(products);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "There was a server issue getting products." });
    }
  }

  if (req.method === "POST") {
    try {
      const { productName, price, productDesc, imgSrc } = req.body;
      await Product.addProduct(productName, price, productDesc, imgSrc);
      return res.status(200).json({ message: "Product added successfully!" });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "There was an issue adding the product." });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
