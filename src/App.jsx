import { Route, Routes } from "react-router-dom";
import Authentication from "./page/Authentication";
import "./style.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="Authentication" element={<Authentication />} />
      </Routes>
    </>
  );
}

export default App;
