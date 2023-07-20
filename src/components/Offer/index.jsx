import React from "react";
import styled from "styled-components";
import { Ooffer } from "../../constant/offerr";
import Card from "./card";
import "./index.css";
const Content = styled.section`
  padding: 0px 0px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;
  @media screen and (max-width: 1281px) {
    gap: 40px;
  }
`;
const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: #141516;
`;
const Cards = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (max-width: 1281px) {
    gap: 8px;
  }
  @media screen and (max-width: 885px) {
    gap: 30px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export default function Offer() {
  return (
    <Content>
      <div className="container">
        <Box>
          <Title>Что мы предлагаем</Title>
          <Cards>
            {Ooffer?.map((e) => (
              
                <Card key={e.id} img={e.img} t1={e.title} t2={e.paragrf} col={e.color} />
              
            ))}
          </Cards>
        </Box>
      </div>
    </Content>
  );
}
