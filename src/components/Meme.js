import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memeImg, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }
  return (
    <main>
      <div className="form">
        <input className="form-input" type="text" placeholder="left-text" />

        <input className="form-input" type="text" placeholder="right-text" />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImg} className="meme-image" alt="meme" />
    </main>
  );
}
