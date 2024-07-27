import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
