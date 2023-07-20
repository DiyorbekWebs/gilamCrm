import React from "react";
import { styled } from "styled-components";
import { Gilam1, Gilam2 } from "../../assets/img/img";
import { imges } from "../3chipage/imges";
const Box = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 524px;
  overflow: scroll;
`;
const Right = styled.img`
  width: 667px;
  height: 508px;
`;
const Img = styled.img`
  width: 100px;
`;
const Slide = () => {
  const [count, setCount] = React.useState(0);
  console.log(count);
  // const [imgData, setImgData] = React.useState(imges[count]);
  const setSliderImg = (props) => {
    setCount(props);
  };
  return (
    <Box>
      <Left>
        {imges.map((id, i) => {
          return (
            <Img
            style={{
              height:'300px'
            }}
              key={i}
              onClick={(selectElement) => setSliderImg(i)}
              src={id}
              alt="product image"
              className="imgBox-item-img"
            />
          );
        })}
      </Left>
      <Right src={imges[count]} alt="product image" />

      {/* <Left>
        <Img1 src={Gilam1} />
        <Img1 src={Gilam1} />
        <Img1 src={Gilam1} />
        <Img1 src={Gilam1} />
        <Img1 src={Gilam1} />
      </Left>
      <Right>
        <Img2 src={Gilam2} />
      </Right> */}
    </Box>
  );
};

export default Slide;
