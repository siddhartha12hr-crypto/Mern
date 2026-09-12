/* 
firstName
lastName
contact
address
college
email
password
*/

import Button from "./Button";

// jsx=> we can write html code inside js
//js=> let name= manisha
const Form = () => {
  return (
    <form>
      <div>
        <div>
          <div>
            <label>First Name:</label>
            <input type="text" name="" id="" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Last Name:</label>
            <input type="text" name="" id="" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Contact:</label>
            <input type="text" name="" id="" />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label>Address:</label>
            <input type="text" name="" id="" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>College:</label>
            <input type="text" name="" id="" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Email:</label>
            <input type="text" name="" id="" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Password:</label>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button label={"Submit"}></Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
