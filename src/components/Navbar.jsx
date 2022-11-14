import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BackImg from "../assets/images/a.png";
import ProfileIcon from "../assets/icons/profile.png";
import Icon from "../assets/icons/privacy.png";

const Navbar = () => {
  return (
    <Wrapper>
      <img src={ProfileIcon} className="profile-icon" alt="" />
      <nav>
        <NavLink to={"/profile"}>Mening Profilim</NavLink>
        <NavLink to={"/devices"}>Qurilmalarim</NavLink>
        <NavLink to={"/about"}>Biz haqimizda</NavLink>
      </nav>
      <div className="privacy">
        <img src={Icon} className="icon" alt="" />
        <p>Privacy Policy</p>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 20px;
  height: calc(100vh - 80px);
  width: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${BackImg});
  position: sticky;
  top: 70px;
  left: 0;

  .profile-icon {
    width: 100px;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    a {
      text-decoration: none;
      width: 100%;
      text-align: center;
      color: #191919;
      font-size: 18px;
      padding: 10px 0;
      letter-spacing: 0.7px;

      &.active {
        background-color: #90c39f;
      }
    }
  }

  .privacy {
    display: flex;
    align-items: center;

    .icon {
      width: 60px;
    }

    p {
      font-size: 16px;
      letter-spacing: 0.7px;
      margin-top: 15px;
    }
  }
`;
