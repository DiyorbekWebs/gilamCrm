import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Infor from "./Infor";
import Pay from "./Pay";
import Obtain from "./Obtain";
const Content = styled.div`
padding-bottom: 182px;
`;
const LinkH = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #282828;
  opacity: 0.5;
`;
const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
const LinkS = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #f8501a;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
`;
const Title = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
gap: 90px;
`;
const Payout = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Path>
            <LinkH>Главная //</LinkH>
            <LinkH>Регистрация //</LinkH>
            <LinkS>Подтверждение</LinkS>
          </Path>
          <Bottom>
            <Title>Оформить заказ</Title>
            <Form>
              <Infor></Infor>
              <Pay/>
              <Obtain/>
            </Form>
          </Bottom>
        </Box>
      </div>
    </Content>
  );
};

export default Payout;
