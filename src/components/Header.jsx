import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/icons/logo.png";

const Header = () => {
  return (
    <Wrapper>
      <div className="info-box">
        <Link to={"/profile"}>
          <img src={Logo} alt="log" title="Logo" className="logo" />
        </Link>
        <div className="profile-box">
          <div className="icon"></div>
          <p className="name">Mr.Azam</p>
        </div>
      </div>
      <button className="btn-logout">Logout</button>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #243b3b;

  .info-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;

    .profile-box {
      display: flex;
      align-items: center;
      gap: 10px;
      .icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: red;
      }

      .name {
        font-size: 18px;
        color: #243B3B;
      }
    }
  }
  .logo {
    width: 200px;
  }
  .btn-logout {
    border: none;
    cursor: pointer;
    padding: 25px 50px;
    background-color: #678D72;
    font-size: 18px;
    color: white;
    letter-spacing: 1px;
  }
`;
