import React from "react";
import { styled } from "styled-components";
import { Carpet } from "../../../assets/img/img";
import { Collection2 } from ".";
const Content = styled.div`
  position: absolute;
  width: 100%;
  background-color: #ffff;
  z-index: 1;
  top: 100%;
  left: 0;
  box-shadow: 0px 120px 134px rgba(0, 0, 0, 0.25);
`;
const Left = styled.div`
  width: 500px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div``;
const Img = styled.img`
  width: 506px;
  height: 429px;
`;
const Box = styled.div`
  width: 100%;
  padding: 60px 280px 232px 320px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 885px) {
    padding: 60px 0px 60px 20px;    
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const Modal2 = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Left>
            <Collection2 text={"Классические"}></Collection2>
            <Collection2 text={"Современные"}></Collection2>
            <Collection2 text={"Дорожки"}></Collection2>
            <Collection2 text={"Молитвенные коврики"}></Collection2>
          </Left>
          <Right>
            <Img src={Carpet} alt="" />
          </Right>
        </Box>
      </div>
    </Content>
  );
};

export default Modal2;
