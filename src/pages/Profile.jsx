import React from "react";
import styled from "styled-components";
import MyProfileImg from "../assets/images/my-profile.jpg";

const Profile = () => {
  document.title = "Smart Garden | My Profile";

  return (
    <Wrapper>
      <div className="myProfile"></div>
      <div className="info-box">
        <button>Qurilma qo'shish</button>
        <b>Mening Profilim</b>

        <div className="info-items">
          <div className="info-item">
            <p>Tuproq Tahlili</p>
            <p>07</p>
          </div>
          <div className="line"></div>
          <div className="info-item">
            <p>Suv Hajmi Miqdori</p>
            <p>03</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
const Wrapper = styled.div`
  background-color: #f3ede0;
  .myProfile {
    width: 100%;
    height: 200px;

    background-image: url(${MyProfileImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .info-box {
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    button {
      border: none;
      background-color: #f1e1be;
      align-self: flex-end;
      padding: 6px 10px;
      color: #182727;
      font-size: 16px;
      cursor: pointer;
    }

    b {
      font-size: 32px;
    }

    .info-items {
      display: flex;
      align-items: center;
      gap: 200px;

      .line {
        width: 5px;
        height: 200px;
        background-color: #678d72;
      }

      .info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        p {
          color: #243b3b;
          &:first-child {
            font-size: 22px;
          }

          &:last-child {
            font-size: 64px;
            font-weight: 500;
          }
        }
      }
    }
  }
`;
