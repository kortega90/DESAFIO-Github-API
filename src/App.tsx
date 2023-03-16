import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Home from "./routes";
import Before from "./routes/Before";
import After from "./routes/Before/After";
import HomeBody from "./routes/HomeBody";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="before" element={<Before />}>
            <Route path="after" element={<After />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
