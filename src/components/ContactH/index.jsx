import React from "react";
import styled from "styled-components";
import UseInput from "../../hooks/useInput";
import axios from "axios";
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
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
const Btn = styled.div`
  width: 595px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 15px 32px;
  border: 3px solid #f8501a;
  transition: 1s;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #f8501a;
  transition: 1s;
  &:hover {
    transition: 1s;
    color: #fff;
  }
  &:hover {
    transition: 1s;
    color: #fff !important;
    background-color: #f8501a;
  }
  @media screen and (max-width: 885px) {
    width: 450px;
  }
  @media screen and (max-width: 430px) {
    width: 330px;
    padding: 15px 0px;
  }
`;

const Form = styled(Box)`
  flex-direction: row;
  gap: 10px;
  @media screen and (max-width: 885px) {
    gap: 30px;
  }
  @media screen and (max-width: 430px) {
    flex-direction: column;
    width: 80%;
  }
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
  @media screen and (max-width: 885px) {
    width: 230px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
export default function ContectH() {
  const obj = {
    name: "",
    location: "",
    phone: "",
  };

  const { value, changeValue } = UseInput(obj);
  const send = () => {
    axios
      .post("https://grm.getter.uz/client-request", value)
      .then(function (response) {
        console.log(response.data);
        if (response.data) {
          alert("Kirishingiz mumkin!");
          window.location.href = "/home";
        } else {
          alert("login topilmadi");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
            <Input placeholder="Ваше имя" name="name" onChange={changeValue} />
            <Input
              placeholder="Где живёте"
              name="location"
              onChange={changeValue}
            />
            <Input placeholder="Телефон " name="phone" onChange={changeValue} />
          </Form>
          <Btn onClick={() => send()}>Отправить для обратного звонка</Btn>
        </Box>
      </div>
    </Section>
  );
}
