import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "../../utils/axios";

import "./styles.css";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataItem();
  }, []);

  const getDataItem = async () => {
    try {
      const result = await axios.get(
        // eslint-disable-next-line prettier/prettier
        `item?page=1&limit=5&search=`
      );
      setData(result.data.data);
    } catch (error) {
      // console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      const result = await axios.get(
        // eslint-disable-next-line prettier/prettier
        `item?page=1&limit=5&searchName=${keyword}`
      );
      console.log(result);
      // setData(result.data.data);
      // setPagination(result.data.pagination);
    } catch (error) {
      // console.error(error);
    }
  };
  return (
    <>
      <div className="container">
        <Header />
        <div className="header-container">
          <form className="home-search header-container home-row" role="search">
            <input
              className=""
              placeholder="Search Item"
              name="srch-term"
              id="srch-term1"
              type="text"
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <div className="search-button">
              <a
                className="btn home-button-color mr-3"
                type="button"
                onClick={handleSearch}
              >
                <ion-icon name="search-outline"></ion-icon>
              </a>
            </div>
          </form>
          <div className="home-title">
            <h1>Belanjamu disini aja</h1>
          </div>
        </div>
        <div className="card-item header-container">
          {data.length > 0 ? (
            data.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt="Image Produk" />
                <p className="item">{item.name}</p>
                <p className="price">Rp{item.harga}</p>
                {/* <p>{item.description}</p> */}
              </div>
            ))
          ) : (
            <div className="text-center">
              <h3>Loading...</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
