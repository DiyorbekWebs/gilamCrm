import React from "react";
import { styled } from "styled-components";
import { Num3 } from "../../assets/img/img";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
const Bottom = styled.div``;
const Obtain = () => {
  return (
    <Box>
      <Top>
        <Div>
          <Img1 src={Num3} />
          <Text1>Способ получения</Text1>
        </Div>
      </Top>
      <Bottom></Bottom>
    </Box>
  );
};

export default Obtain;
