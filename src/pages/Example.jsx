import React from "react";
import "./PricingComparison.css";

export default function Example() {
  return (
    <div className="pricing-container">
      <div className="pricing-card-wrapper">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-content">
            <h1
              style={{
                color: "rgb(15, 23, 42)",
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "36px",
                textAlign: "left",
                pointerEvents: "auto",
                margin: "0px auto 0px 0",
              }}
            >
              Detailed Feature Comparison
            </h1>
            <p
              style={{
                color: "rgb(100, 116, 139)",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "28px",
                textAlign: "left",
                pointerEvents: "auto",
                margin: "9px auto 0 0",
              }}
            >
              Compare all features across our hosting plans
            </p>
          </div>

          {/* Pricing Cards */}
          <div
            style={{
              display: "flex",
              fontWeight: "400",
              pointerEvents: "auto",
            }}
          >
            {/* Startup VPS Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px 0px",
                flexBasis: "0%",
                flexDirection: "column",
                flexGrow: "1",
                fontWeight: "400",
                minWidth: "200px",
                pointerEvents: "auto",
                justifyContent: "flex-start",
                width: "100%",
                padding: "32px",
                border: "0.8px solid rgb(230, 233, 245)",
              }}
            >
              <h3
                style={{
                  color: "rgb(37, 36, 48)",
                  fontWeight: "700",
                  lineHeight: "42px",
                  marginBottom: "10px",
                  pointerEvents: "auto",
                }}
              >
                STARTUP VPS
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  fontWeight: "400",
                  gap: "4px",
                  justifyContent: "center",
                  marginBottom: "28px",
                  pointerEvents: "auto",
                }}
              >
                <span
                  style={{
                    color: "rgb(37, 36, 48)",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "72px",
                    pointerEvents: "auto",
                  }}
                >
                  $7.78
                </span>
                <span
                  style={{
                    color: "rgb(84, 95, 113)",
                    fontSize: "18px",
                    fontWeight: "400",
                    textAlign: "center",
                    pointerEvents: "auto",
                  }}
                >
                  /month
                </span>
              </div>
              <p
                style={{
                  color: "rgb(84, 95, 113)",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "21px",
                  marginBottom: "20px",
                  textAlign: "center",
                  pointerEvents: "auto",
                }}
              >
                Perfect for small projects and testing
              </p>
              <button
                style={{
                  backgroundColor: "rgb(214, 214, 214)",
                  borderRadius: "8px",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px 0px",
                  color: "rgb(255, 255, 255)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  letterSpacing: "1.25px",
                  minHeight: "55px",
                  textTransform: "capitalize",
                  transitionDuration: "0.2s",
                  width: "100%",
                  pointerEvents: "auto",
                  borderColor: "rgba(0, 0, 0, 0)",
                  padding: "0 16px",
                  font: "500 14px/36px Roboto, -apple-system, sans-serif ",
                }}
              >
                Upgraded plan
              </button>
            </div>

            {/* Challenger VPS Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px 0px",
                flexBasis: "0%",
                flexDirection: "column",
                flexGrow: "1",
                fontWeight: "400",
                minWidth: "200px",
                pointerEvents: "auto",
                justifyContent: "flex-start",
                padding: "32px",
                border: "0.8px solid rgb(230, 233, 245)",
              }}
            >
              <h3
                style={{
                  color: "rgb(37, 36, 48)",
                  fontWeight: "700",
                  lineHeight: "42px",
                  marginBottom: "10px",
                  pointerEvents: "auto",
                }}
              >
                CHALLENGER VPS
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  fontWeight: "400",
                  gap: "4px",
                  justifyContent: "center",
                  marginBottom: "28px",
                  pointerEvents: "auto",
                }}
              >
                <span
                  style={{
                    color: "rgb(37, 36, 48)",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "72px",
                    pointerEvents: "auto",
                  }}
                >
                  $13.78
                </span>
                <span
                  style={{
                    color: "rgb(84, 95, 113)",
                    fontSize: "18px",
                    fontWeight: "400",
                    textAlign: "center",
                    pointerEvents: "auto",
                  }}
                >
                  /month
                </span>
              </div>
              <p
                style={{
                  color: "rgb(84, 95, 113)",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "21px",
                  marginBottom: "20px",
                  textAlign: "center",
                  pointerEvents: "auto",
                }}
              >
                Ideal for growing businesses and applications
              </p>
              <button
                style={{
                  backgroundColor: "rgb(214, 214, 214)",
                  borderRadius: "8px",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px 0px",
                  color: "rgb(255, 255, 255)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  letterSpacing: "1.25px",
                  minHeight: "55px",
                  textTransform: "capitalize",
                  transitionDuration: "0.2s",
                  width: "100%",
                  pointerEvents: "auto",
                  borderColor: "rgba(0, 0, 0, 0)",
                  padding: "0 16px",
                  font: "500 14px/36px Roboto, -apple-system, sans-serif ",
                }}
              >
                Upgraded plan
              </button>
            </div>

            {/* Leader VPS Card - Active Plan */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px 0px",
                flexBasis: "0%",
                flexDirection: "column",
                flexGrow: "1",
                fontWeight: "400",
                minWidth: "200px",
                pointerEvents: "auto",
                padding: "32px",
                border: "0.8px solid rgb(230, 233, 245)",
              }}
            >
              <h3
                style={{
                  color: "rgb(37, 36, 48)",
                  fontWeight: "700",
                  lineHeight: "42px",
                  marginBottom: "10px",
                  pointerEvents: "auto",
                }}
              >
                LEADER VPS
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  fontWeight: "400",
                  gap: "4px",
                  justifyContent: "center",
                  marginBottom: "28px",
                  pointerEvents: "auto",
                }}
              >
                <span
                  style={{
                    color: "rgb(37, 36, 48)",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "72px",
                    pointerEvents: "auto",
                  }}
                >
                  $16.78
                </span>
                <span
                  style={{
                    color: "rgb(84, 95, 113)",
                    fontSize: "18px",
                    fontWeight: "400",
                    textAlign: "center",
                    pointerEvents: "auto",
                  }}
                >
                  /month
                </span>
              </div>
              <p
                style={{
                  color: "rgb(84, 95, 113)",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "21px",
                  marginBottom: "20px",
                  textAlign: "center",
                  pointerEvents: "auto",
                }}
              >
                Maximum performance for demanding workloads
              </p>
              <button
                style={{
                  backgroundColor: "rgb(7, 193, 96)",
                  borderRadius: "8px",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px 0px",
                  color: "rgb(255, 255, 255)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  letterSpacing: "1.25px",
                  minHeight: "55px",
                  textTransform: "capitalize",
                  transitionDuration: "0.2s",
                  width: "100%",
                  pointerEvents: "auto",
                  borderColor: "rgba(0, 0, 0, 0)",
                  padding: "0 16px",
                  font: "500 14px/36px Roboto, -apple-system, sans-serif ",
                }}
              >
                <svg
                  style={{
                    width: "24px",
                    height: "24px",
                    flexShrink: "0",
                    pointerEvents: "auto",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    style={{
                      d: 'path("M 12 12 m -12 0 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0")',
                      fill: "currentColor",
                      transformOrigin: "0px 0px",
                      pointerEvents: "auto",
                    }}
                    cx="12"
                    cy="12"
                    r="12"
                  />
                  <path
                    style={{
                      display: "inline",
                      d: 'path("M 9 12 L 11 14 L 15 10")',
                      fill: "none",
                      fontWeight: "500",
                      stroke: "rgb(255, 255, 255)",
                      strokeWidth: "2px",
                      transformOrigin: "0px 0px",
                      pointerEvents: "auto",
                    }}
                  />
                </svg>
                <span>Your plan</span>
              </button>
            </div>

            {/* Boss VPS Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px 0px",
                flexBasis: "0%",
                flexDirection: "column",
                flexGrow: "1",
                fontWeight: "400",
                minWidth: "200px",
                pointerEvents: "auto",
                justifyContent: "flex-start",
                padding: "32px",
                border: "0.8px solid rgb(230, 233, 245)",
              }}
            >
              <h3
                style={{
                  color: "rgb(37, 36, 48)",
                  fontWeight: "700",
                  lineHeight: "42px",
                  marginBottom: "10px",
                  pointerEvents: "auto",
                }}
              >
                BOSS VPS
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  fontWeight: "400",
                  gap: "4px",
                  justifyContent: "center",
                  marginBottom: "28px",
                  pointerEvents: "auto",
                }}
              >
                <span
                  style={{
                    color: "rgb(37, 36, 48)",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "72px",
                    pointerEvents: "auto",
                  }}
                >
                  $25.78
                </span>
                <span
                  style={{
                    color: "rgb(84, 95, 113)",
                    fontSize: "18px",
                    fontWeight: "400",
                    textAlign: "center",
                    pointerEvents: "auto",
                  }}
                >
                  /month
                </span>
              </div>
              <p
                style={{
                  color: "rgb(84, 95, 113)",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "21px",
                  marginBottom: "20px",
                  textAlign: "center",
                  pointerEvents: "auto",
                }}
              >
                Good for enterprise company
              </p>
              <button
                style={{
                  backgroundColor: "#1976d2",
                  borderRadius: "8px",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px 0px",
                  color: "rgb(255, 255, 255)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  letterSpacing: "1.25px",
                  minHeight: "55px",
                  textTransform: "capitalize",
                  transitionDuration: "0.2s",
                  width: "100%",
                  pointerEvents: "auto",
                  borderColor: "rgba(0, 0, 0, 0)",
                  padding: "0 16px",
                  font: "500 14px/36px Roboto, -apple-system, sans-serif ",
                }}
              >
                upgrade plan
              </button>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div
          style={{
            fontWeight: "400",
            width: "100%",
            pointerEvents: "auto",
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: "flex",
              backgroundColor: "rgb(248, 250, 252)",
              color: "rgb(15, 23, 42)",
              fontSize: "18px",
              fontWeight: "700",
              gap: "20px",
              justifyContent: "space-between",
              width: "100%",
              pointerEvents: "auto",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                fontWeight: "700",
                pointerEvents: "auto",
                width: "253.2px",
                margin: "auto auto auto 0",
              }}
            >
              Features
            </div>
            <div
              style={{
                fontWeight: "700",
                pointerEvents: "auto",
                width: "100%",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <div
                style={{
                  fontWeight: "700",
                  minWidth: "100px",
                  pointerEvents: "auto",
                  flexGrow: "1",
                  width: "100%",
                  margin: "auto 0 auto auto",
                }}
              >
                STARTUP
              </div>
              <div
                style={{
                  fontWeight: "700",
                  minWidth: "100px",
                  pointerEvents: "auto",
                  width: "100%",
                  padding: "24px 52px",
                }}
              >
                CHALLENGER
              </div>
              <div
                style={{
                  fontWeight: "700",
                  minWidth: "100px",
                  pointerEvents: "auto",
                  height: "auto",
                  flexGrow: "1",
                  width: "100%",
                }}
              >
                LEADER
              </div>
              <div
                style={{
                  fontWeight: "700",
                  minWidth: "100px",
                  pointerEvents: "auto",
                  width: "100%",
                  padding: "24px 52px",
                }}
              >
                BOSS
              </div>
            </div>
          </div>

          {/* Feature Rows */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "400",
              pointerEvents: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottomStyle: "solid",
                borderBottomWidth: "0.8px",
                borderColor: "rgb(0, 0, 0) rgb(0, 0, 0) rgb(240, 243, 247)",
                fontWeight: "400",
                gap: "20px",
                paddingLeft: "20px",
                width: "100%",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  color: "rgb(55, 65, 81)",
                  fontWeight: "500",
                  minWidth: "150px",
                  textAlign: "left",
                  pointerEvents: "auto",
                }}
              >
                vCPU Cores
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(31, 41, 55)",
                  flexBasis: "0%",
                  flexGrow: "1",
                  fontWeight: "400",
                  justifyContent: "space-around",
                  pointerEvents: "auto",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  1 Core
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  2 Cores
                </div>
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  4 Cores
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  2 Cores
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottomStyle: "solid",
                borderBottomWidth: "0.8px",
                borderColor: "rgb(0, 0, 0) rgb(0, 0, 0) rgb(240, 243, 247)",
                fontWeight: "400",
                gap: "20px",
                paddingLeft: "20px",
                width: "100%",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  color: "rgb(55, 65, 81)",
                  fontWeight: "500",
                  minWidth: "150px",
                  textAlign: "left",
                  pointerEvents: "auto",
                }}
              >
                RAM Memory
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(31, 41, 55)",
                  flexBasis: "0%",
                  flexGrow: "1",
                  fontWeight: "400",
                  justifyContent: "space-around",
                  pointerEvents: "auto",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  2 GB
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  4 GB
                </div>
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  8 GB
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  4 GB
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottomStyle: "solid",
                borderBottomWidth: "0.8px",
                borderColor: "rgb(0, 0, 0) rgb(0, 0, 0) rgb(240, 243, 247)",
                fontWeight: "400",
                gap: "20px",
                paddingLeft: "20px",
                width: "100%",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  color: "rgb(55, 65, 81)",
                  fontWeight: "500",
                  minWidth: "150px",
                  textAlign: "left",
                  pointerEvents: "auto",
                }}
              >
                Storage
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(31, 41, 55)",
                  flexBasis: "0%",
                  flexGrow: "1",
                  fontWeight: "400",
                  justifyContent: "space-around",
                  pointerEvents: "auto",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  25 GB
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  80 GB
                </div>
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  160 GB
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  80 GB
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottomStyle: "solid",
                borderBottomWidth: "0.8px",
                borderColor: "rgb(0, 0, 0) rgb(0, 0, 0) rgb(240, 243, 247)",
                fontWeight: "400",
                gap: "20px",
                paddingLeft: "20px",
                width: "100%",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  color: "rgb(55, 65, 81)",
                  fontWeight: "500",
                  minWidth: "150px",
                  textAlign: "left",
                  pointerEvents: "auto",
                }}
              >
                Bandwidth
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(31, 41, 55)",
                  flexBasis: "0%",
                  flexGrow: "1",
                  fontWeight: "400",
                  justifyContent: "space-around",
                  pointerEvents: "auto",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  1 Gbps
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  1 Gbps
                </div>
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  1 Gbps
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  1 Gbps
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottomStyle: "solid",
                borderBottomWidth: "0.8px",
                borderColor: "rgb(0, 0, 0) rgb(0, 0, 0) rgb(240, 243, 247)",
                fontWeight: "400",
                gap: "20px",
                paddingLeft: "20px",
                width: "100%",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  color: "rgb(55, 65, 81)",
                  fontWeight: "500",
                  minWidth: "150px",
                  textAlign: "left",
                  pointerEvents: "auto",
                }}
              >
                Transfer
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(31, 41, 55)",
                  flexBasis: "0%",
                  flexGrow: "1",
                  fontWeight: "400",
                  justifyContent: "space-around",
                  pointerEvents: "auto",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  Unlimited
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  Unlimited
                </div>
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  Unlimited
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  Unlimited
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottomStyle: "solid",
                borderBottomWidth: "0.8px",
                borderColor: "rgb(0, 0, 0) rgb(0, 0, 0) rgb(240, 243, 247)",
                fontWeight: "400",
                gap: "20px",
                paddingLeft: "20px",
                width: "100%",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  color: "rgb(55, 65, 81)",
                  fontWeight: "500",
                  minWidth: "150px",
                  textAlign: "left",
                  pointerEvents: "auto",
                }}
              >
                Hard Drive
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(31, 41, 55)",
                  flexBasis: "0%",
                  flexGrow: "1",
                  fontWeight: "400",
                  justifyContent: "space-around",
                  pointerEvents: "auto",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  NVMe
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  NVMe
                </div>
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  NVMe
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  NVMe
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottomStyle: "solid",
                borderBottomWidth: "0.8px",
                borderColor: "rgb(0, 0, 0) rgb(0, 0, 0) rgb(240, 243, 247)",
                fontWeight: "400",
                gap: "20px",
                paddingLeft: "20px",
                width: "100%",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  color: "rgb(55, 65, 81)",
                  fontWeight: "500",
                  minWidth: "150px",
                  textAlign: "left",
                  pointerEvents: "auto",
                }}
              >
                Anti-DDoS
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(31, 41, 55)",
                  flexBasis: "0%",
                  flexGrow: "1",
                  fontWeight: "400",
                  justifyContent: "space-around",
                  pointerEvents: "auto",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  Free
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  Free
                </div>
                <div
                  style={{
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                  }}
                >
                  Free
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(250, 251, 252)",
                    borderRadius: "4px",
                    fontWeight: "400",
                    minWidth: "100px",
                    width: "100%",
                    pointerEvents: "auto",
                    padding: "21px",
                  }}
                >
                  Free
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
