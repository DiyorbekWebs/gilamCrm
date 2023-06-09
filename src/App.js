import React from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Catalog from "./Pages/Catalog";
import Login from "./components/Login/Login";
import Signup from "./components/Login/SignUp";
import Confirm from "./components/Login/Confirmation";
import CreatePass from "./components/Login/CreatePass";
import ResetPass from "./components/Login/Resetpass";
import ProfilMain from "./Pages/Profil/Profil";
import Profill from "./Pages/Profil/Profill";
import ZakazP from "./Pages/Profil/Index";
import Info from "./Pages/Profil/Info";
import Shop from "./components/Shop/Shop";
// import Slidde from "./compon/ents/Shop2/Slidde";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="createpass" element={<CreatePass />} />
        <Route path="resetpass" element={<ResetPass />} />
        <Route path="home" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="shop" element={<Shop />} />
        {/* <Route path="page" element={<Slidde/>} /> */}
        <Route path="profil" element={<ProfilMain />}>
          <Route index element={<Profill />} />
          <Route path="zakaz" element={<ZakazP />} />
          <Route path="info" element={<Info />} />
          <Route path="rename" element={<ZakazP />} />
        </Route>
      </Route>
    </Routes>
  );
}
