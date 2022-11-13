import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect } from "react";
import AboutUs from "./pages/AboutUs";
import MyDevices from "./pages/MyDevices";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/login");
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path="/devices"
        element={
          <Layout>
            <MyDevices />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
