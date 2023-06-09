import React from "react";
import { styled } from "styled-components";
const Box = styled.div`
  display: flex;
  gap: 25px;
`;
const Img = styled.img`
  width: 133px;
  height: 188px;
  background-color: red;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;
const Texts = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const T1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #000000;
`;
const T2 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  color: #f8501a;
`;
const T3 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  color: #000000;
`;
const T4 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #000000;
  opacity: 0.4;
`;
const Card1 = () => {
  return (
    <Box>
      <Img></Img>
      <Left>
        <Texts>
          <T1>Oasis 3455</T1>
          <T2>$850.00</T2>
          <T3>1x2.5 | Синий</T3>
        </Texts>
        <T4>19 ОКТ. 2022. 15:38</T4>
      </Left>
    </Box>
  );
};

export default Card1;
