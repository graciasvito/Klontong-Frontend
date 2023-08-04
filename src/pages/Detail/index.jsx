import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import "./styles.css";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getItemById();
  }, []);

  const getItemById = async () => {
    try {
      const result = await axios.get(`item/${id}`);

      setData(result.data.data);
    } catch (error) {
      setData(error);
    }
  };
  return (
    <>
      <Header />
      <div className="header-container detail-container">
        <div className="detail-hero">
          <img src={data[0]?.image} alt="Image Product" />
          <div className="detail-desc">
            <h1>{data[0]?.name}</h1>
            <p className="price">Rp{data[0]?.harga}</p>
            <label>Description</label>
            <p>{data[0]?.description}</p>
          </div>
        </div>
      </div>
      <Header />
    </>
  );
}
