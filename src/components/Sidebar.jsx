import { NavLink } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import bharathLogo from "../assests/Bharath.png";
import { AiFillHome } from "react-icons/ai";
import { IoQrCode } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/payments", label: "QR"},
  { to: "/history", label: "History"},
  { to: "/profile", label: "Profile"},
];



const IconComponents = {
  Home:<AiFillHome /> ,
  QR:<IoQrCode /> ,
  History:<FaHistory /> ,
  Profile: <CgProfile />
};


export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useApp();
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      {/* <div className="brand">
        <button className="sidebar-close" aria-label="Close menu" onClick={()=>setSidebarOpen(false)}>×</button>
      </div> */}
      <nav className="nav">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            <span className="icon" aria-hidden>
              {IconComponents[l.label]}
            </span>
            <span className="text">{l.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <img src={bharathLogo} alt="" />
        {/* <a className="support" href="#" onClick={(e)=>e.preventDefault()}>Need help?</a> */}
      </div>
    </aside>
  );
}
