import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Banner from "../assests/Banner.png";
import Sidebar from "../components/Sidebar"; // adjust path if needed
// import "../Profile.scss";
import "../styles/Profile.scss";
import { FaBuildingColumns, FaCartShopping, FaIdCard } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";
import vector from "../assests/vector.png";
import group from "../assests/Group.png";
import dollar from "../assests/Dollar.png";
import users from "../assests/users.png";
import translate from "../assests/translate.png";

export default function Profile() {
  return (
    <div className="layout">
      <div className="main">
        {/* <header className="topbar">
          <h5>Profile</h5>
          <div className="user-profile">
            <span>Hello, <b>Thomas Shelby</b></span>
            <img src="/user.png" alt="profile" />
          </div>
        </header> */}
        <div className="banner">
          {/* <div className="banner-text">
            <h4>Pay ₹1/month* for the QPay POS Device</h4>
            <p>One device for accepting all modes of payments</p>
            <Button variant="success">Download App Now</Button>
          </div>
          <div className="banner-image">
            <img src="/pos-banner.png" alt="POS Device" />
          </div> */}
          {/* <div className="banner-image"> */}
          <img src={Banner} alt="POS Device" />
          {/* </div> */}
        </div>
        <Row className="option-header">
          <Col md={3}>
            <Card className="option-card">
              <Card.Body>
                <span className="option-icon">
                  <FaBuildingColumns />
                </span>
                <h6>XXXX 9820</h6>
                <p>ICICI Bank | Chennai Egmore Branch</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="option-card">
              <Card.Body>
                <span className="option-icon">
                  <BsSuitcaseLgFill />
                </span>
                <h6>Business Profile</h6>
                <p>View and edit your business details</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="option-card">
              <Card.Body>
                <span className="option-icon">
                  <FaIdCard />
                </span>
                <h6>KYC Verification</h6>
                <p>Unlock exclusive benefits with KYC</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="option-card">
              <Card.Body>
                <span className="option-icon">
                  <FaCartShopping />
                </span>
                <h6>Order QR</h6>
                <p>Get paid, manage & order QRs</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="pos-card">
          <Card className="service-card">
            <Card.Header>Business Services</Card.Header>
            <Card.Body className="d-flex gap-4">
              <div className="service-item">
                <img src={vector} alt="" className="service-icon" />
                <p>Spender</p>
              </div>
              <div className="service-item">
                <img src={group} alt="" className="service-icon" />
                <p>POS Machine</p>
              </div>
            </Card.Body>
          </Card>
          <Card className="service-card">
            <Card.Header>Manage Business</Card.Header>
            <Card.Body className="d-flex gap-4">
              <div className="service-item">
                <img src={dollar} alt="" className="service-icon" />
                <p>Payment Settings</p>
              </div>
              <div className="service-item">
                <img src={users} alt="" className="service-icon" />
                <p>Manage Staff</p>
              </div>
              <div className="service-item">
                <img src={translate} alt="" className="service-icon" />
                <p>Change Language</p>
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* <Row className="mt-4 g-3">
          <Col md={6}></Col>
          <Col md={6}>
            
          </Col>
        </Row> */}
      </div>
    </div>
  );
}
