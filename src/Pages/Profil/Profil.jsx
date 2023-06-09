import React from "react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { LinkH, LinkS, Path } from "../../components/Login/Confirmation";
import { profilCat } from "../../constant/profil/profil";
const Box = styled.div``;
const Content = styled.div`
  padding: 40px 0px 220px 0px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const Bottom = styled.div`
  display: flex;
  gap: 136px;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 36px;
  }
`;
const Left = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 430px) {
    flex-direction: row;
    gap: 20px;
  }
`;
const Item = styled.li`
  color: #282828;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  color: #282828;
  @media screen and (max-width: 430px) {
  font-size: 15px;

  }
`;
const Right = styled.div``;
  
const ProfilMain = () => {
  return (
    <Content>
      <div className="container">
        <Box>
          <Path>
            <LinkH>Главная //</LinkH>
            <LinkH>Регистрация //</LinkH>
            <LinkS>Подтверждение</LinkS>
          </Path>
          <Bottom>
            <Left>
              {profilCat?.map((e) => (
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

export default ProfilMain;
