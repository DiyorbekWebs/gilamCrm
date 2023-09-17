import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import AddIcon from "@mui/icons-material/Add";
import Collection from "./Collection";
import { Cards1 } from "../../constant/cards";
import Pagination from "@mui/material/Pagination";
import { Deliver } from "../../assets/img/img";
import Card from "./Card";
const Div = styled.div``;
const Box1 = styled.div`
  padding: 10px 0px 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 38px;
  @media screen and (max-width: 886px) {
    padding: 10px 0px 30px 0px;
  }
`;
const Top = styled.div`
  display: flex;
  gap: 7px;
`;
const Home = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #282828;
  opacity: 0.5;
`;
const Cat = styled(Home)`
  color: #f8501a;
  opacity: 1;
`;
const Bottom = styled.div`
  display: flex;
  width: 100%;
  gap: 55px;
  @media screen and (max-width: 885px) {
    gap: 30px;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  @media screen and (max-width: 886px) {
    width: 200px;
  }
`;

export const Btn = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: transparent;
  opacity: 0.7;
  border: none;
`;
export const Icon = styled(AddIcon)`
  width: 18px !important;
  height: 100px !important;
`;
export const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #282a2c;
`;
const Text2 = styled(Home)`
  font-size: 12px;
`;
export const Div1 = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
const SearchPrice = styled(Text)`
  margin-bottom: 20px;
`;
const Price = styled(Text)`
  margin-bottom: 13px;
`;
const Div2 = styled.div`
  padding: 11px 0px 0px 0px;
  border-top: 1px solid #e7eaed;
  width: 290px;
  @media screen and (max-width: 886px) {
    width: 200px;
  }
`;
const Result = styled.div`
  padding: 18px 66px;
  cursor: pointer;
  border: 1px solid rgba(15, 46, 74, 0.1);
  border-radius: 2px;
  @media screen and (max-width: 886px) {
    padding: 18px 21px;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Cards = styled.div`
  width: 100% !important;
  display: flex;
  flex-wrap: wrap;
  row-gap: 84px;
  column-gap: 18px;
  margin-bottom: 145px;
  @media screen and (max-width: 886px) {
    width: 830px !important;
    column-gap: 10px;
    row-gap: 34px;
    flex-wrap: wrap !important;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 835px) {
    width: 800px !important;
  }
  @media screen and (max-width: 801px) {
    width: 750px !important;
  }
`;
const Btn2 = styled(Result)`
  padding: 18px 114px;
`;
const RightBtm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  @media screen and (max-width: 886px) {
    flex-direction: column-reverse;
    margin-left: -10%;
    gap: 10px;
  }
  @media screen and (max-width: 801px) {
    margin-left: -20%;
  }
`;
const Delivery = styled.div`
  cursor: default;
  padding: 28px 161px 28px 28px;
  display: flex;
  gap: 18px;
  align-items: center;
  border: 1px solid rgba(40, 40, 40, 0.1);
  border-radius: 4px;
  @media screen and (max-width: 886px) {
    padding: 18px 10px 18px 18px;
    width: 100%;
    margin-left: -28%;
  }
  @media screen and (max-width: 835px) {
    width: 790px;
  }
  @media screen and (max-width: 801px) {
    width: 770px;
    margin-left: -30%;
  }
  @media screen and (max-width: 770px) {
    width: 730px;
    margin-left: -31%;
  }
`;
const Img = styled.img`
  width: 104px;
  height: 104px;
`;
const Texts = styled(Right)`
  gap: 10px;
`;
const T1 = styled.h1`
  width: 295px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: #282a2c;
`;
const T2 = styled.p`
  width: 704px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #282a2c;
  opacity: 0.6;
  @media screen and (max-width: 886px) {
    width: 100%;
  }
  @media screen and (max-width: 835px) {
    width: 600px;
  }
`;
const Box2 = styled(Box)`
  @media screen and (max-width: 885px) {
    width: 200px !important;
  }
`;
function valuetext(value) {
  return `${value}°C`;
}
export default function Filter() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Div>
      <div className="container">
        <Box1>
          <Top>
            <Link to={"/"}>
              <Home>Главная //</Home>
            </Link>
            <Link to={"/catalog"}>
              <Cat>Каталог</Cat>
            </Link>
          </Top>
          <Bottom>
            <Left>
              <SearchPrice>Поиск по ценам</SearchPrice>
              <Div2>
                <Box2 sx={{ width: 290, marginBottom: "6px" }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    sx={{
                      color: "#f8501a",
                    }}
                  />
                </Box2>
              </Div2>
              <Price>{value}uzs</Price>
              <Div2>
                <Text2>Коллекция</Text2>
                <Collection />
              </Div2>
              <Div2>
                <Text2>Коллекция</Text2>
                <Collection />
              </Div2>
              <Div2>
                <Text2>Стиль</Text2>
                <Collection />
              </Div2>
              <Div2>
                <Text2>Цвет</Text2>
                <Collection />
              </Div2>
              <Div2>
                <Text2>По форме</Text2>
                <Collection />
              </Div2>
              <Result>Показать резултать</Result>
            </Left>
            <Right>
              <Cards>
                {Cards1?.map((e) => (
                  <Card key={e.id} img={e.img} t1={e.text1} t2={e.text2} />
                ))}
              </Cards>
              <RightBtm>
                <Btn2>Посмотреть все</Btn2>

                <Pagination
                  size="large"
                  count={10}
                  variant="outlined"
                  shape="rounded"
                />
              </RightBtm>
              <Delivery>
                <Img src={Deliver} alt="" />
                <Texts>
                  <T1>Доставка по всему городу</T1>
                  <T2>
                    Доставка по Ташкенту осуществляется в день заказа, либо на
                    следующей день после принятия заказа и совершенно бесплатно
                    не зависимо от суммы заказа (за исключением категорию
                    шейкеров).
                  </T2>
                </Texts>
              </Delivery>
            </Right>
          </Bottom>
        </Box1>
      </div>
    </Div>
  );
}
