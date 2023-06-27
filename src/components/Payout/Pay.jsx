import React from "react";
import { styled } from "styled-components";
import { Payy } from "../../constant/Payout";
import { Num2 } from "../../assets/img/img";
const Box = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
const Inputs = styled.div`
  display: flex;
  gap: 47px;
  width: 749px;
  flex-wrap: wrap;
`;
const InputDiv = styled.div`
  width: 350px;
  display: flex;
  height: 64px;
  padding: 20px 16px;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid #f8501a;
  box-shadow: 0px 0px 0px 0px #ececec;
  cursor: default;
`;
const Text = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
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
const Text1 = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;
const Img = styled.img``;
const Pay = () => {
  return (
    <Box>
      <Div>
        <Img1 src={Num2} />
        <Text1>Выберите способ оплаты</Text1>
      </Div>
      <Inputs>
        {Payy?.map((e) => (
          <InputDiv key={e.id}>
            <Text>{e.title}</Text>
            <Img src={e.img} />
          </InputDiv>
        ))}
      </Inputs>
    </Box>
  );
};

export default Pay;
