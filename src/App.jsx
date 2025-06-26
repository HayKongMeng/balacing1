import "./App.css";
import "./ResponsiveApp.css";
import Example from "./pages/Example";
import PricingPlans from "./pages/PricingPlans";

function App() {
  return (
    <div className="App">
      {/* Desktop: Show table */}
      <div className="desktop-view">
        <Example />
      </div>

      {/* Mobile: Show cards */}
      <div className="mobile-view">
        <PricingPlans />
      </div>
    </div>
  );
}

export default App;
