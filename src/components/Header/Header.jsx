import React, { useRef } from "react";
import styled from "styled-components";
import {
  Burger,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Logo,
} from "../../assets/img/img";
import { Link } from "react-router-dom";
import { ListInfor } from "../../constant/hlist";
import UseModal from "../../hooks/useModal";
import Modal2 from "./Modal2/Modal2";
const Content = styled.div`
  background-color: #ffff;
  position: relative;
`;
const Box = styled.div`
  padding: 25px 0px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  @media screen and (max-width: 885px) {
    gap: 25px;
  }
  @media screen and (max-width: 430px) {
    gap: 35px;
  }
`;
export const Logotip = styled.img`
  margin-top: -10px;
`;
const Catalog = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 3px;
  color: #282828;
  @media screen and (max-width: 885px) {
    gap: 5px;
  }
  @media screen and (max-width: 430px) {
    display: none;
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Input = styled.input`
  outline: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #282828;
  border: none;
  background-color: transparent;
  &::placeholder {
    color: #282828;
    opacity: 0.3;
  }
  @media screen and (max-width: 885px) {
    width: 100px;
  }
  @media screen and (max-width: 430px) {
    width: 100px;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 885px) {
    gap: 20px;
  }
  @media screen and (max-width: 430px) {
    display: none;
  }
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 885px) {
    gap: 20px;
  }
`;
const Item = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #282828;
  @media screen and (max-width: 885px) {
    font-size: 12px;
  }
`;
const Comnate = styled.div`
  padding: 6px 15px 7px 9px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #dfdddb;
  border-radius: 2px;
`;
const ProText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  @media screen and (max-width: 885px) {
    line-height: 13px;
    font-size: 10px;
  }
`;
const BurgerImg = styled.img`
  width: 30px;
  height: 30px;
  display: none;
  @media screen and (max-width: 430px) {
    display: block;
  }
`;
const Modal = styled.div`
  display: none;
  @media screen and (max-width: 430px) {
    display: flex;
    width: 100%;
    height: 370px;
    background-color: #f3f1ef;
    position: absolute;
    z-index: 1;
    top: 90px;
    left: 0;
    transform: translateX(0%);
    transition: 1s;
    align-items: center;
    justify-content: center;
  }
`;
const ListM = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  justify-content: center;
`;
const Icons = styled.div`
  display: flex;
  gap: 30px;
`;
const Icon = styled.img`
  width: 25px;
  height: 25px;
`;
const ItemM = styled(Item)`
  font-size: 16px;
`;

export function Header() {
  const { open, openM, closeM, toggleM } = UseModal();
  const { open: open2, closeM: closeM2, toggleM: toggleM2 } = UseModal();

  return (
    <Content
      onClick={() => {
        closeM();
      }}
    >
      <div className="container">
        <Box>
          <Right>
            <Link to={"home"}>
              <Logotip src={Logo} />
            </Link>
            <Link
              onClick={(e) => {
                toggleM();
                e.stopPropagation()
              }}
            >
              <Catalog>
                <img src={Icon1} alt="" />
                <ProText>Каталог продуктов</ProText>
              </Catalog>
            </Link>
            <Search>
              <img src={Icon2} alt="" />
              <Input placeholder="Поиск" type="text" />
            </Search>
          </Right>
          <Left>
            <List>
              {ListInfor?.map((e) => (
                <Link key={e.id} to={e.path}>
                  <Item>{e.text}</Item>
                </Link>
              ))}
            </List>
            <Comnate>
              <img src={Icon3} alt="" />
              <ProText>Посмотреть в комнате</ProText>
            </Comnate>
            <Link to={"profil/rename"}>
              <img src={Icon4} alt="" />
            </Link>
            <Link to={"shop"}>
              <img src={Icon5} alt="" />
            </Link>
            <Link to={"profil"}>
              <img src={Icon6} alt="" />
            </Link>
          </Left>
          <BurgerImg onClick={() => toggleM2()} src={Burger} alt="" />
          {open ? (
            <Modal2 style1={{ transform: "rotateX(0deg)", zIndex: 1 }} />
          ) : (
            <Modal2
              style1={{
                zIndex: 1,
                transform: "rotateX(90deg)",
              }}
            />
          )}
          {open2 ? (
            <Modal>
              <ListM>
                <Link to={"catalog"}>
                  <ItemM>Каталог продуктов</ItemM>
                </Link>
                {ListInfor?.map((e) => (
                  <Link key={e.id} to={e.path}>
                    <ItemM>{e.text}</ItemM>
                  </Link>
                ))}
                <Link>
                  <Comnate>
                    <img src={Icon3} alt="" />
                    <ItemM>Посмотреть в комнате</ItemM>
                  </Comnate>
                </Link>
                <Icons>
                  <Link to={"profil/rename"}>
                    <Icon src={Icon4} alt="" />
                  </Link>
                  <Link to={"shop"}>
                    <Icon src={Icon5} alt="" />
                  </Link>
                  <Link to={"profil"}>
                    <Icon src={Icon6} alt="" />
                  </Link>
                </Icons>
              </ListM>
            </Modal>
          ) : (
            <Modal
              style={{ transition: "1s", transform: "translateX(-200%)" }}
            />
          )}
        </Box>
      </div>
    </Content>
  );
}
