import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import Navbar from "./components/nav/Navbar";
import Admin from "./pages/dashboards/admin/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
