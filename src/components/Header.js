import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img src={globeImage} alt="globe icon" className="globe" />
      <p className="title">Travel Journal</p>
    </div>
  );
}
