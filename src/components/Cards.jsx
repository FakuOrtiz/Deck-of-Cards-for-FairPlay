import React from "react";
import { useState } from "react";
import deckImg from "../assets/deck.png";
import Deck from "./Deck";
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
      <Deck
        cards={cards}
        currentCard={currentCard}
        queens={queens}
        drawedCards={drawedCards}
        reloadCards={reloadCards}
        drawCard={drawCard}
        setSeeDrawed={setSeeDrawed}
        handleReload={handleReload}
      />
    );
  }
};

export default Cards;
