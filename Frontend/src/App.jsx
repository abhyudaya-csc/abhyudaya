import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Routing from "./Components/Routing";
import Footer from "./Components/Footer/Footer";

import api from "./api/axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./Components/Redux/UserSlice";

function AppContent() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);   

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users/me");
        dispatch(setUser(res.data.user));
      } catch (err) {
        console.log("No logged-in user");
      }
    };

    // ⭐ Only fetch if Redux doesn't already have a user
    if (!user) {
      fetchUser();
    }
  }, [user, dispatch]);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <Routing />
      </div>
      {!isLanding && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
