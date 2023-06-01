import React from "react";
import styled from "styled-components";
import {
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
const Content = styled.div`
  background-color: #f3f1ef;
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
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 885px) {
    gap: 20px;
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
    font-size: 13px;
  }
`;
export function Header() {
  return (
    <Content>
      <div className="container">
        <Box>
          <Right>
            <Logotip src={Logo} />
            <Link to={"catalog"}>
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
            <img src={Icon4} alt="" />
            <img src={Icon5} alt="" />
            <img src={Icon6} alt="" />
          </Left>
        </Box>
      </div>
    </Content>
  );
}
