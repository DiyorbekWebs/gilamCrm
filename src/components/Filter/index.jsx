import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import AddIcon from "@mui/icons-material/Add";
import Collection from "./Collection";
import { Cards1 } from "../../constant/cards";
import Card from "../Cards/Card";
import Pagination from "@mui/material/Pagination";
import { Deliver } from "../../assets/img/img";
const Div = styled.div``;
const Box1 = styled.div`
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  gap: 38px;
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
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
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
`;
const Result = styled.div`
  padding: 18px 66px;
  cursor: pointer;
  border: 1px solid rgba(15, 46, 74, 0.1);
  border-radius: 2px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 84px;
  column-gap: 18px;
  margin-bottom: 145px;
`;
const Btn2 = styled(Result)`
  padding: 18px 114px;
`;
const RightBtm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(40, 40, 40, 0.1);
`;
const Delivery = styled.div`
  cursor: default;
  padding: 28px 161px 28px 28px;
  display: flex;
  gap: 18px;
  align-items: center;
  border: 1px solid rgba(40, 40, 40, 0.1);
  border-radius: 4px;
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
              <Box sx={{ width: 290, marginBottom: "6px" }}>
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
              </Box>
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
                  <>
                    <Card key={e.id} img={e.img} t1={e.text1} t2={e.text2} />
                  </>
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
