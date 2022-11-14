import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/icons/logo.png";
import ProfileIcon from "../assets/icons/profile.png";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../utils/API";

const Header = () => {
  const navigate = useNavigate();
  const ref = useRef();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/destination/soil-device/", {
      name: e.target.form[0].value,
      soil_moisture: e.target.form[1].value,
      soil_temperature: e.target.form[2].value,
      soil_microelement: e.target.form[3].value,
      power_battery: e.target.form[4].value,
      area: 1,
    })
      .then((res) => {
        if (res) {
          navigate("/devices");
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setShow(false);
      });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    API.post("/destination/water-device/", {
      name: e.target.form[0].value,
      water_level: e.target.form[1].value,
      water_temperature: e.target.form[2].value,
      power_battery: e.target.form[3].value,
      area: 1,
    })
      .then((res) => {
        if (res) {
          navigate("/devices");
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setShow1(false);
      });
  };

  return (
    <Wrapper>
      <div className="info-box">
        <Link to={"/profile"}>
          <img src={Logo} alt="log" title="Logo" className="logo" />
        </Link>
        <button className="btn" onClick={handleShow}>
          Suv Qurilmasi qo'shish
        </button>
        <button className="btn" onClick={handleShow1}>
          Tuproq Qurilmasi qo'shish
        </button>
        <div className="profile-box">
          <img src={ProfileIcon} className="icon" alt="" />
          <p className="name">Mr.Azam</p>
        </div>
      </div>
      <button className="btn logout" onClick={handleLogout}>
        Logout
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Suv Qurilmasi Qo'shish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={ref}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nomi</Form.Label>
              <Form.Control type="text" placeholder="Nomi" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Suv Qurulmasi Namligi</Form.Label>
              <Form.Control type="number" placeholder="Namlik" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Suv Harorati</Form.Label>
              <Form.Control type="number" placeholder="Harorati" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Qurilma Quvvati</Form.Label>
              <Form.Control type="number" placeholder="Qurilma Quvvati" />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Saqlash
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Tuproq Qurilmasi Qo'shish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={ref}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nomi</Form.Label>
              <Form.Control type="text" placeholder="Nomi" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Tuproq Namligi</Form.Label>
              <Form.Control type="number" placeholder="Namlik" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Tuproq Harorati</Form.Label>
              <Form.Control type="number" placeholder="Harorati" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Ozuqaviyligi</Form.Label>
              <Form.Control type="number" placeholder="Ozuqaviyligi" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Qurilma Quvvati</Form.Label>
              <Form.Control type="number" placeholder="Qurilma Quvvati" />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" type="submit" onClick={handleSubmit1}>
                Saqlash
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: sticky;
  background-color: #f3ede0;
  z-index: 8;
  top: 0;
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
      cursor: default;
      .icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .name {
        font-size: 18px;
        color: #243b3b;
      }
    }
  }
  .logo {
    width: 200px;
  }

  .myBtn {
    display: block;
    margin-left: auto;
  }
  .btn {
    border: none;
    cursor: pointer;
    background-color: #31da77;
    font-size: 18px;
    color: #243b3b;
    font-weight: 600;
    padding: 5px;

    &.logout {
      padding: 20px 50px;
      font-size: 18px;
      letter-spacing: 1px;
      color: white;
      font-weight: 400;
      background-color: #f58484;
    }
  }
`;
