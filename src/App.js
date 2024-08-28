import Layout from "./component/Layout/Layout";
import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Homepage from "./pages/home/Homepage";
import Focuspage from "./pages/focus/Focuspage";
import Aboutpage from "./pages/aboutus/Aboutpage";
import Portfoliopage from "./pages/portfolio/Portfoliopage";
import Contactpage from "./pages/contact/Contactpage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>

          <Routes>
            <Route path="/focus" element={<Focuspage />} />
          </Routes>

          <Routes>
            <Route path="/about" element={<Aboutpage />} />
          </Routes>

          <Routes>
            <Route path="/portfolio" element={<Portfoliopage />} />
          </Routes>

          <Routes>
            <Route path="/contact" element={<Contactpage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
