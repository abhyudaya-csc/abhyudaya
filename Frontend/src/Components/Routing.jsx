import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
/*import ContactUs from "./Contact/ContactUs";
import Members from "./Team/Members";
import CampusAmbassadorProgram from "./CampusAmbassador/CampusAmbassadorProgram";
import ProfileRoute from "./Profile/ProfileRoute";
import Events from "./Events/Events";
import EventDetail from "./Events/EventDetail";
import Gallery from "./Gallery/Gallery";
import Sponsors from "./Sponsors/Sponsors";*/
import Herox from "./NewHome/Landing"

function Routing() {
  const user  =  useSelector(state=> state.user)
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    if (user) {
      toast.success(`Happy Abhyudaya ${user.fullName}🎉`);
    }
  }, []);


  
  return (
    <div
      style={{
        paddingLeft: "calc(var(--sidebar-width) + 0px)", // Ensure px unit
        width: "100%",
  
      }}
      className="min-h-screen bg-gray-900 overflow-hidden"
    >
      <Toaster />

      <Routes>
        <Route path="/" element={<Herox />} />
        
        {/*<Route path="/about" element={<Members />} />
        <Route
          path="/campus-ambassador"
          element={<CampusAmbassadorProgram />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Sponsors" element={<Sponsors />} />
        <Route path="/profile" element={<ProfileRoute />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />*/}
      </Routes>
    </div>
  );
}

export default Routing;
