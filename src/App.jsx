import React from "react";
import { Routes, Route } from "react-router-dom";
import FormWithoutYup from "./Components/FormWithoutYup";
import FormSuccess from "./Components/FormSuccess";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<FormWithoutYup />} />
        <Route path="/success" element={<FormSuccess />} />
      </Routes>
    </div>
  );
};

export default App;
