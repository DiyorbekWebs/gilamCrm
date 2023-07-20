import React from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Catalog from "./Pages/Catalog";
import Login from "./components/Login/Login";
// import Signup from "./components/Login/SignUp";
import Confirm from "./components/Login/Confirmation";
import CreatePass from "./components/Login/CreatePass";
import ResetPass from "./components/Login/Resetpass";
import ProfilMain from "./Pages/Profil/Profil";
import Profill from "./Pages/Profil/Profill";
import ZakazP from "./Pages/Profil/Index";
import Info from "./Pages/Profil/Info";
import Shop from "./components/Shop/Shop";
import Filter from "./components/Filter";
import Texts from "./components/Texts/Texts";
import About from "./components/Texts/About";
import Deliver from "./components/Texts/Deliver";
import Usliga from "./components/Texts/Usliga";
import Contact from "./components/Texts/Contact";
import Payout from "./components/Payout/Payout";
// import Index from "./components/3chipage";
import SignUp2 from "./components/Login/SignUp2";
import Index from "./components/ThreePage";
// import Slidde from "./compon/ents/Shop2/Slidde";

export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<SignUp2 />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="createpass" element={<CreatePass />} />
        <Route path="resetpass" element={<ResetPass />} />
        <Route path="home" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="threepage" element={<Index />} />
        {/* <Route path="page3" element={<Index />} /> */}

        <Route path="payout" element={<Payout />} />
        <Route path="fill" element={<Filter />} />
        {/* <Route path="page" element={<Slidde/>} /> */}
        <Route path="profil" element={<ProfilMain />}>
          <Route index element={<Profill />} />
          <Route path="zakaz" element={<ZakazP />} />
          <Route path="info" element={<Info />} />
          <Route path="rename" element={<ZakazP />} />
        </Route>
        <Route path="text" element={<Texts />}>
          <Route index element={<About />} />
          <Route path="delver" element={<Deliver />} />
          <Route path="usligi" element={<Usliga />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>
      
    </Routes>
  );
}
