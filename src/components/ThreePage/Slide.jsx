import React from "react";
import { styled } from "styled-components";
import { Gilam1, Gilam2 } from "../../assets/img/img";
const Box = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  height: 508px;
  width: 775px;
`;
const Left = styled.div`
  width: 100px !important;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
`;
const Right = styled.div``;
const Img1 = styled.img`
  width: 100px !important;

  height: 70px;
  transform: rotate(-90deg);
  flex-shrink: 0;
`;
const Img2 = styled.img`
  width: 667px;
  height: 508px;
  border-radius: 2px;
`;
const Slide = () => {
  return (
    <Box>
      <Left>
        <Img1 src={Gilam1} />
        <Img1 src={Gilam1} />
        <Img1 src={Gilam1} />
        <Img1 src={Gilam1} />
        <Img1 src={Gilam1} />
      </Left>
      <Right>
        <Img2 src={Gilam2} />
      </Right>
    </Box>
  );
};

export default Slide;
