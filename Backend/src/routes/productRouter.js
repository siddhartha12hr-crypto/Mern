import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  readProduct,
  readSpecificProduct,
  updateProductController,
} from "../controller/productController.js";

const productRouter = Router();
//    "/""=localhost:8000 / products;

productRouter.route("/").post(createProduct).get(readProduct);

//    "/""=localhost:8000/products/:id;
productRouter
  .route("/:id")
  .get(readSpecificProduct)
  .patch(updateProductController)
  .delete(deleteProduct);

//update
//id -req.params.id
// data -req.body

export default productRouter;
