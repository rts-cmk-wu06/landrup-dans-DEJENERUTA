import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Activities from "./pages/Activities";
import Calander from "./pages/Calander";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/calander" element={<Calander />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
