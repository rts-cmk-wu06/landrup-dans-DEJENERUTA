import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Activities from "./pages/Activities";
import Calander from "./pages/Calander";
import Search from "./pages/Search";
import ActivityDetails from "./pages/ActivityDetails";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Welcome />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/calander" element={<Calander />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/activitydetails/:activityId"
              element={<ActivityDetails />}
            />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
