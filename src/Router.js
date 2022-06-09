import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const Router = () => (
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<h1>Hello World!!</h1>} />
      </Routes>
    </App>
  </BrowserRouter>
);

export default Router;
