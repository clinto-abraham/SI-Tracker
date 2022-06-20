import LeverTabs from "./components/Levers";
import Home from "./components/Home";
import Form from "./components/Forms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNavbar from "./components/BottomNavbar";
import Navbar from "./components/Navbar";
import Output from "./components/OutputData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="lever" element={<LeverTabs />} />
          <Route path="form" element={<Form />} />
          <Route path="project-data" element={<Output />} />
        </Routes>
        <BottomNavbar />
      </BrowserRouter>
    </>
  );
}

export default App;

