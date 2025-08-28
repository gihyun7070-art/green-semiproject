import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductReadPage = () => {
  const { pno } = useParams();
  const [p, setP] = useState({});
  console.log(pno);
  useEffect(() => {
    const f = async () => {
      const { data } = await axios.get(`http://localhost:8080/product/${pno}`);
      console.log(data);
      setP(data);
    }; //함수 정의
    f(); //함수 호출
  }, [pno]);

  return (
    <div>
      {/* ProductReadPage */}
      {p.title} , {p.content},{p.writer}
    </div>
  );
};

export default ProductReadPage;
//병국 형우 민석 재석 은지 종민 신영 건호 소라
