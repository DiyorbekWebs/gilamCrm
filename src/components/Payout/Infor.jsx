import React from "react";
import { styled } from "styled-components";
import { Num1 } from "../../assets/img/img";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`;
const Div = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`;
const Img1 = styled.img`
  width: 30px;
  height: 30px;
`;
const Text = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const InputDiv = styled.div`
  display: flex;
  width: 400px;
  height: 64px;
  padding: 14px 0px 14px 0px;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0px 0px 0px 0px #d5d8df;
  /* background-color: red; */
`;
const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;
const Div2 = styled.div`
  display: flex;
  gap: 25px;
`;
const Infor = () => {
  return (
    <Box>
      <Div>
        <Img1 src={Num1} />
        <Text>Ваши данные</Text>
      </Div>
      <Inputs>
        <InputDiv>
          <Input placeholder="Телефон *" />
        </InputDiv>
        <Div2>
          <InputDiv>
            <Input placeholder="Имя *" />
          </InputDiv>
          <InputDiv>
            <Input placeholder="Фамилия *" />
          </InputDiv>
        </Div2>
      </Inputs>
    </Box>
  );
};

export default Infor;
