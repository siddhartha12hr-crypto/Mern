import { useState } from "react";

/* 
name quantity price isDamage category

 */
const Form2 = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [isDamage, setIsDamage] = useState("");
  const [category, setCategory] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      quantity: quantity,
      price: price,
      isDamage: isDamage,
      category: category,
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
            <label htmlFor="isDamage">Is Damage: </label>
            <input
              type="text"
              name=""
              id="isDamage"
              value={isDamage}
              onChange={(e) => {
                setIsDamage(e.target.value);
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="category">Category: </label>
            <input
              type="text"
              name=""
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
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

export default Form2;
