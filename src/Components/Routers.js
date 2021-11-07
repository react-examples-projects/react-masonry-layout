import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="*"
          element={
            <h1>
              404 <br /> Not found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
