import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topTexxt: "",
    bottonText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(memesArray[randomNumber].url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <img src={meme.randomImage} className="meme-image" alt="meme" />
    </main>
  );
}
