// import React from "react";
// import "./header.css";
// import { Search, Bell, User } from "lucide-react";

// export default function Header({ onToggleSidebar }) {
//   return (
//     <header className="header">
      
//       {/* LEFT SECTION — LARGE SEARCH BAR */}
//       <div className="search-container">
//         <Search size={18} className="search-icon" />
//         <input
//           className="search-input"
//           placeholder="Search metrics, dashboards, insights..."
//         />
//       </div>

//       {/* RIGHT SECTION — NOTIFICATIONS + PROFILE */}
//       <div className="header-right">
//         <button className="icon-btn">
//           <Bell size={20} />
//         </button>

//         <div className="avatar">
//           <User size={20} />
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import { Search, Bell, User } from "lucide-react";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const searchRef = useRef();
  const notifyRef = useRef();
  const profileRef = useRef();

  /* CLICK OUTSIDE TO CLOSE DROPDOWNS */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current && !searchRef.current.contains(event.target) &&
        notifyRef.current && !notifyRef.current.contains(event.target) &&
        profileRef.current && !profileRef.current.contains(event.target)
      ) {
        setShowSearch(false);
        setShowNotifications(false);
        setShowProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">

      {/* SEARCH BAR */}
      <div className="search-container" ref={searchRef} onClick={() => {
        setShowSearch(true);
        setShowNotifications(false);
        setShowProfile(false);
      }}>
        <Search size={18} className="search-icon" />
        <input
          className="search-input"
          placeholder="Search metrics, dashboards, insights..."
          onFocus={() => setShowSearch(true)}
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="header-right">

        {/* NOTIFICATION ICON */}
        <button
          className="icon-btn"
          ref={notifyRef}
          onClick={() => {
            setShowNotifications(!showNotifications);
            setShowSearch(false);
            setShowProfile(false);
          }}
        >
          <Bell size={20} />
        </button>

        {/* PROFILE ICON */}
        <div
          className="avatar"
          ref={profileRef}
          onClick={() => {
            setShowProfile(!showProfile);
            setShowNotifications(false);
            setShowSearch(false);
          }}
        >
          <User size={20} />
        </div>
      </div>

      {/* SEARCH DROPDOWN
      {showSearch && (
        <div className="dropdown search-drop">
          <h4>Search Results</h4>
          <p>API Response Dashboard</p>
          <p>Latency by Region</p>
          <p>Customer Funnel</p>
          <p>Revenue Overview</p>
        </div>
      )} */}

      {/* NOTIFICATION DROPDOWN */}
      {showNotifications && (
        <div className="dropdown notify-drop">
          <h4>Notifications</h4>
          <p>⚠ India region latency spike</p>
          <p>✔ Data updated successfully</p>
          <p>ℹ New visitor traffic trend available</p>
        </div>
      )}

      {/* PROFILE MENU */}
      {showProfile && (
        <div className="dropdown profile-drop">
          <p>My Profile</p>
          <p>Settings</p>
          <p>Logout</p>
        </div>
      )}
    </header>
  );
}
