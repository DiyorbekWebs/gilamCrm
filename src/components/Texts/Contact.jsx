import React from "react";
import { styled } from "styled-components";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: -30px;
  cursor: default;
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
  gap: 15px;
`;
const T1 = styled.h4`
  display: flex;
  gap: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: #282a2c;
`;
const T2 = styled(T1)`
  font-weight: 400;
`;
const Contact = () => {
  return (
    <Box>
      <Title>Если у васвозникли вопросы</Title>
      <Texts>
        <T1>
          Адрес: <T2>Buyuk Ipakyoli, ул Лутфи, 1-b дом, 49 кв</T2>
        </T1>
        <T1>
          Номер: <T2>+998 90 000 00 00</T2>
        </T1>
        <T1>
          E-mail: <T2>info@gmail.com</T2>
        </T1>
      </Texts>
    </Box>
  );
};

export default Contact;
