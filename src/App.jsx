import {
  Outlet,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./components/others/Footer";
import Header from "./components/others/Header";
import ScrollButton from "./components/others/ScrollButton";
import Privacy from "./pages/Privacy";
import SStories from "./pages/SStories";
import ICTPage from "./pages/ICTPage";
import HealthPage from "./pages/HealthPage";
import ScholarshipPage from "./pages/ScholarshipPage";
import EmpowermentPage from "./pages/EmpowermentPage";
import Hero from "./components/home/Hero";
import ScrollToTop from "./components/others/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

AOS.init({
  duration: 800,
  once: true, // animate only once when scrolling down
});

const Layout = () => {
  return (
    <div>
      {<Header />}
      <Outlet />
      {<Footer />}
    </div>
  );
};

const App = () => {
  return (
    <div className="font-bodyFont">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sstories" element={<SStories />} />
            <Route path="/projects/ict" element={<ICTPage />} />
            <Route path="/projects/health" element={<HealthPage />} />
            <Route path="/projects/scholarship" element={<ScholarshipPage />} />
            <Route path="/projects/empowerment" element={<EmpowermentPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        <ScrollButton />
      </Router>
    </div>
  );
};

export default App;
