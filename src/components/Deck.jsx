import React from "react";
import { useState } from "react";
import deckImg from "../assets/deck.png";
import styles from "./styles/Deck.module.css";

const Deck = ({
  cards,
  currentCard,
  queens,
  drawedCards,
  setSeeDrawed,
  handleDraw,
  handleReload,
}) => {
  const [debounce, setDebounce] = useState(true);

  let handleClick = () => {
    if (!debounce) {
      return;
    }
    handleDraw();
    setDebounce(false);
    setTimeout(() => {
      setDebounce(true);
    }, 1000);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.containerDeckButtons}>
          <div>
            {cards.length > 0 && <img src={deckImg} alt="Deck" width={380} />}
          </div>
          <div className={styles.task}>
            For win, you must draw a QUEEN of every suit. <br />
            (One draw/second)
          </div>
          <div className={styles.containerButtons}>
            <button disabled={queens.length === 4} onClick={handleClick}>
              {queens.length === 4 ? "YOU WIN!" : "Draw card"}
            </button>
            <button disabled={queens.length < 4} onClick={handleReload}>
              RELOAD
            </button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <button
              disabled={queens.length < 4}
              onClick={() => setSeeDrawed(true)}
            >
              See drawed cards
            </button>
          </div>
        </div>
        <div className={styles.containerCurrentQueens}>
          <div className={styles.containerCurrent}>
            <h3>Current card (Drawed cards: {drawedCards.length})</h3>
            {currentCard && (
              <img
                src={currentCard.image}
                alt={currentCard.code}
                className={styles.card2}
                width={110}
              />
            )}
          </div>
          <div className={styles.containerQueens}>
            <h3>Queens</h3>
            <div className={styles.containerImg}>
              {queens?.map((q) => (
                <img
                  className={styles.card2}
                  src={q.image}
                  width={110}
                  key={q.code}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deck;
