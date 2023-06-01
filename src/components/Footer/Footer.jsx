import React from "react";
import { Logotip } from "../Header/Header";
import {
  Click,
  Facebook,
  Instagram,
  Logo,
  Payme,
  Telegram,
  UzumB,
} from "../../assets/img/img";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
const Foooter = styled.footer`
  cursor: default !important;
`;
const Div = styled.div`
  padding-bottom: 30px;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;
const Nomer = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #282a2c;
`;

const Social = styled(Left)`
  gap: 12px;
`;
const Div2 = styled.div`
  background-color: #f3f1ef;
  padding: 52px 0px 41px 0px;
`;
const Col1 = styled(Left)`
  align-items: flex-start;
  flex-direction: column;
  gap: 9px;
`;
const Text1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #282a2c;
`;
const Text2 = styled(Text1)`
  font-size: 12px;
  width: 339px;
  margin-bottom: 28px;
`;
const Text3 = styled(Text1)`
  font-size: 14px;
`;
const Texts1 = styled.ul`
  display: flex;
  gap: 30px;
`;
const Link1 = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #0080ff;
`;
const Right = styled.div`
  display: flex;
  gap: 100px;
  @media screen and (max-width: 1281px) {
    gap: 80px;
  }
`;
const Box = styled(Right)`
  gap: 211px;
  @media screen and (max-width: 1281px) {
    gap: 130px;
  }
`;

const List = styled(Texts1)`
  gap: 15px;
  flex-direction: column;
`;
const Item = styled(Text3)`
  cursor: pointer;
`;
const Foot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Botm2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Paymaount = styled(Botm2)`
  flex-direction: row;
  gap: 7px;
`;
const Contact = styled(Paymaount)`
  padding-top: 34px;
  justify-content: space-between;
`;
const Span = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #282a2c;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.03em;
  color: #282a2c;
`;
const Hr = styled.hr``;
export default function Footer() {
  return (
    <Foooter>
      <div className="container">
        <Div>
          <Logotip src={Logo} />
          <Left>
            <Link to={"tel:0000"}>
              <Nomer>+998 00 000 00 00</Nomer>
            </Link>
            <Social>
              <Link>
                <img src={Facebook} alt="" />
              </Link>
              <Link>
                <img src={Instagram} alt="" />
              </Link>
              <Link>
                <img src={Telegram} alt="" />
              </Link>
            </Social>
          </Left>
        </Div>
      </div>
      <Div2>
        <div className="container">
          <Foot>
            <Box>
              <Col1>
                <Text1>OOO GRM</Text1>
                <Text2>
                  Many desktop publishing packages and web page editors now use
                  Various.
                </Text2>
                <Texts1>
                  <Link to={"tel:0000"}>
                    <Text3>+998 00 000 00 00</Text3>
                  </Link>
                  <Link to={"tel:0000"}>
                    <Text3>+998 00 000 00 00</Text3>
                  </Link>
                </Texts1>
                <Link1>info@gmail.com</Link1>
              </Col1>
              <Right>
                <List>
                  <Item>Каталог</Item>
                  <Item>Классические</Item>
                  <Item>Современные</Item>
                  <Item>Детские</Item>
                  <Item>Аксессуары</Item>
                </List>
                <List>
                  <Item>Коллекции</Item>
                  <Item>Турецкие</Item>
                  <Item>Эран</Item>
                  <Item>Узбекистан</Item>
                  <Item>Италиянские</Item>
                </List>
                <List style={{ marginLeft: "20px" }}>
                  <Item>Доку</Item>
                  <Item>Оазис</Item>
                  <Item>Полар</Item>
                  <Item>Сехразад</Item>
                  <Item>Делюкс</Item>
                </List>
                <List style={{ marginLeft: "21px" }}>
                  <Item>Модел</Item>
                  <Item>Софа</Item>
                  <Item>Зеро</Item>
                  <Item>Валор</Item>
                </List>
                <List>
                  <Item>Доку</Item>
                  <Item>Оазис</Item>
                  <Item>Полар</Item>
                  <Item>Сехразад</Item>
                  <Item>Делюкс</Item>
                </List>
              </Right>
            </Box>
            <Botm2>
              <Text3>Платёжные системы</Text3>
              <Hr />
              <Paymaount>
                <img src={UzumB} alt="" />
                <img src={Payme} alt="" />
                <img src={Click} alt="" />
              </Paymaount>
              <Hr />
              <Contact>
                <Texts1>
                  <Text3 style={{ marginRight: "26px" }}>Copyright 2023</Text3>
                  <Text3 style={{ textDecorationLine: "underline" }}>
                    Privacy & Policy
                  </Text3>
                  <Text3 style={{ textDecorationLine: "underline" }}>
                    Terms of Use
                  </Text3>
                </Texts1>
                <Span>
                  Developed by:
                  <Link to={"/https://getter.uz/"}>
                    <H1>Getter</H1>
                  </Link>
                </Span>
              </Contact>
            </Botm2>
          </Foot>
        </div>
      </Div2>
    </Foooter>
  );
}
