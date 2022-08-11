import React from "react";
import { useState } from "react";
import deckImg from "../assets/deck.png";
import styles from "./styles/Cards.module.css";

const Cards = ({
  cards,
  drawCard,
  currentCard,
  queens,
  drawedCards,
  reloadCards,
}) => {
  const [spades, setSpades] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [diamonds, setDiamonds] = useState([]);
  const [hearts, setHearts] = useState([]);
  const [seeDrawed, setSeeDrawed] = useState(false);

  let handleDraw = () => {
    drawCard();
  };

  let handleReload = () => {
    setSeeDrawed(false);
    reloadCards();
  };

  let handleSort = (suit) => {
    suit.sort((a, b) => {
      if (a.value > b.value) return 1;
      if (a.value < b.value) return -1;
      return 0;
    });
  };

  drawedCards?.map((c) => {
    switch (c.suit) {
      case "SPADES":
        setSpades([...spades, c]);
        break;
      case "DIAMONDS":
        setDiamonds([...diamonds, c]);
        break;
      case "CLUBS":
        setClubs([...clubs, c]);
        break;
      case "HEARTS":
        setHearts([...hearts, c]);
        break;
    }
    c.suit = null;
  });

  spades.length > 0 && handleSort(spades);
  diamonds.length > 0 && handleSort(diamonds);
  hearts.length > 0 && handleSort(hearts);
  clubs.length > 0 && handleSort(clubs);

  if (seeDrawed) {
    return (
      <div className={styles.containerDrawed}>
        <div className={styles.btnReload}>
          <button disabled={queens.length < 4} onClick={handleReload}>
            RELOAD
          </button>
        </div>
        <div>
          <div>
            <h3>♥ HEARTS ♥ ({hearts.length})</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              {hearts?.map((c) => (
                <img className={styles.card} src={c.image} key={c.code} />
              ))}
            </div>
          </div>
          <div>
            <h3>♦ DIAMONDS ♦ ({diamonds.length})</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              {diamonds?.map((c) => (
                <img className={styles.card} src={c.image} key={c.code} />
              ))}
            </div>
          </div>
          <div>
            <h3>♠ SPADES ♠ ({spades.length})</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              {spades?.map((c) => (
                <img className={styles.card} src={c.image} key={c.code} />
              ))}
            </div>
          </div>
          <div>
            <h3>♣ CLUBS ♣ ({clubs.length})</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              {clubs?.map((c) => (
                <img className={styles.card} src={c.image} key={c.code} />
              ))}
            </div>
          </div>
          <div>
            <h3>TOTAL CARDS: {drawedCards.length}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.containerDeckButtons}>
            <div>
              {cards.length > 0 && <img src={deckImg} alt="Deck" width={380} />}
            </div>
            <div className={styles.containerButtons}>
              <button disabled={queens.length === 4} onClick={handleDraw}>
                Draw card
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
              <div style={{ display: "flex", gap: "10px" }}>
                {queens?.map((q) => (
                  <img className={styles.card2} src={q.image} width={110} key={q.code} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cards;
