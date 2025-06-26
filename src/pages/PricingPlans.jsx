import React, { useState } from "react";
import "./PricingPlans.css";

const PricingPlans = () => {
  const [expandedPlan, setExpandedPlan] = useState("level1");

  const plans = [
    {
      id: "level1",
      level: "Level 1",
      type: "Basic plan",
      price: "$10.00/month",
      iconText: "L1",
      description:
        "Perfect for small projects, personal websites, and development environments",
      features: [
        "vCPU: 16",
        "RAM: 32 GB",
        "Storage: 10 GB",
        "Transfer: Unlimited",
        "Anti-DDoS: Free",
        "Database Options: MySQL ,MongoDB",
      ],
      showButton: true,
      isExpanded: true,
    },
    {
      id: "level2",
      level: "Level 2",
      type: "Pro plan",
      price: "$16.00/month",
      iconText: "L2",
      features: [
        "vCPU: 32",
        "RAM: 64 GB",
        "Storage: 25 GB",
        "Transfer: Unlimited",
        "Anti-DDoS: Free",
        "Database Options: MySQL, MongoDB, PostgreSQL",
      ],
      showButton: false,
      isExpanded: false,
    },
    {
      id: "level3",
      level: "Level 3",
      type: "Enterprise plan",
      price: "$20.00/month",
      iconText: "L3",
      features: [
        "vCPU: 64",
        "RAM: 128 GB",
        "Storage: 50 GB",
        "Transfer: Unlimited",
        "Anti-DDoS: Premium",
        "Database Options: All supported",
      ],
      showButton: false,
      isExpanded: false,
    },
    {
      id: "level4",
      level: "Level 4",
      type: "Enterprise plan",
      price: "$25.00/month",
      iconText: "L4",
      features: [
        "vCPU: 128",
        "RAM: 256 GB",
        "Storage: 100 GB",
        "Transfer: Unlimited",
        "Anti-DDoS: Premium",
        "Database Options: All supported",
      ],
      showButton: false,
      isExpanded: false,
    },
    {
      id: "level5",
      level: "Level 5",
      type: "Enterprise plan",
      price: "$30.00/month",
      iconText: "L5",
      features: [
        "vCPU: 256",
        "RAM: 512 GB",
        "Storage: 200 GB",
        "Transfer: Unlimited",
        "Anti-DDoS: Premium Plus",
        "Database Options: All supported + Custom",
      ],
      showButton: false,
      isExpanded: false,
    },
  ];

  const togglePlan = (planId) => {
    setExpandedPlan(expandedPlan === planId ? null : planId);
  };

  return (
    <div className="pricing-plans-container">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`pricing-plan-card ${expandedPlan === plan.id ? "expanded" : ""}`}
        >
          {/* Plan Header */}
          <div
            className="plan-header"
            onClick={() => !plan.showButton && togglePlan(plan.id)}
          >
            <div className="plan-info">
              <div className="plan-icon">
                <span className="plan-level-text">{plan.iconText}</span>
              </div>
              <div className="plan-details">
                <h3 className="plan-level">{plan.level}</h3>
                <p className="plan-type">{plan.type}</p>
              </div>
            </div>
            <div className="plan-pricing">
              <span className="price">{plan.price}</span>
              {!plan.showButton && (
                <svg className="expand-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d={
                      expandedPlan === plan.id
                        ? "M7 14l5-5 5 5"
                        : "M7 10l5 5 5-5"
                    }
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Expanded Content */}
          {(plan.showButton || expandedPlan === plan.id) && (
            <div className="plan-content">
              {plan.description && (
                <p className="plan-description">{plan.description}</p>
              )}

              <div className="plan-features">
                {plan.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-checkmark">
                      <svg viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#10B981" />
                        <path
                          d="M7 10l2 2 4-4"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.showButton && (
                <button className="choose-plan-button">CHOOSE PLAN</button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
