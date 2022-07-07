import React from "react";
import trollImage from "../images/troll.png";

export default function Header() {
  return (
    <div className="header">
      <div className="logoText">
        <img src={trollImage} alt="troll face" className="troll" />
        <p className="title">Meme Generator</p>
      </div>
      <p className="subtitle">React Course Project-3</p>
    </div>
  );
}
