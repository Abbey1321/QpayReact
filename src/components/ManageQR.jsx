import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Nav } from "react-bootstrap";

import "../styles/ManageQR.scss";
import QRcode from "../assests/QRcode.png";
import qpayLogo from "../assests/logo.svg";
import { MdContentCopy, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown, IoIosCheckmarkCircle } from "react-icons/io";

export default function ManageQR() {
  const [viewType, setViewType] = useState("active");

  const handleSwitchDashboard = (type) => {
    setViewType(type);
  };

  return (
    <div className="layout">
      <div className="main">
        {/* <header className="topbar">
          <h5>Manage QR</h5>
          <div className="user-profile">
            <span>Hello, <b>Thomas Shelby</b></span>
            <img src="/user.png" alt="profile" />
          </div>
        </header> */}
        <p>Manage QR/POS</p>
        <div className="qr-body">
          <Card className="qr-card">
            <Card.Body className="text-center ">
              <img src={qpayLogo} alt="" className="img-logo" />
              <img src={QRcode} alt="QR Code" className="qr-image" />
              <p className="upi-id">
                UPI ID: <span>9876543210@qpay</span> <MdContentCopy />
              </p>
              <p className="bank">Ibrahim Mohammedali</p>
              <div className="qr-actions">
                <Button variant="secondary" className="btn-download">
                  Download
                </Button>
                <Button variant="secondary" className="btn-download">
                  Share
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="qr-list-card">
            <Card.Header>
              <div className="switch-btn">
                <button
                  className={`same-width ${
                    viewType === "active" ? "active" : ""
                  }`}
                  onClick={() => handleSwitchDashboard("active")}
                >
                  Active QR Codes
                </button>
                <button
                  className={`same-width ${
                    viewType === "requests" ? "active" : ""
                  }`}
                  onClick={() => handleSwitchDashboard("requests")}
                >
                  QR Code Requests
                </button>

                {/* Tab content */}
              </div>
            </Card.Header>
            <Card.Body>
              <div className="tab-content">
                {viewType === "active" && (
                  <div className="qr-list">
                    {[1, 2, 3, 4].map((item, idx) => (
                      <div className="qr-list-item" key={idx}>
                        <img src={QRcode} alt="Mini QR" />
                        <div>
                          <p className="qr-title">Q201946579</p>
                          <p className="qr-desc">
                            All Marketing Sales - MSM000145334456@2023
                          </p>
                          <p className="qr-desc">Terminal 3</p>
                        </div>
                        <MdKeyboardArrowRight />
                      </div>
                    ))}
                  </div>
                )}
                {viewType === "requests" && (
                  <div className="qr-list qr-list-2">
                    {[1, 2].map((item, idx) => (
                      <div className="qr-list-item qr-list-item-req" key={idx}>
                        <div className="qr-list-req">
                          <img src={QRcode} alt="Mini QR" />
                          <div>
                            <p className="qr-title">All Marketing Sales</p>
                            <p className="qr-desc">
                              45, Bharathi Nagar, VOC Port Authority, Tuticorin,
                              628004.
                            </p>
                            <p className="qr-desc-2">Requested on 26.04.202</p>
                          </div>
                          <MdKeyboardArrowRight />
                        </div>
                        <div className="qr-actions">
                          <Button variant="secondary" className="btn-action">
                            <IoIosCheckmarkCircle /> QR Request Accepted
                          </Button>
                          <IoIosArrowDown />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="qr-actions">
                <Button variant="secondary" className="btn-download">
                  Request more QR Codes
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* <Container fluid className="mt-3">
          <Row>
            <Col xs={12} md={5} xl={4} className="mb-3">
              <Card className="qr-card h-100 text-center p-3">
                <Card.Body className="text-center">
                  <img
                    src="/qr-sample.png"
                    alt="QR Code"
                    className="qr-image"
                  />
                  <p className="upi-id">
                    UPI ID: <b>9876543210@qpay</b>
                  </p>
                  <p className="bank">Indian National Bank</p>
                  <div className="qr-actions">
                    <Button variant="light" className="btn-download">
                      Download
                    </Button>
                    <Button variant="success">Share</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={7} xl={8}>
              <Card className="qr-list-card h-100">
                <Card.Header>
                  <div className="switch-btn">
                    <button
                      className={`same-width ${
                        viewType === "active" ? "active" : ""
                      }`}
                      onClick={() => handleSwitchDashboard("active")}
                    >
                      Active QR Codes
                    </button>
                    <button
                      className={`same-width ${
                        viewType === "requests" ? "active" : ""
                      }`}
                      onClick={() => handleSwitchDashboard("requests")}
                    >
                      QR Code Requests
                    </button>

                    <div className="tab-content">
                      {viewType === "active" && (
                        <div className="qr-list">
                          {[1, 2, 3].map((item, idx) => (
                            <div className="qr-list-item" key={idx}>
                              <img src={QRcode} alt="Mini QR" />
                              <div>
                                <p className="qr-title">Q201946579</p>
                                <p className="qr-desc">
                                  All Marketing Sales - MSM000145334456@2023
                                </p>
                                <p className="qr-desc">Terminal 3</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {viewType === "requests" && (
                        <div>All Marketing Sales</div>
                      )}
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="text-center mt-3">
                    <Button variant="success">Request more QR Codes</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> */}
      </div>
    </div>
  );
}
