import { Routes, Route } from "react-router-dom";
import "./App.css";
import XGBoost from "./pages/XGBoost";
import EDA from "./pages/EDA";

function App() {
  return (
    <Routes>
      <Route path="/XGBoost" element={<XGBoost />} />
      <Route path="/" element={<EDA />} />
    </Routes>
  );
}

export default App;
