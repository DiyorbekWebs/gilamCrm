import React from "react";
import { styled } from "styled-components";
import { Img } from "../../assets/img/img";
import { Btn } from "../../components/Login/Confirmation";
const Box = styled.div`
  display: flex;
  gap: 40px;
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;
const DivImg = styled.img`
  width: 100px;
  height: 100px;
`;
const Right = styled(Box)`
  gap: 68px;
  flex-direction: column;
`;
const Users = styled(Right)`
  gap: 9px;
`;
const Text = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #282828;
`;
const SignUp = styled(Text)`
  font-size: 12px;
  display: flex;
  gap: 5px;
  color: rgba(40, 40, 40, 0.4);
`;
const Date = styled.p`
  color: #000;
  font-size: 14px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 83px;
  align-items: flex-start;
`;
const Inputs = styled.div`
  display: flex;
  width: 692px;
  flex-wrap: wrap;
  gap: 24px;
  @media screen and (max-width: 885px) {
    flex-direction: column;
  }
`;
const Input = styled.input`
  height: 60px;
  width: 334px;
  background: #ffffff;
  border: 1px solid transparent;
  border-bottom-color: #c9cfd8;
  outline: none;
  @media screen and (max-width: 430px) {
    width: 300px;
  }
`;
const Profill = () => {
  return (
    <Box>
      <DivImg src={Img} />
      <Right>
        <Users>
          <Text>Firdavs Muzafarov</Text>
          <SignUp>
            Регистрировани в: <Date>12.04.2023</Date>
          </SignUp>
        </Users>
        <Form>
          <Inputs>
            <Input placeholder="Имя " name="name" id="name" type="text" />
            <Input
              placeholder="Адрес электронной почты "
              name="mail"
              id="mail"
              type="text"
            />
            <Input
              placeholder="Фамилия "
              name="surname"
              id="surname"
              type="text"
            />
            <Input
              placeholder="Номер телефона "
              name="phone"
              id="phone"
              type="text"
            />
          </Inputs>
          <Btn>Сохранить изменения</Btn>
        </Form>
      </Right>
    </Box>
  );
};

export default Profill;
