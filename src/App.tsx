import LeverTabs from "./components/Levers";
import Home from "./components/Home";
import Form from "./components/Forms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNavbar from "./components/BottomNavbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="lever" element={<LeverTabs />} />
          <Route path="form" element={<Form />} />
        </Routes>
        <BottomNavbar />
      </BrowserRouter>
    </>
  );
}

export default App;

