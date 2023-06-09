import React from "react";
import styled from "styled-components";
import { AboutImg } from "../../assets/img/img";
const Aboutt = styled.section``;
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  @media screen and (max-width: 1281px) {
    gap: 0px;
  }
  @media screen and (max-width: 885px) {
    flex-direction: column-reverse;
    padding: 0px 50px;
    align-items: center;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  @media screen and (max-width: 885px) {
    align-items: center;
}`;
const Tittle = styled.h1`
  font-family: "Inter";
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 430px) {
  font-size: 28px;

}
`;
const Paragrf = styled.p`
  font-family: "Inter";
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  width: 588px;
  margin-bottom: 28px;
  @media screen and (max-width: 1281px) {
    width: 540px;
  }
  @media screen and (max-width: 885px) {
    width: 588px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    text-align: center;
  }
`;
const List = styled.ul`
  display: flex;
  gap: 60px;
  align-items: center;
  @media screen and (max-width: 1281px) {
    gap: 50px;
  }
  @media screen and (max-width: 430px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media screen and (max-width: 430px) {
    align-items: center;
    justify-content: center;
  }
`;
const Text1 = styled.h3`
  font-family: "Inter";
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 1281px) {
    font-size: 25px;
  }
`;
const Text2 = styled.p`
  font-family: "Inter";
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #1f1e14;
  opacity: 0.5;
`;
const Img = styled.img`
  @media screen and (max-width: 885px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 430px) {
    width: 430px;
    height: 430px;
  }
`;
export default function About() {
  return (
    <>
      <Aboutt>
        <div className="container">
          <Box>
            <Texts>
              <Tittle>О нашем магазине</Tittle>
              <Paragrf>
                Ведущий российский производитель стильной одежды для детей от
                рождения до десяти лет. Наша детская одежда отвечает высочайшим
                стандартам качества и ожиданиям даже самых требовательных
                родителей, отдающих предпочтение только лучшим детским товарам.
              </Paragrf>
              <List>
                <Item>
                  <Text1>🥷 2000+</Text1>
                  <Text2>Повседневных клиентов</Text2>
                </Item>
                <Item>
                  <Text1>🔥 14+</Text1>
                  <Text2>Филлиалов</Text2>
                </Item>
                <Item>
                  <Text1>✅ 254+</Text1>
                  <Text2>выполненных доставок</Text2>
                </Item>
              </List>
            </Texts>
            <Img src={AboutImg} alt="aboutImg" />
          </Box>
        </div>
      </Aboutt>
    </>
  );
}
