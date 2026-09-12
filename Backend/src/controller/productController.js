import expressAsyncHandler from "express-async-handler";
import { Product } from "../schema/model.js";

export const createProduct = expressAsyncHandler(async (req, res) => {
  const result = await Product.create(req.body);

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    result: result,
  });
});

export const readProduct = expressAsyncHandler(async (req, res) => {
  const result = await Product.find();
  res.status(200).json({
    success: true,
    message: "Product read successfully",
    result: result,
  });
});

export const readSpecificProduct = expressAsyncHandler(async (req, res) => {
  const result = await Product.findById(req.params.id);
  res.status(200).json({
    success: true,
    message: "Product read successfully",
    result: result,
  });
});

export const updateProductController = expressAsyncHandler(async (req, res) => {
  const result = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({
    success: true,
    message: "Product Updated sucessfully",
    result: result,
  });
});

export const deleteProduct = expressAsyncHandler(async (req, res) => {
  const result = await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Prodcut deleted successfully",
    result: result,
  });
});
