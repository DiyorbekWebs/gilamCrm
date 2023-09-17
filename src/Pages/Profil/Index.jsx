import React from "react";
import { styled } from "styled-components";
import Card1 from "./Card1";
import { Link } from "react-router-dom";
import axios from "axios";
const Box = styled.div`
  width: 100%;
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
`;
const ZakazP = () => {
  const { id } = JSON.parse(localStorage.getItem("user"));
  axios
    .get(
      "https://grm.getter.uz/user/client/c7520b62-bd93-44f6-9953-840504341636",
      {
        headers: {
          'Authorization':
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNzUyMGI2Mi1iZDkzLTQ0ZjYtOTk1My04NDA1MDQzNDE2MzYiLCJpYXQiOjE2OTE0NzA3ODIsImV4cCI6MTY5MTQ3Nzk4Mn0.sKL663YkpzPVqoXypCsuQlrXJ_GbzJ3AkSpl1huSAxw",
        },
      }
    )
    .then((res) => {
      console.log(res);
    });
  return (
    <Box>
      <Link to={"/profil/info"}>
        <Card1 />
      </Link>
      <Link to={"/profil/info"}>
        <Card1 />
      </Link>
      <Link to={"/profil/info"}>
        <Card1 />
      </Link>
      <Link to={"/profil/info"}>
        <Card1 />
      </Link>
      <Link to={"/profil/info"}>
        <Card1 />
      </Link>
    </Box>
  );
};

export default ZakazP;
