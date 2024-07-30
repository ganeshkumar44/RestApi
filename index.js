const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const userRoute = require("./routes/user.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

//routes
app.use("/api/users", userRoute);

//hello message
app.get("/", (req, res) => {
  res.send("Hello form Node API");
});

// //get products
// app.get("/api/products", async (req, res) => {
//   try {
//     const product = await Product.find({});
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //get product by id
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//post product
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//update product by id
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//delete product by id
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ message: "Product delete successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://ganeshkrin90:IQ95kjWyufCFISl1@cluster0.e1ofjun.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("Server is running in 3000 port");
    });
  })
  .catch(() => {
    console.log("Error");
  });
