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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/confirm" element={<Confirm  />} />
        <Route path="/createpass" element={<CreatePass  />} />
        <Route path="/resetpass" element={<ResetPass  />} />
        <Route path="profil" element={<ProfilMain/>}>
          
          </Route> 
        <Route path="/h" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
      </Route>
    </Routes>
  );
}
