import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Infor from "./Infor";
import Pay from "./Pay";
import Obtain from "./Obtain";
import { Gilam2 } from "../../assets/img/img";
import { style } from "@mui/system";
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
const Left = styled.div`
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
const Bottom = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 138px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Check = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
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
const Title2 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #282828;
  margin-bottom: 11px;
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
const Texts2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ZakazT = styled.div`
  display: inline-flex;
  padding: 40px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 2px;
  border: 1px solid #eee;
  background: #fff;
`;
const Text1 = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Texts = styled.div`
  display: flex;
  align-items: center;
  gap: 123px;
`;
const Text2 = styled(Text1)`
  font-size: 18px;
`;
const EditBtn = styled.div`
  color: #282a2c;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  display: flex;
  padding: 7px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 1px;
  border: 1px solid #eee;
  cursor: pointer;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Card = styled.div`
  padding-bottom: 13px;
  border-bottom: 1px solid #eee;
  background: #fff;
  display: flex;
  gap: 78px;
  align-items: flex-end;
`;
const CardLeft = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const CardImg = styled.img`
  width: 64px;
  height: 92px;
`;
const CardTexts = styled.div`
  width: 192px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
            <Left>
              <Title>Оформить заказ</Title>
              <Form>
                <Infor />
                <Pay />
                <Obtain />
              </Form>
            </Left>
            <Right>
              <Check>
                <Right>
                  {/* Zakaz Tovar */}
                  <ZakazT>
                    <Div>
                      <Texts>
                        <Text2>Товары в заказе</Text2>
                        <EditBtn>Изменить</EditBtn>
                      </Texts>
                      <Cards>
                        <Card>
                          <CardLeft>
                            <CardImg src={Gilam2} />
                            <CardTexts>
                              <Text1>Ковер Prada D 3662 серый голубой®</Text1>
                              <Text1>3 502 000 сум</Text1>
                            </CardTexts>
                          </CardLeft>
                          <Text1>1 шт</Text1>
                        </Card>
                        <Card>
                          <CardLeft>
                            <CardImg src={Gilam2} />
                            <CardTexts>
                              <Text1>Ковер Prada D 3662 серый голубой®</Text1>
                              <Text1>3 502 000 сум</Text1>
                            </CardTexts>
                          </CardLeft>
                          <Text1>1 шт</Text1>
                        </Card>
                      </Cards>
                    </Div>
                  </ZakazT>

                  {/* **************** */}
                  {/* Checklist */}
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
                  <Button>Оформить заказ</Button>
                </Right>
              </Check>
            </Right>
          </Bottom>
        </Box>
      </div>
    </Content>
  );
};

export default Payout;
