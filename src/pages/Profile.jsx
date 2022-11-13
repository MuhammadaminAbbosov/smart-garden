import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Profile = () => {
  document.title = "Smart Garden | My Profile";

  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default Profile;
const Wrapper = styled.div`
  height: 100vh;
  background-color: #F3EDE0;
`;
