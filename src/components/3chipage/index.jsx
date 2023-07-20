import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Slide } from "./Slide";
import { imges } from "./imges";

const Content = styled.div`
  padding-bottom: 163px;
`;
const Box = styled.div``;
const LinkH = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #282828;
  opacity: 0.5;
`;
const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 33px;
`;
const LinkS = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #f8501a;
`;
const Top = styled.div``;
const Div = styled.div`
  display: flex;
  gap: 75px;
  margin-bottom: 144px;
`;
const DivBotm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;
const Right = styled.div``;
const Left = styled.div``;
const Cards = styled.div`
  display: flex;
  gap: 20px;
`;
const Text = styled.p`
  color: #282a2c;
  font-size: 18px;
  font-family: Inter;
  font-weight: 500;
`;
const Index = () => {
  const [imgData, setImgData] = React.useState(imges[0]);

  const setSliderImg = (props) => {
    setImgData(imges[0]);

    if (props.target.className == "hero-singlePage__wrapper-left-imgBox-item") {
      setImgData(props.target.childNodes[0].src);
    }
    if (
      props.target.className == "hero-singlePage__wrapper-left-imgBox-item-img"
    ) {
      setImgData(props.target.src);
    }
  };
  return (
    <Content>
      <div className="container">
        <Box>
          <Path>
            <LinkH>Главная //</LinkH>
            <LinkH>Продукт // </LinkH>
            <LinkS>Oasis 3456</LinkS>
          </Path>
          <Top>
            <Div>
              <Left>
                <Slide />
              </Left>
              <Right>{/* <Info /> */}</Right>
            </Div>
            <DivBotm>
              {/* <Text>Реккомендации</Text> */}
              {/* <Cards>
                {Cards2?.map((e) => (
                  <Card key={e.id} img={e.img} t1={e.text1} t2={e.text2} />
                ))}
              </Cards> */}
              <div
                style={{
                  display: "flex",
                }}
              >
                <div className="hero-singlePage__wrapper-left-imgBox-inner">
                  <img
                    src={imgData}
                    alt="product image"
                    className="hero-singlePage__wrapper-left-imgBox-inner-img"
                  />
                </div>
                <br />
                <ul className="hero-singlePage__wrapper-left-imgBox-list">
                  {imges.map((id, i) => {
                    return (
                      <li
                        className="hero-singlePage__wrapper-left-imgBox-item"
                        key={i}
                        onClick={(selectElement) => setSliderImg(selectElement)}
                      >
                        <img
                          src={id}
                          alt="product image"
                          className="hero-singlePage__wrapper-left-imgBox-item-img"
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </DivBotm>
          </Top>
        </Box>
      </div>
    </Content>
  );
};

export default Index;
