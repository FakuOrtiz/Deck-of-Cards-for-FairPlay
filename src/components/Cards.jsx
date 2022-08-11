import React from "react";
import { useState } from "react";
import styles from "./styles/Cards.module.css";

const Cards = ({ queens, drawedCards, handleReload }) => {
  const [spades, setSpades] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [diamonds, setDiamonds] = useState([]);
  const [hearts, setHearts] = useState([]);

  let handleSort = (suit) => {
    changeValue(suit);
    suit.sort((a, b) => {
      if (Number(a.value) > Number(b.value)) return 1;
      if (Number(a.value) < Number(b.value)) return -1;
      return 0;
    });
  };

  let changeValue = (suit) => {
    suit.map((c) => {
      if (c.value === "JACK") return (c.value = 13);
      if (c.value === "QUEEN") return (c.value = 14);
      if (c.value === "KING") return (c.value = 15);
      if (c.value === "ACE") return (c.value = 16);
      else return suit;
    });
  };

  drawedCards?.map((c) => {
    switch (c.suit) {
      case "SPADES":
        setSpades((prevSpades) => [...prevSpades, c]);
        break;
      case "DIAMONDS":
        setDiamonds((prevDiamonds) => [...prevDiamonds, c]);
        break;
      case "CLUBS":
        setClubs((prevClubs) => [...prevClubs, c]);
        break;
      case "HEARTS":
        setHearts((prevHearts) => [...prevHearts, c]);
        break;
    }
    c.suit = null;
  });

  handleSort(spades);
  handleSort(diamonds);
  handleSort(hearts);
  handleSort(clubs);

  return (
    <div className={styles.containerDrawed}>
      <div className={styles.btnReload}>
        <button disabled={queens.length < 4} onClick={handleReload}>
          RELOAD
        </button>
      </div>
      <div className={styles.containerCards}>
        <div>
          <h3>♥ HEARTS ♥ ({hearts.length})</h3>
          <div className={styles.containerImg}>
            {hearts?.map((c) => (
              <img className={styles.card} src={c.image} key={c.code} />
            ))}
          </div>
        </div>
        <div>
          <h3>♦ DIAMONDS ♦ ({diamonds.length})</h3>
          <div className={styles.containerImg}>
            {diamonds?.map((c) => (
              <img className={styles.card} src={c.image} key={c.code} />
            ))}
          </div>
        </div>
        <div>
          <h3>♠ SPADES ♠ ({spades.length})</h3>
          <div className={styles.containerImg}>
            {spades?.map((c) => (
              <img className={styles.card} src={c.image} key={c.code} />
            ))}
          </div>
        </div>
        <div>
          <h3>♣ CLUBS ♣ ({clubs.length})</h3>
          <div className={styles.containerImg}>
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
};

export default Cards;
