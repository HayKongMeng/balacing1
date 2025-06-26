import React, { useState } from "react";

const PricingPlans = () => {
  const [expandedPlan, setExpandedPlan] = useState("level1");

  const plans = [
    {
      id: "level1",
      level: "Level 1",
      type: "Basic plan",
      price: "$10.00/month",
      description:
        "Perfect for small projects, personal websites, and development environments",
      features: [
        "vCPU: 16",
        "RAM: 32 GB",
        "Storage: 10 GB",
        "Transfer: Unlimited",
        "Anti-DDoS: Free",
        "Database Options: MySQL, MongoDB",
      ],
      showButton: true,
      isExpanded: true,
    },
    {
      id: "level2",
      level: "Level 2",
      type: "Pro plan",
      price: "$15.00/month",
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
                <span className="plan-level-text">L1</span>
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

      <style jsx>{`
        .pricing-plans-container {
          max-width: 480px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-family:
            "Inter",
            -apple-system,
            "Roboto",
            "Helvetica",
            sans-serif;
          padding: 20px;
        }

        .pricing-plan-card {
          background-color: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .pricing-plan-card:hover {
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        .plan-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 23px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .plan-header:hover {
          background-color: #f8fafc;
        }

        .plan-info {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
        }

        .plan-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .plan-level-text {
          color: white;
          font-weight: 600;
          font-size: 16px;
        }

        .plan-details {
          display: flex;
          flex-direction: column;
          margin-top: auto;
          margin-bottom: auto;
        }

        .plan-level {
          color: #1f2937;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.25;
          margin: 0;
        }

        .plan-type {
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.29;
          margin: 0;
        }

        .plan-pricing {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          color: #1f2937;
          font-weight: 600;
          white-space: nowrap;
          line-height: 1.25;
        }

        .price {
          flex-grow: 1;
        }

        .expand-icon {
          width: 17px;
          height: 17px;
          color: #6b7280;
          transition: transform 0.2s ease;
        }

        .expanded .expand-icon {
          transform: rotate(180deg);
        }

        .plan-content {
          padding: 0 18px 22px 18px;
          border-top: 1px solid #f1f5f9;
        }

        .plan-description {
          color: #64748b;
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          margin: 17px 0 0 0;
        }

        .plan-features {
          margin-top: 19px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          color: #475569;
          font-weight: 400;
        }

        .feature-checkmark {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          border-radius: 50%;
        }

        .feature-checkmark svg {
          width: 100%;
          height: 100%;
        }

        .feature-text {
          flex-basis: auto;
        }

        .choose-plan-button {
          background: #1976d2;
          color: white;
          border: none;
          border-radius: 8px;
          box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 28px;
          min-height: 56px;
          padding: 0 16px;
          width: 100%;
          font-family:
            "Roboto",
            -apple-system,
            sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1.25px;
          line-height: 36px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .choose-plan-button:hover {
          background: #1565c0;
          transform: translateY(-1px);
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
        }

        .choose-plan-button:active {
          transform: translateY(0);
        }

        /* Tablet Styles */
        @media (min-width: 768px) {
          .pricing-plans-container {
            max-width: 600px;
            padding: 32px;
          }

          .pricing-plan-card {
            border-radius: 20px;
          }

          .plan-header {
            padding: 20px 28px;
          }

          .plan-content {
            padding: 0 28px 28px 28px;
          }

          .plan-icon {
            width: 56px;
            height: 56px;
          }

          .plan-level-text {
            font-size: 18px;
          }

          .plan-level {
            font-size: 18px;
          }

          .plan-type {
            font-size: 15px;
          }

          .plan-pricing {
            font-size: 18px;
          }

          .plan-description {
            font-size: 17px;
            line-height: 28px;
          }

          .feature-item {
            font-size: 17px;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .pricing-plans-container {
            max-width: 720px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
          }

          .pricing-plan-card {
            height: fit-content;
          }

          .plan-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            padding: 24px;
          }

          .plan-info {
            width: 100%;
          }

          .plan-pricing {
            width: 100%;
            justify-content: flex-end;
          }

          .plan-content {
            padding: 0 24px 24px 24px;
            border-top: none;
          }

          .expanded .plan-header,
          .pricing-plan-card .plan-header {
            background-color: transparent;
          }

          .pricing-plan-card .plan-content {
            display: block;
          }

          .expand-icon {
            display: none;
          }
        }

        /* Large Desktop */
        @media (min-width: 1280px) {
          .pricing-plans-container {
            max-width: 1200px;
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default PricingPlans;
