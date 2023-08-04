import "./styles.css";
import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/register", form);
      console.log(result);
      //   dispatch(getDataUser(result.data.data.userId));
      //   dispatch(getDataBooking(result.data.data.userId));
      //   localStorage.setItem("userId", result.data.data.id);
      alert(result.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
      //   console.error(error.response);
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="register-container">
      <div className="box">
        <h2>Register</h2>
        <div className="form">
          <form>
            <div className="input-container">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                onChange={handleChangeForm}
              />
            </div>
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
              <button className="button" type="button" onClick={handleLogin}>
                <p>Log In</p>
              </button>
            </div>
          </form>
          <p>
            Already have account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
