import axios from "axios";
import { useState } from "react";

const CreateForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [isDamage, setIsDamage] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      quantity: quantity,
      price: price,
      isDamage: isDamage,
    };

    console.log(data);
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
            <label htmlFor="Isdamage">Is Damage </label>
            <input
              type="checkbox"
              name=""
              id="Isdamage"
              checked={isDamage}
              onChange={(e) => {
                setIsDamage(e.target.checked);
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
