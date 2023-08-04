import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "../../utils/axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Home() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    getDataItem();
  }, [page]);

  const getDataItem = async () => {
    try {
      const result = await axios.get(
        // eslint-disable-next-line prettier/prettier
        `item?page=${page}&limit=3&search=`
      );

      setData(result.data.data);
      setPagination(result.data.pagination);
    } catch (error) {
      // console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      const result = await axios.get(
        // eslint-disable-next-line prettier/prettier
        `item?page=1&limit=3&search=${keyword}`
      );

      setData(result.data.data);
      // setPagination(result.data.pagination);
    } catch (error) {
      // console.error(error);
    }
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("item/create", form);

      alert(result.data.message);
      navigate("/");
    } catch (error) {
      // console.log(error);
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
        <div className="header-container">
          <Button onClick={handleOpen}>Add Product</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add New Product
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <form className="modal-body" onSubmit={handleSubmit}>
                  <label>Category Id</label>
                  <input
                    type="text"
                    name="categoryId"
                    onChange={handleChangeForm}
                  />
                  <label>Category Name</label>
                  <input
                    type="text"
                    name="categoryName"
                    onChange={handleChangeForm}
                  />
                  <label>SKU</label>
                  <input type="text" name="sku" onChange={handleChangeForm} />
                  <label>Name</label>
                  <input type="text" name="name" onChange={handleChangeForm} />
                  <label>Description</label>
                  <input
                    type="text"
                    name="description"
                    onChange={handleChangeForm}
                  />

                  <label>Weight</label>
                  <input
                    type="text"
                    name="weight"
                    onChange={handleChangeForm}
                  />
                  <label>Width</label>
                  <input type="text" name="width" onChange={handleChangeForm} />
                  <label>Length</label>
                  <input
                    type="text"
                    name="length"
                    onChange={handleChangeForm}
                  />
                  <label>height</label>
                  <input
                    type="text"
                    name="height"
                    onChange={handleChangeForm}
                  />
                  <label>Price</label>
                  <input type="text" name="price" onChange={handleChangeForm} />
                  <label>Image</label>
                  <input
                    type="text"
                    name="Image"
                    onChange={handleChangeForm}
                    value={form.detail}
                  />
                  <div className="modal-footer">
                    <button type="submit">
                      <div>Add Product</div>
                    </button>
                  </div>
                </form>
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className="card-item header-container">
          {data.length > 0 ? (
            data.map((item) => (
              <div
                className="card"
                key={item.id}
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
              >
                <img src={item.image} alt="Image Product" />
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
        <div className="pagination header-container">
          <button
            className="btn btn-primary"
            onClick={handlePrevPage}
            disabled={page === 1 ? true : false}
          >
            &lt;
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNextPage}
            disabled={page === pagination.totalPage ? true : false}
          >
            &gt;
          </button>
        </div>
        <Header />
      </div>
    </>
  );
}
