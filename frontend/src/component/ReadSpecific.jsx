import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ReadSpecific = () => {
  const [books, setBooks] = React.useState([]);
  const params = useParams();
  const id = params.id;
  const getData = async () => {
    const data = await axios({
      url: `http://localhost:8000/books/${id}`,
      method: "GET",
    });
    setBooks(data.data.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>The Book name is  {books.name}.</p>
      <p>The author name is {books.author}.</p>
      <p>There is  {books.quantity} books left.</p>
      <p>The  price is {books.price}.</p>
    </div>
  );
}

export default ReadSpecific