import Slider from "react-slick";
import styled from "styled-components";
import { Slide1 } from "../../assets/img/img";
import "./index.css";
const Item1 = styled.div`
  padding: 87px 0px 118px 0px;
  display: flex !important;
  justify-content: space-between;
  @media screen and (max-width: 430px) {
    flex-direction: column;
    padding: 10px 0px 50px 0px;
  }
`;
const Div = styled.div`
  background-color: #f3f1ef;
`;
const Text = styled.p`
  width: 586px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: #141516;
  margin-top: 25px;
  @media screen and (max-width: 430px) {
    width: 300px;
    font-size: 22px;
  }
`;
const Img = styled.img`
  width: 546px;
  height: 260px;
  @media screen and (max-width: 885px) {
    width: 446px;
    height: 180px;
  }
`;
export default function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Div>
      <div className="container">
        <Slider {...settings}>
          <Item1>
            <Text>
              В каждый ковер вложена душа мастеров, и все это именно для вас.
            </Text>
            <Img src={Slide1} />
          </Item1>
          <Item1>
            <Text>
              В каждый ковер вложена душа мастеров, и все это именно для вас.
            </Text>
            <Img src={Slide1} />
          </Item1>
          <Item1>
            <Text>
              В каждый ковер вложена душа мастеров, и все это именно для вас.
            </Text>
            <Img src={Slide1} />
          </Item1>
          <Item1>
            <Text>
              В каждый ковер вложена душа мастеров, и все это именно для вас.
            </Text>
            <Img src={Slide1} />
          </Item1>
        </Slider>
      </div>
    </Div>
  );
}
