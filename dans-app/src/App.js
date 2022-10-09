import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Activities from "./pages/Activities";
import Calander from "./pages/Calander";
import Search from "./pages/Search";
import ActivityDetails from "./pages/ActivityDetails";
import UserContextProvider from "./context/UserContext";

function App() {
  const [redirectPathAfterLogin, setRedirectPathAfterLogin] = useState(null);

  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                <Login redirectPathAfterLogin={redirectPathAfterLogin} />
              }
            />
            <Route path="/" element={<Welcome />} />
            <Route path="/activities" element={<Activities />} />
            <Route
              path="/calander"
              element={
                <Calander
                  setRedirectPathAfterLogin={setRedirectPathAfterLogin}
                />
              }
            />
            <Route path="/search" element={<Search />} />
            <Route
              path="/activitydetails/:activityId"
              element={
                <ActivityDetails
                  setRedirectPathAfterLogin={setRedirectPathAfterLogin}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
