import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import UserInfo from "./pages/User";
import CodeEditor from "./pages/CodeEditor";
import ProtectedRoute from "./components/ProtectedRoute";
import AddTwo from "./pages/AddTwoCode";
import ReverseLinked from "./pages/ReverseLinkedCode";
import Faqs from "./pages/Faqs";

import "./App.css";
import WelcomeUser from "./pages/WelcomeUser";

function App() {
  return(
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/authorized/welcome" element={<WelcomeUser />} />
    <Route path="/authorized/user" element={<ProtectedRoute />}>
      <Route path="/authorized/user" element={<UserInfo />}/>
    </Route>
    <Route path="/authorized/code_editor" element={<ProtectedRoute />}>
      <Route path="/authorized/code_editor" element={<CodeEditor />} />
    </Route>
    <Route path="/authorized/" element={<ProtectedRoute />}>
      <Route path="/authorized/addTwo" element={<AddTwo />} />
    </Route>

    <Route path="/authorized/" element={<ProtectedRoute />}>
      <Route path="/authorized/reverseLinkedList" element={<ReverseLinked />} />
    </Route>

    <Route path="/authorized/" element={<ProtectedRoute />}>
      <Route path="/authorized/faqs" element={<Faqs />} />
    </Route>
    
  </Routes>
  );
}

export default App;
