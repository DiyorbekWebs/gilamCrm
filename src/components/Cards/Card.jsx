import React from "react";
import styled from "styled-components";
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap:30px;
  cursor: default;
`;
const Img = styled.img`
  height: 456px;
  width: 323px;
  @media screen and (max-width: 1281px) {
    height: 486px;
    width: 385px;
  }
`;
const Bottom = styled.div`
  display: flex;
  gap: 157px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Size = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #000000;
  opacity: 0.4;
  cursor: pointer;
`;
const Text1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #000000;
`;
const Text2 = styled(Text1)`
  font-size: 13px;
  line-height: 16px;
`;
export default function Card({ img, t1, t2 }) {
  return (
    <Content>
      <Img src={img} />
      <Bottom>
        <Texts>
          <Text1>{t1}</Text1>
          <Text2>{t2}</Text2>
        </Texts>
        <Size>Размеры</Size>
      </Bottom>
    </Content>
  );
}
