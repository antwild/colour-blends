import styles from "../../styles/Home.module.css";

const colours = [
  [217, 181, 105],
  [201, 210, 158],
  [157, 178, 130],
  [46, 88, 81],
  [5, 46, 66]
];

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
        className={styles.squares}
        style={{ background: `rgb(${colourString})` }}
      />
    );
  });

  return output;
};

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.squaresContainer}>{randomiser(colours)}</div>
        <div className={styles.squaresContainer}>{randomiser(colours)}</div>
        <div className={styles.squaresContainer}>{randomiser(colours)}</div>
        <div className={styles.squaresContainer}>{randomiser(colours)}</div>
        <div className={styles.squaresContainer}>{randomiser(colours)}</div>
      </div>
    </div>
  );
};

export default Home;
