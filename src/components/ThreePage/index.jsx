import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Slide from "./Slide";
import Info from "./Info";
import Card from "../Cards/Card";
import { Cards2 } from "../../constant/cards";
const Content = styled.div`
  padding-bottom: 163px;
`;
const Box = styled.div``;
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
  margin-bottom: 33px;
`;
const LinkS = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #f8501a;
`;
const Top = styled.div``;
const Div = styled.div`
  display: flex;
  gap: 75px;
  margin-bottom: 144px;
`;
const DivBotm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;
const Right = styled.div``;
const Left = styled.div``;
const Cards = styled.div`
  display: flex;
  gap: 20px;
`;
const Text = styled.p`
  color: #282a2c;
  font-size: 18px;
  font-family: Inter;
  font-weight: 500;
`;
const Index = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Path>
            <LinkH>Главная //</LinkH>
            <LinkH>Продукт // </LinkH>
            <LinkS>Oasis 3456</LinkS>
          </Path>
          <Top>
            <Div>
              <Left>
                <Slide />
              </Left>
              <Right>
                <Info />
              </Right>
            </Div>
            <DivBotm>
              <Text>Реккомендации</Text>
              <Cards>
                {Cards2?.map((e) => (
                  <Card key={e.id} img={e.img} t1={e.text1} t2={e.text2} />
                ))}
              </Cards>
            </DivBotm>
          </Top>
        </Box>
      </div>
    </Content>
  );
};

export default Index;
