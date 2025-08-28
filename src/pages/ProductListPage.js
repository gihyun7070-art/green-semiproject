import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const [na, setNa] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/product")
      .then((i) => i.json())
      .then((i) => {
        console.log(i);
        setNa(i);
      });
  }, []);
  const deleteHandler = (e, i) => {
    console.log("삭제 버튼이 눌렸어요", i);
    const df = async () => {
      console.log("df", i);
      const { data } = await axios.get(`http://localhost:8080/product/d/${i}`);
      console.log(data);
      setNa(data);
    };
    df();
  };
  return (
    <div>
      ProductListPage
      {na.map((i) => (
        <div>
          <Link to={`/product/${i.pno}`} style={{ color: "red" }}>
            {i.pno}
          </Link>
          {i.content} ,{i.writer} ,{i.title}
          <button onClick={(e) => deleteHandler(e, i.pno)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;
