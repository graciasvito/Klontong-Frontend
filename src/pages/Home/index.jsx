import { useState } from "react";
import Header from "../../components/Header";
import "./styles.css";

export default function Home() {
  const [keyword, setKeyword] = useState("");

  console.log(keyword);
  // const handleSearch = () => {
  //   props.handleSearch(keyword);
  // };
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
                // onClick={handleSearch}
              >
                <ion-icon name="search-outline"></ion-icon>
              </a>
            </div>
          </form>
          <div className="home-title">
            <h1>Belanjamu disini aja</h1>
          </div>
        </div>
      </div>
    </>
  );
}
