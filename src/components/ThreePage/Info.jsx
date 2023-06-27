import React from "react";
import { styled } from "styled-components";
import { Icon5, Share } from "../../assets/img/img";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 75px;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: default;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Bottom = styled.div`
  display: flex;
`;
const Texts1 = styled.div`
  display: flex;
  gap: 10px;
`;
const Texts2 = styled.div`
  display: flex;
  gap: 40px;
`;
const Text1 = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #f8501a;
`;
const Text2 = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  opacity: 0.6000000238418579;
`;
const Text3 = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #282a2c;
`;
const Text4 = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #f8501a;
`;
const Div = styled.div`
  display: flex;
  border-radius: 2px;
  border: 1px solid rgba(40, 42, 44, 0.1);
  width: 342px;
  height: 31px;
  flex-shrink: 0;
`;
const Elem = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-right: 1px solid rgba(40, 42, 44, 0.1);
`;
const Colors = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 2px;
`;
const Item1 = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 22px;
  background: #81b0ba;
`;
const Btn1 = styled.div`
  display: inline-flex;
  padding: 22px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #282828;
  font-size: 13px;
  border-radius: 2px;
  background: #eee;
`;
const Btn2 = styled(Btn1)`
  background-color: #fff;
`;
const Info = () => {
  return (
    <Box>
      <Top>
        <Texts1>
          <Text1>New</Text1>
          <Text2>Классик</Text2>
        </Texts1>
        <Texts2>
          <Text3>Ковер Prada D 3662 серый голубой®</Text3>
          <Text4>7 000 000 so’m</Text4>
        </Texts2>
        <Texts1>
          <Text2>Прямоугольная</Text2>
          <Text2>Овальная</Text2>
        </Texts1>
        <Div>
          <Elem>
            <Text2>2х3</Text2>
          </Elem>
          <Elem>
            <Text2>2х3</Text2>
          </Elem>
          <Elem>
            <Text2>2х2</Text2>
          </Elem>
          <Elem>
            <Text2>3х4</Text2>
          </Elem>
          <Elem>
            <Text2>4х7</Text2>
          </Elem>
          <Elem>
            <Text2>3.5х5.5</Text2>
          </Elem>
        </Div>
        <Colors>
          <Item1 />
          <Item1 style={{ backgroundColor: "#D4C4AB" }} />
          <Item1 style={{ backgroundColor: "#D8D8D8" }} />
          <Item1 style={{ backgroundColor: "#D4C4AB" }} />
        </Colors>
      </Top>
      <Bottom>
        <Btn1>
          Добавить в корзину
          <img src={Icon5} alt="" />
        </Btn1>
        <Btn2>
          Поделится
          <img src={Share} alt="" />
        </Btn2>
      </Bottom>
    </Box>
  );
};

export default Info;
