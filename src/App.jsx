import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import CheckinPage from "./Pages/CheckinPages";
import InfoPenerbangan from "./Pages/Informasi";



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CheckinPage" element={<CheckinPage/>} />
      <Route path="/Penerbangan" element={<InfoPenerbangan/>} />
      
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
