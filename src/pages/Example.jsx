import React from "react";
import "./PricingComparison.css";

export default function Example() {
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
      showDetails: true,
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
      showDetails: false,
      buttonType: "dropdown",
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
      showDetails: false,
      buttonType: "dropdown",
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
      showDetails: false,
      buttonType: "dropdown",
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
      showDetails: false,
      buttonType: "dropdown",
    },
  ];

  const featureKeys = Object.keys(plans[0].features);

  return (
    <div className="pricing-wrapper">
      {/* Mobile Card Layout */}
      <div className="mobile-pricing-container">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`mobile-pricing-card ${plan.showDetails ? "detailed" : "compact"}`}
          >
            <div className="plan-header">
              <div className="plan-info-section">
                <div className="plan-icon">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/3b078e06f1464ed6882e255b1243da7b/505a9ecc43bfc66faa92014d5f80144739da447f?placeholderIfAbsent=true"
                    alt={`${plan.level} icon`}
                    className="level-icon"
                  />
                </div>
                <div className="plan-details">
                  <h3 className="plan-level">{plan.level}</h3>
                  <p className="plan-type">{plan.type}</p>
                </div>
              </div>
              <div className="plan-pricing">
                <span className="plan-price">{plan.price}</span>
                {plan.buttonType === "dropdown" && (
                  <button
                    className="dropdown-toggle"
                    aria-label="View plan details"
                  >
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none">
                      <path d="M8.5 14L0 0H17L8.5 14Z" fill="currentColor" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {plan.showDetails && (
              <>
                <p className="plan-description">{plan.description}</p>

                <div className="features-list">
                  {Object.entries(plan.features).map(([key, value], index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-checkmark">
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
                      <span className="feature-text">
                        {key}: {value}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="choose-plan-button">
                  {plan.buttonText}
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Table Layout */}
      <div className="desktop-table-container">
        <div className="table-wrapper">
          <table className="pricing-table">
            <thead>
              <tr>
                <th className="feature-header">Features</th>
                {plans.map((plan) => (
                  <th key={plan.id} className="plan-header-cell">
                    <div className="plan-header-content">
                      <div className="table-plan-icon">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/3b078e06f1464ed6882e255b1243da7b/505a9ecc43bfc66faa92014d5f80144739da447f?placeholderIfAbsent=true"
                          alt={`${plan.level} icon`}
                          className="table-level-icon"
                        />
                      </div>
                      <div className="table-plan-info">
                        <h3 className="table-plan-level">{plan.level}</h3>
                        <p className="table-plan-type">{plan.type}</p>
                        <p className="table-plan-price">{plan.price}</p>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureKeys.map((featureKey) => (
                <tr key={featureKey} className="feature-row">
                  <td className="feature-name">{featureKey}</td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="feature-value">
                      {plan.features[featureKey]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="action-row">
                <td className="feature-name">Action</td>
                {plans.map((plan) => (
                  <td key={plan.id} className="action-cell">
                    <button
                      className={`table-action-button ${plan.id === 1 ? "primary" : "secondary"}`}
                    >
                      {plan.id === 1 ? "Choose Plan" : "Select"}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
