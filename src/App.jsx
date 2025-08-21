import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import "./styles/dashboard.scss";
import ManageQR from "./components/ManageQR.jsx";
import Profile from "./components/Profile.jsx";
import SettlementHistory from "./components/SettlementHistory.jsx";

function Placeholder({ title }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>Coming soon…</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <div>
        <Topbar />
        <div className="app-shell">
          <Sidebar />
          <main className="content-area">
            <div className="page-body">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/payments"
                  element={<ManageQR title="Payments" />}
                />
                <Route
                  path="/history"
                  element={<SettlementHistory title="History" />}
                />
                <Route path="/profile" element={<Profile title="Profile" />} />
                <Route path="*" element={<Placeholder title="Not Found" />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </AppProvider>
  );
}
