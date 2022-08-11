import axios from "axios";
import { useState } from "react";

const API_URL = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [drawedCards, setDrawedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [queens, setQueens] = useState([]);

  let getCards = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setCards(data.cards);
    } catch (error) {
      console.log(error);
    }
  };

  let drawCard = () => {
    setCurrentCard(cards[0]);
    setDrawedCards([...drawedCards, cards[0]]);
    setCards(cards.slice(1));
  };

  let reloadCards = () => {
    setCards(null);
    setDrawedCards([]);
    setCurrentCard(null);
    setQueens([]);
    getCards();
  };

  if (currentCard?.value === "QUEEN") {
    setQueens((prevQueens) => [...prevQueens, currentCard]);
    setCurrentCard(null);
  }

  return {
    cards,
    currentCard,
    drawedCards,
    queens,
    getCards,
    drawCard,
    reloadCards,
  };
};

export default useCards;
