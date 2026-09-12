import { Schema } from "mongoose";

const productSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  isDamage: {
    type: Boolean,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
export default productSchema;
