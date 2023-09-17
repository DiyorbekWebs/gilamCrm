import React from "react";
import { styled } from "styled-components";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin-left: -30px;
  @media screen and (max-width: 430px) {
    margin-left: 0px;
  }
`;
const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #282a2c;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
const Texts1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Texts2 = styled(Texts1)``;
const List = styled.ul`
  padding-left: 30px;
`;
const Item = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  list-style: disc;
`;
const Paragrf = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
`;
const Deliver = () => {
  return (
    <Box>
      <Title>Курьерская доставка</Title>
      <Texts>
        <Texts1>
          <Paragrf>Стоимость доставки по г.Ташкенту:</Paragrf>
          <List>
            <Item>Заказ от 1 000 000 сум - бесплатно.</Item>
            <Item>До 1 000 000 сум - 50 000 сум.</Item>
            <Item>Срок доставки - от 1 до 3 дней.</Item>
          </List>
        </Texts1>
        <Texts2>
          <Paragrf style={{ fontWeight: 600 }}>
            Стоимость доставки за пределами г.Ташкента:
          </Paragrf>
          <List>
            <Item>Цена договорная Самовывоз</Item>
            <Item></Item>
            <Item>г.Ташкент, Шайхантаурский р-н, улица Себзар, 8 (Grm.uz)</Item>
          </List>
        </Texts2>
      </Texts>
    </Box>
  );
};

export default Deliver;
