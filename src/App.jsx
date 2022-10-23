import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import UserInfo from "./pages/User";
import "./App.css";

function App() {
  return(
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/user" element={<UserInfo />} />
  </Routes>
  );
}

export default App;
