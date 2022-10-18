import React from "react";
import { Routes, Route } from "react-router-dom";
import Aircraft from "./pages/Aircraft";
import Airlines from "./pages/Airlines";
import Airport from "./pages/Airport";
import Home from "./pages/Home";
import User from "./pages/User";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/airlines" element={<Airlines />} />
      <Route path="/airport" element={<Airport />} />
      <Route path="/aircraft" element={<Aircraft />} />
    </Routes>
  )
}