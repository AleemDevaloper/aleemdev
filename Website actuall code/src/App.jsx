import { lazy, Suspense, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/Styles/global.scss";
import CustomCursor from "./Pages/components/CustomCursor";
import ScrollProgress from "./Pages/components/ScrollProgress";
import "./assets/Styles/Pages/floating-actions.scss";

const loadHome = () => import("./Pages/Home");
const Home = lazy(loadHome);
const Loding = lazy(() => import("./Pages/Loding"));
const Menu = lazy(() => import("./Pages/Menu"));
const Project = lazy(() => import("./Pages/Project"));
const About = lazy(() => import("./Pages/About"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function RouteFallback() {
  return (
    <div className="route-fallback" aria-label="Loading page">
      <span />
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <main className="route-enter" key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 320);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <div className="floating-actions">
      {showBackToTop && (
        <button
          className="floating-actions__top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      )}
      <a
        className="floating-actions__whatsapp"
        href="https://wa.me/923087923041?text=Hi%2C%20I%27m%20interested%20in%20your%20freelance%20services."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path
            d="M20.1 3.9A11.4 11.4 0 0 0 2.2 17.6L1 23l5.5-1.2A11.4 11.4 0 0 0 20.1 3.9ZM12 20a9.4 9.4 0 0 1-4.8-1.3l-.4-.2-3.3.7.7-3.2-.2-.4A9.4 9.4 0 1 1 12 20Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M16.8 13.9c-.3-.2-1.7-.9-2-.9-.2-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.1-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.4.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.5-.4Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    try {
      return !sessionStorage.getItem("aleem-visited");
    } catch {
      return true;
    }
  });
  const [showLoader, setShowLoader] = useState(isLoading);
  const [loaderExiting, setLoaderExiting] = useState(false);

  useEffect(() => {
    if (!isLoading) return undefined;

    let cancelled = false;
    let timeoutId;
    const minimumDisplay = new Promise((resolve) => setTimeout(resolve, 700));
    const homeReady = Promise.race([
      loadHome().catch(() => undefined),
      new Promise((resolve) => {
        timeoutId = setTimeout(resolve, 6000);
      }),
    ]);

    Promise.all([minimumDisplay, homeReady]).then(() => {
      if (cancelled) return;
      try {
        sessionStorage.setItem("aleem-visited", "true");
      } catch {
        // Storage can be unavailable in private browsing.
      }
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [isLoading]);

  useEffect(() => {
    if (isLoading || !showLoader) return undefined;

    setLoaderExiting(true);
    const timeoutId = setTimeout(() => setShowLoader(false), 450);
    return () => clearTimeout(timeoutId);
  }, [isLoading, showLoader]);

  return (
    <Router>
      <CustomCursor />
      <ScrollProgress />
      <FloatingActions />
      <ScrollToTop />
      <div className="app-shell">
        <Suspense fallback={<RouteFallback />}>
          {!isLoading && <AppRoutes />}
          {showLoader && <Loding isExiting={loaderExiting} />}
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
