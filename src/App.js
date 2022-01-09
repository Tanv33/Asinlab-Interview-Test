import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Quiz from "./components/quiz/Quiz";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="*" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
