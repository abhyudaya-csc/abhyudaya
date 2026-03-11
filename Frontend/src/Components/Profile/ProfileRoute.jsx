import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";


function ProfileRoute() {
  const user = useSelector((state) => state.user);

  // If user is not logged in → redirect to signin
  if (!user) {
    return <Navigate to="/SignInForm" />;
  }

  // If user exists → show profile page
  return <ProfileCard />;
}

export default ProfileRoute;