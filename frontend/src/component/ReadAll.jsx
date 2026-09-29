import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadAll = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    const data = await axios({
      url: "http://localhost:8000/books",
      method: "GET",
    });
    setBooks(data.data.result);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleView = (_id) => {
    return async () => {
      navigate(`/readSpecific/${_id}`);
    };
  };

  const handleUpdate = (_id) => {
    return async () => {
      navigate(`/update/${_id}`);
    };
  };
  // getData();

  return (
    <div>
      {books.map((value, i) => {
        return (
          <div key={i}>
            <p>
              The Book name is  {value.name} ,author name is {value.author} and quantity is {value.quantity} price is
              {value.price}
            </p>
            <button onClick={handleView(value._id)}>View</button>
            <button onClick={handleUpdate(value._id)} style={{ marginLeft: "10px" }}>
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAll;
