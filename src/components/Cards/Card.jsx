import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import UseModal from "../../hooks/useModal";
import { Link } from "react-router-dom";
import { Heart } from "../../assets/img/img";
import "./index.css";
import axios from "axios";
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  cursor: default;
  position: relative;
`;
const Img = styled.img`
  height: 456px;
  width: 323px;
  @media screen and (max-width: 1281px) {
    height: 486px;
    width: 385px;
  }
  @media screen and (max-width: 835px) {
    width: 390px;
    height: 470px;
  }
  @media screen and (max-width: 801px) {
    width: 375px;
    height: 470px;
  }
  @media screen and (max-width: 770px) {
    width: 355px;
    height: 450px;
  }
  @media screen and (max-width: 361px) {
    width: 100%;
    height: 430px;
  }
`;
const Bottom = styled.div`
  display: flex;
  gap: 120px;
  align-items: flex-start;
  justify-content: flex-start;
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
const HeartIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const Div = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export default function Card({ img, t1, t2, id }) {
  const { open, toggleM, closeM } = UseModal();
  const { open: open2, toggleM: toggle2 } = UseModal();
  const menuRef = useRef();
  const imgRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      closeM();
    }
  });
  async function add() {
   await axios
      .post(`http://192.168.0.119:4000/user/add-favorite-product/${id}`, {
        withCredentials: true,
      })
      .then((e) => {
        console.log(e);
      })
      .catch(err =>console.log(err));
  }

  // async function add() {
  //   await fetch(`http://192.168.0.119:4000/user/add-favorite-product/${id}`, {
  //     withCredentials: false,
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((e) => {
  //       console.log(e, "s");
  //     })
  //     .catch((err) => console.log(err));
  // }

  function remove() {
    axios
      .post(`https://grm.getter.uz/user/remove-favorite-product/${id}`, {
        withCredentials: true,
      })
      .then((e) => {
        console.log(e);
      });
  }
  return (
    <Content>
      <Link to="/threepage">
        <Img src={img} />
      </Link>
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
        <Div>
          <HeartIcon
            src={Heart}
            alt=""
            className={open2 ? "heart" : null}
            // className="heart"
            // className={"heart"}
            onClick={() => {
              toggle2();
              if (open2) {
                add();
              } else {
                console.log("hechnima");
              }
            }}
          />
          <Size onClick={() => toggleM()} ref={imgRef}>
            Размеры
          </Size>
        </Div>
      </Bottom>
    </Content>
  );
}
