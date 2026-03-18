import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Routing from "./Components/Routing";
import Footer from "./Components/Footer/Footer";

import api from "./api/axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./Components/Redux/UserSlice";

const AUTH_SESSION_FLAG = "abh_session_active";

function AppContent() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);   

  useEffect(() => {
    const shouldRestoreSession =
      localStorage.getItem(AUTH_SESSION_FLAG) === "1";

    if (user || !shouldRestoreSession) {
      return;
    }

    let isMounted = true;

    const fetchUser = async () => {
      try {
        const res = await api.get("/users/me");
        if (isMounted) {
          dispatch(setUser(res.data.user));
        }
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem(AUTH_SESSION_FLAG);
          return;
        }

        console.error("Failed to fetch current user", err);
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
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
