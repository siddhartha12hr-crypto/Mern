import { model } from "mongoose";
import productSchema from "./productSchema.js";

export const Product = model("produts", productSchema);
