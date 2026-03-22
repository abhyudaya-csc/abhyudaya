import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../Redux/EventThunks";

const ProfileRoute = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) return;
    dispatch(fetchEvents());
  }, [dispatch, user]);

  // If user is not logged in → redirect to signin
  if (!user) {
    return <Navigate to="/SignInForm" />;
  }

  // If user exists → show profile page
  return <ProfileCard />;
};

export default ProfileRoute;