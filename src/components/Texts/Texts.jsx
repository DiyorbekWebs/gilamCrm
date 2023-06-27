import React from "react";
import { styled } from "styled-components";
import { textLi } from "../../constant/texts/text";
import { Link, Outlet } from "react-router-dom";
const Content = styled.div``;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;
const Right = styled.div``;
const Item = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #282a2c;
  transition: 1s;
  &:hover {
    transition: 1s;
    color: #f8501a;
  }
`;
const Bottom = styled.div`
  display: flex;
  gap: 72px;
`;
const Left = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 21px;
  height: 100vh;
  padding-right: 63px;
  border: 1px solid transparent;
  border-right: 1px solid rgb(233,234,234);
`;
export const LinkH = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #282828;
  opacity: 0.5;
`;
export const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
export const LinkS = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #f8501a;
`;
const Texts = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Path>
            <Link style={{ color: "#282828", opacity: 0.51 }}>Главная //</Link>
            <LinkH>Регистрация //</LinkH>
            <LinkS>Подтверждение</LinkS>
          </Path>
          <Bottom>
            <Left>
              {textLi?.map((e) => (
                <Link key={e.id} to={e.path}>
                  <Item>{e.title}</Item>
                </Link>
              ))}
            </Left>
            <Right>
              <Outlet />
            </Right>
          </Bottom>
        </Box>
      </div>
    </Content>
  );
};

export default Texts;
