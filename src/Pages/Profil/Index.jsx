import React from "react";
import { styled } from "styled-components";
import Card1 from "./Card1";
import { Link } from "react-router-dom";
const Box = styled.div`
width: 100%;
display: flex;
gap: 80px;
flex-wrap: wrap;
`;
const ZakazP = () => {
  return (
    <Box>
        <Link to={"/profil/info"}>
      <Card1 />
        </Link>
        <Link to={"/profil/info"}>
      <Card1 />
        </Link><Link to={"/profil/info"}>
      <Card1 />
        </Link><Link to={"/profil/info"}>
      <Card1 />
        </Link><Link to={"/profil/info"}>
      <Card1 />
        </Link>
    </Box>
  );
};

export default ZakazP;
