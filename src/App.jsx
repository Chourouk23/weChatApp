import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  Routes,
  Navigate,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Navbar from "./components/navbar/Navbar";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  //const [isDarkMode, setIsDarkMode] = useState("true");
  const { isDarkMode }=useContext(DarkModeContext);
  const currentUser = false;
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const Layout = () => {
    return (
      <div className={isDarkMode ? "theme-dark" : "theme-light"}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{  flex : 6 }} className="outlet">
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Layout />
      ),
      //</ProtectedRoute>
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/*  <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
    </>
  );
}

export default App;
