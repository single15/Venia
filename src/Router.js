import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from './pages/homePage'

const Router = () => (
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </App>
  </BrowserRouter>
);

export default Router;
