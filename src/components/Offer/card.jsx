import React from "react";
import styled from "styled-components";
const Box = styled.div`
  padding: 85px 24px 88px 36px;
  display: flex;
  flex-direction: column;
  gap: 57px;
  @media screen and (max-width: 1281px) {
    padding: 75px 14px 78px 26px;
  }
  @media screen and (max-width: 885px) {
    padding: 85px 24px 88px 36px;
  }
  @media screen and (max-width: 361px) {
    padding: 60px 15px 60px 15px;
  }
`;
const Botm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Text1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #282a2c;
`;
const Text2 = styled.p`
  width: 270px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #282a2c;
  @media screen and (max-width: 1281px) {
    width: 255px;
  }
  @media screen and (max-width: 885px) {
    font-size: 16px;
    line-height: 21px;
    width: 300px;
  }
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;
export default function Card({ img, t1, t2 ,col}) {
  return (
    <Box style={{backgroundColor:`${col}`}}>
      <Img src={img} alt="" />
      <Botm>
        <Text1>{t1}</Text1>
        <Text2>{t2}</Text2>
      </Botm>
    </Box>
  );
}
