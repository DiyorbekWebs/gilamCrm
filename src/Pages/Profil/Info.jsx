import React from "react";
import { styled } from "styled-components";
const Box = styled.div`
  display: flex;
  gap: 100px;
  @media screen and (max-width: 430px) {
    gap: 50px;
}
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const T1 = styled.p`
  display: flex;
  gap: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #00000041;
`;
const T2 = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  color: #000000;
`;
const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  color: #000000;
  margin-bottom: 13px;
`;
const Info = () => {
  return (
    <Box>
      <Left>
        <Title>Продукт:</Title>
        <T1>
          Коллекция:<T2>Sanaf Hali</T2>
        </T1>
        <T1>
          Название:<T2>Prada 53 Alfa</T2>
        </T1>
        <T1>
          Размер:<T2>2.5x3</T2>
        </T1>
        <T1>
          Колифество:<T2>1</T2>
        </T1>
        <T1>
          Цвет:<T2>Чёрный</T2>
        </T1>
        <T1>
          Стиль:<T2>Классик</T2>
        </T1>
        <T1>
          По форме:<T2>Овал</T2>
        </T1>
        <T1>
          Артикул:<T2>А273892</T2>
        </T1>
        <T1>
          Цена:<T2>345$</T2>
        </T1>
      </Left>
      <Left>
        <Title>Имя:</Title>
        <T1>
          Имя:<T2>Абубакир Джалолов</T2>
        </T1>
        <T1>
          Город:<T2>Ташкент</T2>
        </T1>
        <T1>
          Доставка:
          <T2 style={{ color: "#2E9BFF" }}>
            г.Самарканд, р.Паярикский, ул.Паркент 131А.
          </T2>
        </T1>
        <T1>
          Телефон:<T2 style={{ color: "#2E9BFF" }}>+998 90 123-45-67</T2>
        </T1>
        <T1>
          Дата заказа:<T2>12 Апрель, 2023. 19:32</T2>
        </T1>
        <T1>
          Оплата:<T2 style={{ color: "#FF511B" }}>345$</T2>
        </T1>
      </Left>
    </Box>
  );
};

export default Info;
