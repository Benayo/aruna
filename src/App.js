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
import NotFound from "./pages/error/NotFound";

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

            <Route path="/focus" element={<Focuspage />} />

            <Route path="/about" element={<Aboutpage />} />

            <Route path="/portfolio" element={<Portfoliopage />} />

            <Route path="/contact" element={<Contactpage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
