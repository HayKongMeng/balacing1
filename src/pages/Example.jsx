import React, { useState } from "react";
import "./PricingComparison.css";

export default function Example() {
  const [expandedCards, setExpandedCards] = useState({ 1: true }); // Level 1 expanded by default

  const toggleCard = (cardId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const plans = [
    {
      id: 1,
      level: "Level 1",
      type: "Basic plan",
      price: "$10.00/month",
      description:
        "Perfect for small projects, personal websites, and development environments",
      features: {
        vCPU: "16",
        RAM: "32 GB",
        Storage: "10 GB",
        Transfer: "Unlimited",
        "Anti-DDoS": "Free",
        "Database Options": "MySQL, MongoDB",
      },
      buttonText: "Choose plan",
      buttonType: "primary",
    },
    {
      id: 2,
      level: "Level 2",
      type: "Pro plan",
      price: "$15.00/month",
      features: {
        vCPU: "32",
        RAM: "64 GB",
        Storage: "50 GB",
        Transfer: "Unlimited",
        "Anti-DDoS": "Free",
        "Database Options": "MySQL, MongoDB, PostgreSQL",
      },
      buttonText: "Choose plan",
      buttonType: "secondary",
    },
    {
      id: 3,
      level: "Level 3",
      type: "Enterprise plan",
      price: "$20.00/month",
      features: {
        vCPU: "64",
        RAM: "128 GB",
        Storage: "100 GB",
        Transfer: "Unlimited",
        "Anti-DDoS": "Premium",
        "Database Options": "All databases + Redis",
      },
      buttonText: "Choose plan",
      buttonType: "secondary",
    },
    {
      id: 4,
      level: "Level 4",
      type: "Enterprise plan",
      price: "$25.00/month",
      features: {
        vCPU: "128",
        RAM: "256 GB",
        Storage: "500 GB",
        Transfer: "Unlimited",
        "Anti-DDoS": "Premium",
        "Database Options": "All databases + Dedicated",
      },
      buttonText: "Choose plan",
      buttonType: "secondary",
    },
    {
      id: 5,
      level: "Level 5",
      type: "Enterprise plan",
      price: "$30.00/month",
      features: {
        vCPU: "256",
        RAM: "512 GB",
        Storage: "1 TB",
        Transfer: "Unlimited",
        "Anti-DDoS": "Enterprise",
        "Database Options": "Custom solutions",
      },
      buttonText: "Choose plan",
      buttonType: "secondary",
    },
  ];

  const featureKeys = Object.keys(plans[0].features);

  return (
    <div className="pricing-container">
      <div className="pricing-card-wrapper">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-content">
            <h1 className="main-title">Detailed Feature Comparison</h1>
            <p className="main-description">
              Compare all features across our hosting plans
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="pricing-cards">
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
              <div className="feature-name">vCPU Cores</div>
              <div className="feature-values">
                <div className="feature-value">1 Core</div>
                <div className="feature-value highlighted-value">2 Cores</div>
                <div className="feature-value">4 Cores</div>
                <div className="feature-value highlighted-value">2 Cores</div>
              </div>
            </div>

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

      {/* Mobile Expandable Cards */}
      <div className="mobile-cards-container">
        {plans.map((plan) => (
          <div key={plan.id} className="expandable-card">
            <div className="card-header" onClick={() => toggleCard(plan.id)}>
              <div className="card-info-section">
                <div className="card-icon">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3b078e06f1464ed6882e255b1243da7b/505a9ecc43bfc66faa92014d5f80144739da447f?placeholderIfAbsent=true"
                    alt={`${plan.level} icon`}
                    className="level-icon"
                  />
                </div>
                <div className="card-details">
                  <h3 className="card-level">{plan.level}</h3>
                  <p className="card-type">{plan.type}</p>
                </div>
              </div>
              <div className="card-pricing">
                <span className="card-price">{plan.price}</span>
                <button
                  className="expand-toggle"
                  aria-label="Toggle plan details"
                >
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    className={expandedCards[plan.id] ? "rotated" : ""}
                  >
                    <path d="M8.5 14L0 0H17L8.5 14Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`card-content ${expandedCards[plan.id] ? "expanded" : ""}`}
            >
              {plan.description && (
                <p className="card-description">{plan.description}</p>
              )}

              <div className="card-features-list">
                {Object.entries(plan.features).map(([key, value], index) => (
                  <div key={index} className="card-feature-item">
                    <div className="card-feature-checkmark">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle cx="10" cy="10" r="10" fill="#10B981" />
                        <path
                          d="M6 10l2 2 6-6"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <span className="card-feature-text">
                      {key}: {value}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`card-action-button ${plan.buttonType}`}>
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
