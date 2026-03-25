import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../Redux/EventThunks";
import { setUser } from "../Redux/UserSlice";
import api from "../../api/axios";

const AUTH_SESSION_FLAG = "abh_session_active";
const AUTH_TOKEN_KEY = "abh_auth_token";

const ProfileRoute = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isCheckingSession, setIsCheckingSession] = useState(false);

  useEffect(() => {
    if (user) {
      setIsCheckingSession(false);
      return;
    }

    const hasSessionFlag = localStorage.getItem(AUTH_SESSION_FLAG) === "1";
    const hasToken = Boolean(localStorage.getItem(AUTH_TOKEN_KEY));

    if (!hasSessionFlag && !hasToken) {
      setIsCheckingSession(false);
      return;
    }

    let isMounted = true;
    setIsCheckingSession(true);

    const restoreUser = async () => {
      try {
        const res = await api.get("/users/me", { withCredentials: true });
        const me = res.data?.user || res.data?.data || null;

        if (isMounted && me) {
          dispatch(setUser(me));
          localStorage.setItem(AUTH_SESSION_FLAG, "1");
        }
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem(AUTH_SESSION_FLAG);
          localStorage.removeItem(AUTH_TOKEN_KEY);
        }
      } finally {
        if (isMounted) {
          setIsCheckingSession(false);
        }
      }
    };

    restoreUser();

    return () => {
      isMounted = false;
    };
  }, [dispatch, user]);

  useEffect(() => {
    if (!user) return;
    dispatch(fetchEvents());
  }, [dispatch, user]);

  if (isCheckingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/70">
        Restoring your session...
      </div>
    );
  }

  // If user is not logged in → redirect to signin
  if (!user) {
    return <Navigate to="/SignInForm" replace />;
  }

  // If user exists → show profile page
  return <ProfileCard />;
};

export default ProfileRoute;