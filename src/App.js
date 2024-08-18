import Layout from "./component/Layout/Layout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/home/Homepage";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
