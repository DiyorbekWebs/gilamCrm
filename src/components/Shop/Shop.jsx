import React from "react";
import { styled } from "styled-components";
import { LinkH, LinkS } from "../Login/Confirmation";
import { Minus, Plus } from "../../assets/img/img";
import { Link } from "react-router-dom";
const Div = styled.div`
  padding: 40px 0px 100px 0px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;
const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
const Bottom = styled.div`
  display: flex;
  gap: 63px;
  @media screen and (max-width: 801px) {
    gap: 40px;
  }
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;
const Left = styled(Box)`
  gap: 10px;
`;
const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #282828;
`;
const Cards = styled.div``;
const Card = styled.div`
  display: flex;
  gap: 25px;
  padding: 20px 0px;
  border-bottom: 1px solid #eeeeee;
  width: 870px;
  @media screen and (max-width: 885px) {
    width: 100%;
  }
`;
const ImgDiv = styled.div`
  padding: 45px 44px;
  background: #f8f8f8;
`;
const Img = styled.img`
  height: 160px;
  width: 113px;
  background-color: red;
`;
const Left2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;
const Texts = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const T1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  color: #282a2c;
  margin-bottom: 8px;
`;
const T2 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #282a2c;
`;
const T3 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #282828;
  opacity: 0.4;
  margin-bottom: 30px;
`;
const T4 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #f8501a;
`;
const Btn = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282a2c1a;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: #eceef21a;
  }
`;
const T5 = styled.p``;
const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Img2 = styled.img`
  width: 16px;
  height: 16px;
`;
const ChickList = styled.div`
  width: 419px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border: 1px solid #eeeeee;
  border-radius: 2px;
  @media screen and (max-width: 885px) {
    width: 350px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Title2 = styled(Title)`
  margin-bottom: 11px;
`;

const Texts2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const T6 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #282a2c;
`;
const T7 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #282a2c;
`;
const T8 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  color: #282a2c;
`;
const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background: #eeeeee;
  margin-bottom: 5px;
  border: none;
`;
const Button = styled.button`
  padding: 16px 146px 17px 143px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: rgb(229, 92, 50);
  background: rgb(251, 238, 233);
  border-radius: 2px;
  border: none;
  @media screen and (max-width: 885px) {
    padding: 20px 110px 20px 110px;
  }
`;
const Shop = () => {
  let [count, setCount] = React.useState(0);
  let PlusC = () => {
    if (count !== 10) {
      setCount((count += 1));
    } else {
      setCount((count = 10));
    }
  };
  let MinusC = () => {
    if (count !== 0) {
      setCount((count -= 1));
    } else {
      setCount((count = 0));
    }
  };
  return (
    <Div>
      <div className="container">
        <Box>
          <Path>
            <LinkH>Главная //</LinkH>
            <LinkH>Регистрация //</LinkH>
            <LinkS>Подтверждение</LinkS>
          </Path>
          <Bottom>
            <Left>
              <Title>Корзина</Title>
              <Cards>
                <Card>
                  <ImgDiv>
                    <Img />
                  </ImgDiv>
                  <Left2>
                    <Texts>
                      <T1>Oasis 3455</T1>
                      <T2>1 662 500 сум. | 1x2.5 | Синий</T2>
                      <T3>цена за 1 шт</T3>
                      <T4>${count * 23}.00</T4>
                    </Texts>
                    <Counter>
                      <Btn onClick={() => MinusC()}>
                        <Img2 src={Minus} alt="" />
                      </Btn>
                      <T5>{count}</T5>
                      <Btn onClick={() => PlusC()}>
                        <Img2 src={Plus} alt="" />
                      </Btn>
                    </Counter>
                  </Left2>
                </Card>
                <Card>
                  <ImgDiv>
                    <Img />
                  </ImgDiv>
                  <Left2>
                    <Texts>
                      <T1>Oasis 3455</T1>
                      <T2>1 662 500 сум. | 1x2.5 | Синий</T2>
                      <T3>цена за 1 шт</T3>
                      <T4>${count * 23}.00</T4>
                    </Texts>
                    <Counter>
                      <Btn onClick={() => MinusC()}>
                        <Img2 src={Minus} alt="" />
                      </Btn>
                      <T5>{count}</T5>
                      <Btn onClick={() => PlusC()}>
                        <Img2 src={Plus} alt="" />
                      </Btn>
                    </Counter>
                  </Left2>
                </Card>
              </Cards>
            </Left>
            {/* ChickList */}
            <Right>
              <ChickList>
                <Title2>Ваш заказ</Title2>
                <Texts2>
                  <Text>
                    <T6>2 товара на сумму</T6>
                    <T7>5 290 000 cум</T7>
                  </Text>
                  <Text>
                    <T6>Доставка</T6>
                    <T7>бесплатно</T7>
                  </Text>
                </Texts2>
                <Hr />
                <Text>
                  <T6>Всего к оплате</T6>
                  <T8>5 290 000 сум</T8>
                </Text>
              </ChickList>
              <Link to={'/payout'}>
                <Button>Оформить заказ</Button>
              </Link>
            </Right>
          </Bottom>
        </Box>
      </div>
    </Div>
  );
};

export default Shop;
