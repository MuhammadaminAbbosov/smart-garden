import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Navbar />
        <section>{children}</section>
      </main>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  /* overflow: hidden; */
  background-color: #f3ede0;
  main {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
`;
