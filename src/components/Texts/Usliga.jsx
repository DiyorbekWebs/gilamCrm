import React from "react";
import { styled } from "styled-components";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
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
const Paragrf = styled.p`
  width: 693px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #282a2c;
  @media screen and (max-width: 885px) {
    width: 600px;
  }
  @media screen and (max-width: 770px) {
    width: 500px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
const Usliga = () => {
  return (
    <Box>
      <Title>Оплата наличными</Title>
      <Paragrf>
        Оплата наличными производится курьеру в национальной валюте. Курьер
        предоставляет товар, который можно осмотреть на предмет отсутствия
        повреждений и соответствия указанным условиям. Покупатель подписывает
        документы, вносит денежные средства и получает чек.
      </Paragrf>
    </Box>
  );
};

export default Usliga;
