import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './assets/styles/global.scss'
import Page from "./components/Page";
import Finance from "./views/Finance";
import Marketing from "./views/Marketing";
import Personnel from "./views/Personnel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="marketing" element={<Marketing />} />
          <Route path="finance" element={<Finance />} />
          <Route path="personnel" element={<Personnel />} />
        </Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;

//
