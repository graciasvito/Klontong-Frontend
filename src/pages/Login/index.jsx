import "./styles.css";
import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/login", form);
      console.log(result);
      //   dispatch(getDataUser(result.data.data.userId));
      //   dispatch(getDataBooking(result.data.data.userId));
      localStorage.setItem("userId", result.data.data.id);
      alert(result.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
      //   console.error(error.response);
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="box">
        <div className="form">
          <form>
            <div className="input-container">
              <input
                type="text"
                name="email"
                placeholder="Email"
                required
                onChange={handleChangeForm}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChangeForm}
              />
            </div>
            <div className="button-container">
              <div className="button" type="button" onClick={handleLogin}>
                <p>Log In</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
