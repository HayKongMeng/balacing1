import React from "react";
import "./PricingComparison.css";

export default function Example() {
  return (
    <div className="pricing-container">
      <div className="pricing-card-wrapper">
        {/* Header Section */}
        <div className="header-section">
          <div className="pricing-cards">
            <div className="header-content">
              <h1 className="main-title">Detailed Feature Comparison</h1>
              <p className="main-description">
                Compare all features across our hosting plans
              </p>
            </div>

            <div className="pricing-cards-wrapper">
              {/* Spacer to align with Features column */}
              <div className="features-spacer"></div>

              {/* Startup VPS Card */}
              <div className="pricing-card">
                <h3 className="plan-name">STARTUP VPS</h3>
                <div className="price-container">
                  <span className="price-amount">$7.78</span>
                  <span className="price-suffix">/month</span>
                </div>
                <p className="plan-description">
                  Perfect for small projects and testing
                </p>
                <button className="plan-button inactive">Upgraded plan</button>
              </div>

              {/* Challenger VPS Card */}
              <div className="pricing-card">
                <h3 className="plan-name">CHALLENGER VPS</h3>
                <div className="price-container">
                  <span className="price-amount">$13.78</span>
                  <span className="price-suffix">/month</span>
                </div>
                <p className="plan-description">
                  Ideal for growing businesses and applications
                </p>
                <button className="plan-button inactive">Upgraded plan</button>
              </div>

              {/* Leader VPS Card - Active Plan */}
              <div className="pricing-card highlighted">
                <h3 className="plan-name">LEADER VPS</h3>
                <div className="price-container">
                  <span className="price-amount">$16.78</span>
                  <span className="price-suffix">/month</span>
                </div>
                <p className="plan-description">
                  Maximum performance for demanding workloads
                </p>
                <button className="plan-button active">
                  <svg
                    className="checkmark-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="currentColor" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  Your plan
                </button>
              </div>

              {/* Boss VPS Card */}
              <div className="pricing-card">
                <h3 className="plan-name">BOSS VPS</h3>
                <div className="price-container">
                  <span className="price-amount">$25.78</span>
                  <span className="price-suffix">/month</span>
                </div>
                <p className="plan-description">Good for enterprise company</p>
                <button className="plan-button primary">upgrade plan</button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="feature-table">
          {/* Table Header */}
          <div className="table-header">
            <div className="feature-label">Features</div>
            <div className="plan-labels">
              <div className="plan-label">STARTUP</div>
              <div className="plan-label highlighted-label">CHALLENGER</div>
              <div className="plan-label">LEADER</div>
              <div className="plan-label highlighted-label">BOSS</div>
            </div>
          </div>

          {/* Feature Rows */}
          <div className="feature-rows">
            <div className="feature-row">
              <div className="feature-name">RAM Memory</div>
              <div className="feature-values">
                <div className="feature-value">2 GB</div>
                <div className="feature-value highlighted-value">4 GB</div>
                <div className="feature-value">8 GB</div>
                <div className="feature-value highlighted-value">4 GB</div>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-name">vCPU Cores</div>
              <div className="feature-values">
                <div className="feature-value">1 Core</div>
                <div className="feature-value highlighted-value">2 Cores</div>
                <div className="feature-value">4 Cores</div>
                <div className="feature-value highlighted-value">2 Cores</div>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-name">Storage</div>
              <div className="feature-values">
                <div className="feature-value">25 GB</div>
                <div className="feature-value highlighted-value">80 GB</div>
                <div className="feature-value">160 GB</div>
                <div className="feature-value highlighted-value">80 GB</div>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-name">Bandwidth</div>
              <div className="feature-values">
                <div className="feature-value">1 Gbps</div>
                <div className="feature-value highlighted-value">1 Gbps</div>
                <div className="feature-value">1 Gbps</div>
                <div className="feature-value highlighted-value">1 Gbps</div>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-name">Transfer</div>
              <div className="feature-values">
                <div className="feature-value">Unlimited</div>
                <div className="feature-value highlighted-value">Unlimited</div>
                <div className="feature-value">Unlimited</div>
                <div className="feature-value highlighted-value">Unlimited</div>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-name">Hard Drive</div>
              <div className="feature-values">
                <div className="feature-value">NVMe</div>
                <div className="feature-value highlighted-value">NVMe</div>
                <div className="feature-value">NVMe</div>
                <div className="feature-value highlighted-value">NVMe</div>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-name">Anti-DDoS</div>
              <div className="feature-values">
                <div className="feature-value">Free</div>
                <div className="feature-value highlighted-value">Free</div>
                <div className="feature-value">Free</div>
                <div className="feature-value highlighted-value">Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
