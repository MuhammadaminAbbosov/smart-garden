import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackImg from "../assets/images/1.png";
import Logo from "../assets/icons/3.png";
import API from "../utils/API";

const Login = () => {
  document.title = "Smart Garden | Login";
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    API.post("/account/api-token-auth/", {
      username: e.target[0].value,
      password: e.target[1].value,
    }).then((res) => {
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    });
  };
  return (
    <Wrapper>
      <img src={Logo} className="logo" alt="" />
      <div className="login-box">
        <b>LOGIN</b>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            style={{ marginBottom: "20px" }}
          />
          <input type="password" placeholder="Parol" />
          <Link href="#">Parolni unutdingizmi?</Link>
          <button type="submit">Kirish</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${BackImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  .logo {
    width: 600px;
    height: 350px;
  }
  a {
    text-decoration: none;
  }

  .login-box {
    background: rgba(31, 92, 25, 0.8);
    padding: 40px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;

    b {
      font-size: 48px;
      text-align: center;
      color: white;
      margin-bottom: 10px;
      font-weight: 700;
      letter-spacing: 2px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      input {
        padding: 16px;
        width: 300px;

        border: none;
        outline: none;
        border-radius: 8px;

        font-size: 18px;
        font-weight: 300;
        color: #3c7747;
        letter-spacing: 2px;

        &::placeholder {
          letter-spacing: 2px;
          color: #3c7747;
        }
      }

      a {
        margin-left: 15px;
        margin-top: 10px;
        margin-bottom: 30px;

        color: white;
        font-size: 14px;
        font-weight: 500;
      }

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        align-self: center;
        font-size: 24px;
        font-weight: 500;
        color: white;
      }
    }
  }
`;
