import { useState } from "react";
import style from "../../styles/Home.module.css";
import { getRandomColours, getColoursFromSelection } from "../api";
import classnames from "classnames";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
}

const randomiser = array => {
  const colours = shuffle(array);
  const output = colours.map(colour => {
    const colourString = colour.toString();
    return (
      <div
        className={style.squares}
        style={{ background: `rgb(${colourString})` }}
      />
    );
  });

  return output;
};

const Home = () => {
  const [colours, setColours] = useState([
    [217, 181, 105],
    [201, 210, 158],
    [157, 178, 130],
    [46, 88, 81],
    [5, 46, 66]
  ]);

  const [userColour, setUserColour] = useState("");

  const newColours = async () => {
    const fetchedColours = await getRandomColours();
    setColours(fetchedColours);
  };

  const updateColors = async event => {
    event.preventDefault();
    const rgb = `${event.target[0].value},${event.target[1].value},${event.target[2].value}`;
    const fetchedColours = await getColoursFromSelection(rgb);
    setColours(fetchedColours);
    setUserColour(rgb);
  };

  return (
    <div className={style.container}>
      <div className={style.leftDetails}>
        <div className={style.titlesContainer}>
          <h1 className={style.title}>Colour Themes</h1>
          <h3 className={style.subtitle}>
            <i>
              Inspire your designs by generating a theme of colours that blend
              together beautifully
            </i>
          </h3>
        </div>

        <p className={style.howToItem}>
          Click the "Generate" button below to generate a random theme of five
          colours that look great together
        </p>
        <button className={style.generateButton} onClick={() => newColours()}>
          Generate
        </button>

        <h3 className={style.or}>OR</h3>
        <p className={style.howToItem}>
          Add an RGB value and click the "Use My Colour" button below to
          generate a theme of five colours that includes your chosen colour
        </p>
        <form onSubmit={updateColors} className={style.form}>
          <input
            className={classnames(style.userInput, style.red)}
            placeholder="Red Value"
            type="text"
            maxlength="3"
          />
          <p className={style.comma}>,</p>
          <input
            className={classnames(style.userInput, style.green)}
            placeholder="Green Value"
            type="text"
            maxlength="3"
          />
          <p className={style.comma}>,</p>
          <input
            className={classnames(style.userInput, style.blue)}
            placeholder="Blue Value"
            type="text"
            maxlength="3"
          />
          <input
            type="submit"
            value="Use My Colour"
            className={style.generateButton}
            style={{ backgroundColor: `rgb(${userColour})` }}
          />
        </form>
      </div>
      <div className={style.board}>
        <div className={style.squaresContainer}>{randomiser(colours)}</div>
        <div className={style.squaresContainer}>{randomiser(colours)}</div>
        <div className={style.squaresContainer}>{randomiser(colours)}</div>
        <div className={style.squaresContainer}>{randomiser(colours)}</div>
        <div className={style.squaresContainer}>{randomiser(colours)}</div>
      </div>
    </div>
  );
};

export default Home;
