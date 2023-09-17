import React, { useRef } from "react";
import styled from "styled-components";
import UseModal from "../../hooks/useModal";
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  cursor: default;
  position: relative;
  width: 323px;
  @media screen and (max-width: 1281px) {
    width: 385px;
  }
  @media screen and (max-width: 886px) {
    width: 300px;
  }
  @media screen and (max-width: 835px) {
    width: 280px;
  }
  @media screen and (max-width: 801px) {
    width: 265px;
  }
  @media screen and (max-width: 770px) {
    width: 250px;
  }
  @media screen and (max-width: 361px) {
    width: 100%;
  }
`;
const Img = styled.img`
  height: 456px;
  width: 100%;
  @media screen and (max-width: 1281px) {
    height: 486px;
  }
  @media screen and (max-width: 886px) {
    height: 470px;
  }
  @media screen and (max-width: 835px) {
    height: 400px;
  }
  @media screen and (max-width: 801px) {
    height: 380px;
  }
  @media screen and (max-width: 770px) {
    height: 360px;
  }
  @media screen and (max-width: 361px) {
    height: 430px;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: #fff;
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
  width: 150px;
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
const Modal = styled.div`
  transition: 1s;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  position: absolute;
  top: 60%;
  right: 5%;
  z-index: 1;
  box-shadow: 0px 0px 5px lightgrey, 0px 0px 7px lightgrey,
    0px 0px 10px lightgrey;
`;
const Text3 = styled(Text2)`
  opacity: 0.3;
`;
export default function Card({ img, t1, t2 }) {
  const { open, toggleM, closeM } = UseModal();
  const menuRef = useRef();
  const imgRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      closeM();
    }
  });
  return (
    <Content>
      <Img src={img} />
      <Bottom>
        <Texts>
          <Text1>{t1}</Text1>
          <Text2>{t2}</Text2>
        </Texts>
        {open ? (
          <Modal
            ref={menuRef}
            style={{
              transition: "1s",
            }}
          >
            <Text3>100x200</Text3>
            <Text3>250x300</Text3>
            <Text3>300x300</Text3>
            <Text3>350x500</Text3>
          </Modal>
        ) : (
          <Modal
            style={{
              zIndex: -1,
              transition: "1s",
              transform: "translateX(-200%)",
              padding: "0px",
            }}
          ></Modal>
        )}
        <Size onClick={() => toggleM()} ref={imgRef}>
          Размеры
        </Size>
      </Bottom>
    </Content>
  );
}
