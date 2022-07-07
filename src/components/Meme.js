import React from "react";
/* import memesData from "../memesData.js"; */

export default function Meme() {
  return (
    <main>
      <div className="form">
        <input className="form-input" type="text" placeholder="left-text" />

        <input className="form-input" type="text" placeholder="right-text" />
        <button className="form-button">Get a new meme image 🖼</button>
      </div>
    </main>
  );
}
