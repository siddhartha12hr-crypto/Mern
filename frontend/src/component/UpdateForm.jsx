import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  const getData = async () => {
    const data = await axios({
      url: `http://localhost:8000/books/${id}`,
      method: "GET",
    });

    setName(data.data.result.name);
    setQuantity(data.data.result.quantity);
    setPrice(data.data.result.price);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();

    const data = await axios({
      url: `http://localhost:8000/books/${id}`,
      method: "PATCH",
      data: {
        name: name,
        quantity: quantity,
        price: price,
      },
    });

    console.log(data.data.result);

    alert("Book updated successfully");

    navigate("/read");
  };

  return (
    <div>
      <h2>Update Book</h2>

      <form onSubmit={handleClick}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Quantity: </label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Price: </label>
          <input
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;