import { Schema } from "mongoose";

const bookSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  author: {
    type: String,
    required: [true, "author is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
});
export default bookSchema;
