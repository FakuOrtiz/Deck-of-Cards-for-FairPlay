import React from "react";
import deckImg from "../assets/deck.png";

const Cards = ({ cards, drawCard, currentCard, queens, drawedCards, reloadCards }) => {

  let handleDraw = () => {
    drawCard();
  };

  let handleReload = () => {
    reloadCards()
  }

  return (
    <div>
      <div>
        {cards.length > 0 && <img src={deckImg} alt="Deck" width={380} />}
        <button onClick={handleDraw}>Draw card</button>
        <button onClick={handleReload}>RELOAD</button>
        {currentCard && (
          <img src={currentCard.image} alt={currentCard.code} width={150} />
        )}
      </div>
      <div>
        {
          queens?.map(q => <img src={q.image} width={150} key={q.code} />)
        }
      </div>
      <div>
        {drawedCards?.map((c) => {
          return <img src={c.image} width={150} key={c.code} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
