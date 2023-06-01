import React from "react";
import styled from "styled-components";
const Section = styled.div`
  padding: 80px 0px 150px 0px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
`;
const Texts = styled(Box)`
  gap: 14px;
`;
const Text1 = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #282a2c;
`;
const Text2 = styled.p`
  width: 454px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  color: #282a2c;
`;
const Btn = styled.div`
  width: 595px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  padding: 15px 32px;
  border: 3px solid #f8501a;
`;
const Span = styled.span`
  width: 531px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #f8501a;
`;
const Form = styled(Box)`
  flex-direction: row;
  gap: 10px;
`;
const Input = styled.input`
  background: #ffffff;
  border: 1px solid transparent;
  border-bottom: 1px solid #c9cfd8;
  width: 448px;
  height: 78px;
  padding: 30px 0px;
  outline: none;
  @media screen and (max-width: 1281px) {
    width: 400px;
  }
`;
export default function ContectH() {
  return (
    <Section>
      <div className="container">
        <Box>
          <Texts>
            <Text1>Мы перезвоним</Text1>
            <Text2>
              Если у вас возникли затруднения в выборе, оставьте свои контактные
              данные и мы вам поможем!
            </Text2>
          </Texts>
          <Form>
            <Input placeholder="Ваше имя" />
            <Input placeholder="Где живёте" />
            <Input placeholder="Телефон " />
          </Form>
          <Btn>
            <Span>Отправить для обратного звонка</Span>
          </Btn>
        </Box>
      </div>
    </Section>
  );
}
