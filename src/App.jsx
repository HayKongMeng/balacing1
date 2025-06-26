import "./App.css";
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

      <style jsx>{`
        .desktop-view {
          display: none;
        }

        .mobile-view {
          display: block;
        }

        @media (min-width: 1024px) {
          .desktop-view {
            display: block;
          }

          .mobile-view {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
