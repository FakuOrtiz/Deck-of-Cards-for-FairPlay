import axios from "axios";
import { useState } from "react";

const API_URL = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";

const useCards = () => {
  const [cards, setCards] = useState(null);

  let getCards = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setCards(data.cards);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    cards,
    getCards,
  };
};

export default useCards;
