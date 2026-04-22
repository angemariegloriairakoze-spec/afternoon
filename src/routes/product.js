import express from "express";
import { getAllProducts, singleProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";
import protect from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";

const productRoutes = express.Router();

productRoutes.get("/getAllProducts", protect, authorize("admin", "seller", "customer"), getAllProducts);
productRoutes.get("/getSingleProduct/:id", protect, authorize("admin", "seller", "customer"), singleProduct);
productRoutes.post("/createProduct", protect, authorize("admin", "seller"), createProduct);
productRoutes.put("/updateProduct/:id", protect, authorize("admin", "seller"), updateProduct);
productRoutes.delete("/deleteProduct/:id", protect, authorize("admin", "seller"), deleteProduct);

export default productRoutes;
