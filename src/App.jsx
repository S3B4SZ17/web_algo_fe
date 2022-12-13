import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import UserInfo from "./pages/User";
import ReverseNumber from "./pages/ReverseNumber";
import ProtectedRoute from "./components/ProtectedRoute";
import AddTwo from "./pages/AddTwoCode";
import ReverseLinked from "./pages/ReverseList";
import Faqs from "./pages/Faqs";

import "./App.css";
import WelcomeUser from "./pages/WelcomeUser";

function App() {
  return(
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/authorized/welcome" element={<WelcomeUser />} />
    <Route path="/authorized/faqs" element={<Faqs />} />

    <Route path="/authorized/user" element={<ProtectedRoute />}>
      <Route path="/authorized/user" element={<UserInfo />}/>
    </Route>
    <Route path="/authorized/code_editor" element={<ProtectedRoute />}>
      <Route path="/authorized/code_editor" element={<ReverseNumber />} />
    </Route>
    <Route path="/authorized/addTwo" element={<ProtectedRoute />}>
      <Route path="/authorized/addTwo" element={<AddTwo />} />
    </Route>

    <Route path="/authorized/reverseLinkedList" element={<ProtectedRoute />}>
      <Route path="/authorized/reverseLinkedList" element={<ReverseLinked />} />
    </Route>
    
  </Routes>
  );
}

export default App;
