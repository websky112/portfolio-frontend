import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About, Contact, Portfolios } from "./views";
import { Topbar } from "./components/layout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Portfolios />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Portfolios />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
