import React from "react";
import deckImg from "../assets/deck.png";

const Cards = ({ cards, drawCard, currentCard }) => {
  let handleDraw = () => {
    drawCard();
  };

  return (
    <div>
      {cards.length > 0 && <img src={deckImg} alt="Deck" width={400} />}
      {/* {cards?.map((c) => {
        return (
          <div key={c.code}>
            <img src={c.image} alt="" />
          </div>
        );
      })} */}
      <button onClick={handleDraw}>Draw card</button>
      {currentCard && <img src={currentCard.image} alt={currentCard.code} />}
    </div>
  );
};

export default Cards;
