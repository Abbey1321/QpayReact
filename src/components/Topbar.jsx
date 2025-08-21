import { useApp } from '../context/AppContext.jsx'
import qpayLogo from '../assests/logo.svg';
import ProfilePic from '../assests/ProfilePic.png';

export default function Topbar(){
  const { setSidebarOpen } = useApp()
  return (
    <header className="topbar">
      {/* <button className="burger" aria-label="Open menu" onClick={()=>setSidebarOpen(true)}>
        <span></span><span></span><span></span>
      </button> */}
      {/* <div className="promo">
      <span className="logo">Q</span>
        <span className="brand-name">QPay</span>      
      </div> */}
      <div>
      <img src={qpayLogo} alt="logo" />
      </div>
      <div className="user">
        {/* <span className="avatar" aria-hidden>TS</span> */}
        <img src={ProfilePic} alt="" />
        <div className="meta">
          <div className="name">Thomas Shelby</div>
          <div className="role">Owner</div>
        </div>
      </div>
    </header>
  )
}