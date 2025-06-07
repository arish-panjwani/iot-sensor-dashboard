/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SegmentedTabs.css";

function SegmentedTabs({ tabs }) {
  const location = useLocation();

  return (
    <div className="toggle-tabs">
      {tabs.map(({ label, path }) => (
        <Link
          key={path}
          to={path}
          className={`tab-button ${
            location.pathname === path ? "active" : ""
          }`}>
          {label}
        </Link>
      ))}
    </div>
  );
}

export default SegmentedTabs;
