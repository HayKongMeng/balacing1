import "./App.css";
import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";
import Example from "./pages/Example";
import PricingPlans from "./pages/PricingPlans";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav
          style={{
            padding: "20px",
            background: "#f5f5f5",
            marginBottom: "20px",
          }}
        >
          <Link
            to="/"
            style={{
              marginRight: "20px",
              textDecoration: "none",
              color: "#1976d2",
            }}
          >
            Pricing Comparison Table
          </Link>
          <Link
            to="/plans"
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            Pricing Plans
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/example" element={<Example />} />
          <Route path="/plans" element={<PricingPlans />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
