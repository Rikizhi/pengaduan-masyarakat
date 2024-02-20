import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routing;
