import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Topheader from "./components/Topheader/Topheader.jsx";
import Homesection from "./pages/Homesection/Homesection.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
const App = () => {
  return (
    <>
      <Topheader />

      <Navbar />
      <Routes>
        <Route path="/" element={<Homesection />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
