import Card from "../components/Card.jsx";
import ProgressRing from "../components/ProgressRing.jsx";
import { useApp } from "../context/AppContext.jsx";
import posCard from "../assests/poscard.png";
import QRcode from "../assests/QRcode.png";
import { useNavigate } from "react-router-dom";

function Stat({ value, label }) {
  return (
    <div className="stat">
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </div>
  );
}

function QRMock() {
  return (
    <div className="qr">
      <div className="code" aria-hidden>
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <div className="qr-actions">
        <button className="btn">Receive Payment</button>
        <button className="btn btn-outline">Download</button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { totals, profileProgress } = useApp();
  const navigate = useNavigate();

  const settlements = [
    { bank: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
    { bank: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
    { bank: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
  ];

  return (
    <div className="dashboard">
      <div className="promo-card">
        {/* <div className="copy">
              <h2>Pay ₹1/month for the QPay POS Device</h2>
              <p>Claim benefits for accepting offline and online payments</p>
              <button className="btn">Know more</button>
            </div>
            <div className="illustration" aria-hidden>
              <div className="illus-block"></div>
            </div> */}
        <img src={posCard} alt="" />
      </div>
      <div className="grid-2">
        {/* <Card>
          <div className="qr-card">
            <QRMock />
          </div>
        </Card> */}
      </div>
      <div className="stats-row">
        <Stat
          value={`${(totals.accounts / 1000).toFixed(1)}k`}
          label="Accounts Added"
        />
        <Stat
          value={`${(totals.transactions / 1000).toFixed(1)}k`}
          label="Transactions"
        />
        <Stat
          value={`${(totals.settlement / 1000).toFixed(1)}k`}
          label="Settlement"
        />
        <Stat
          value={`${(totals.qrOrders / 1000).toFixed(0)}k`}
          label="QR Orders"
        />
      </div>
      <div className="grid-2">
        <Card title="Profile" subtitle="" ClassName={"profile-card"}>
          <div className="profile-progress">
            <ProgressRing size={140} stroke={12} progress={profileProgress} />
            <div className="todo">
              <h4>Complete your profile</h4>
              <ul>
                <li>Personal KYC</li>
                <li>Company KYC</li>
                <li>Onboarding Details</li>
              </ul>
              {/* <button className="btn btn-light">Next</button> */}
            </div>
          </div>
          <button className="btn btn-light">Next</button>
        </Card>

        <Card title="QR" subtitle="">
          <div className="order-qr">
            <section>
              <img src={QRcode} alt="" />
            </section>
            <section>
              <h4>Order QR</h4>
              <ul className="list">
                <li>Receive Payments</li>
                <li>Order New QRs</li>
                <li>Download QR</li>
              </ul>
            </section>
          </div>
          <button
            className="btn btn-light"
            onClick={() => navigate("/payments")}
          >
            View More
          </button>
        </Card>
        {/* <Card title=" ">
          <div className="empty"></div>
        </Card> */}
      </div>

      <div className="grid-2">
        <Card
          title="Settlement"
          ClassName={"settlement"}
          rightArrow={true}
          subtitle={"₹1,23,816.19"}
        >
          <ul className="table like">
            {settlements.map((s, i) => (
              <li key={i} className="row">
                <section className="row-name">
                  <span className="c1">{s.bank}</span>
                  <span className="c2">{s.date}</span>
                </section>
                <section></section>

                <span className="c3">{s.amount}</span>
              </li>
            ))}
          </ul>
          <button className="btn btn-light" onClick={() => navigate("/history")}>Settle Now</button>
        </Card>

        <Card
          title="Total Transactions"
          ClassName={"settlement"}
          rightArrow={true}
          subtitle={"₹1,23,816.19"}
        >
          <ul className="table like">
            {settlements.map((s, i) => (
              <li key={i} className="row">
                <section className="row-name">
                  <span className="c1">{s.bank}</span>
                  <span className="c2">{s.date}</span>
                </section>
                <section></section>

                <span className="c3">{s.amount}</span>
              </li>
            ))}
          </ul>
          <button className="btn btn-light">View All</button>
        </Card>
      </div>
    </div>
  );
}
