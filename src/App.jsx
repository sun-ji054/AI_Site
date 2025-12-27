import { Routes, Route } from "react-router-dom";
import "./App.css";
import XGBoost from "./pages/XGBoost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<XGBoost />} />
    </Routes>
  );
}

export default App;
