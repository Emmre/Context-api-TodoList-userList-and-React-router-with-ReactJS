import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setData(data);
      }
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  }, [id]);

  return (
    <div className={s.container}>
      {/* {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))} */}
      {/* {id} */}
      <ul>
        <li>Name: {data.name}</li>
        <li>Username: {data.username}</li>
        <li>Phone : {data.phone}</li>
        <li>Website: {data.website}</li>
      </ul>
    </div>
  );
};

export default Detail;
