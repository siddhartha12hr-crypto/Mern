import Button from "./Button";

const UpdateForm = () => {
  return (
    <form>
      <div>
        <div>
          <div>
            <label htmlFor="Name">Name: </label>
            <input type="text" name="" id="Name" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Quantity">Quantity: </label>
            <input type="text" name="" id="Quantity" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Price">Price: </label>
            <input type="text" name="" id="Price" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Damage">Is Damage: </label>
            <input type="text" name="" id="Damage" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Category">Category: </label>
            <input type="text" name="" id="Category" />
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button label={"Update"}></Button>
        </div>
      </div>
    </form>
  );
};

export default UpdateForm;
