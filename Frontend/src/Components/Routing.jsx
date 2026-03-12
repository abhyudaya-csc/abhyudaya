import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

// Lazy load all components for better performance
const ContactUs = lazy(() => import("./Contact/ContactUs"));
const Members = lazy(() => import("./Team/Members"));
const CampusAmbassadorProgram = lazy(
  () => import("./CampusAmbassador/CampusAmbassadorProgram"),
);
const ProfileRoute = lazy(() => import("./Profile/ProfileRoute"));
const Events = lazy(() => import("./Events/Events"));
const EventDetail = lazy(() => import("./Events/EventDetail"));
const Gallery = lazy(() => import("./Gallery/Gallery"));
const Sponsors = lazy(() => import("./Sponsors/Sponsors"));
const Herox = lazy(() => import("./NewHome/Herox"));
const SignInForm = lazy(() => import("./Profile/SignInForm"));
const SignUpForm = lazy(() => import("./Profile/SignUpForm"));

// Loading spinner component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#120c0f]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white/70 text-sm">Loading...</p>
    </div>
  </div>
);

function Routing() {
  const user = useSelector((state) => state.user);
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

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Herox />} />
          <Route path="/about" element={<Members />} />
          <Route
            path="/campus-ambassador"
            element={<CampusAmbassadorProgram />}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="/profile" element={<ProfileRoute />} />
          <Route path="/SignInForm" element={<SignInForm />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Routing;
