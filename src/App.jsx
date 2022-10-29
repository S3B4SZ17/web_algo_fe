import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import UserInfo from "./pages/User";
import "./App.css";
import Code_editor from "./pages/Code_editor";

function App() {
  return(
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/authorized/user" element={<UserInfo />} />
    <Route path="/authorized/code_editor" element={<Code_editor />} />
  </Routes>
  );
}

export default App;
