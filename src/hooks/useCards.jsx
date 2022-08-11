import axios from "axios";
import { useState } from "react";

const API_URL = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);

  let getCards = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setCards(data.cards);
    } catch (error) {
      console.log(error);
    }
  };

  let drawCard = () => {
    setCurrentCard(null);
    setCards(cards.slice(1));
    setCurrentCard(cards[0]);
  };

  return {
    cards,
    currentCard,
    getCards,
    drawCard,
  };
};

export default useCards;
