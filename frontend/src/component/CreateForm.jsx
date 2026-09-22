import { useState } from "react";
import axios from "axios";

const CreateForm = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      author: author,
      price: price,
      quantity: quantity,
      isDamage: isDamage,
    };

    const result = await axios({
      url: "http://localhost:8000/books",
      method: "POST",
      data: data,
    });

    setName("");
    setPrice("");
    setQuantity("");
    setAuthor("");
    console.log(result);
  };
  return (
    <form>
      <div>
        <div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name=""
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              name=""
              id="author"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label htmlFor="price">Price: </label>
            <input
              type="text"
              name=""
              id="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="text"
              name=""
              id="quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>

        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default CreateForm;
