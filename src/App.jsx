import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import MyDevices from "./pages/MyDevices";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <Layout>
              <AboutUs />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/devices"
        element={
          <PrivateRoute>
            <Layout>
              <MyDevices />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Layout>
              <Profile />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
