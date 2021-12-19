import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import LogIn from "./Data/LogIn";
import FormSuccess from "./Data/FormSuccess";
import Profile from "./Data/Profile";
import Feed from "./Data/MainFeed";
import Users from "./Data/LocalStorage";
import SignUp from "./Data/FormSignup";
import Form from "./Data/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/MainFeed" element={<Feed />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
