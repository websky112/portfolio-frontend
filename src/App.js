import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About, Contact, Portfolio, Portfolios } from "./views";
import { Topbar } from "./components/layout";

import "swiper/css";
import "swiper/css/scrollbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Portfolios />} />
          <Route path="/work/:company" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Portfolios />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
