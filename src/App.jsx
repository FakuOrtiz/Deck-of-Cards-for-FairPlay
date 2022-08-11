import useCards from "./hooks/useCards";
import Loading from "./components/Loading";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import "./App.css";
import Deck from "./components/Deck";

function App() {
  const {
    cards,
    currentCard,
    drawedCards,
    queens,
    getCards,
    drawCard,
    reloadCards,
  } = useCards();
  const [seeDrawed, setSeeDrawed] = useState(false);

  useEffect(() => {
    getCards();
  }, []);

  let handleReload = () => {
    setSeeDrawed(false);
    reloadCards();
  };

  let handleDraw = () => {
    drawCard();
  };

  if (!cards) return <Loading />;

  return (
    <div className="App">
      {seeDrawed ? (
        <Cards
          cards={cards}
          drawCard={drawCard}
          currentCard={currentCard}
          queens={queens}
          drawedCards={drawedCards}
          reloadCards={reloadCards}
          handleReload={handleReload}
        />
      ) : (
        <Deck
          cards={cards}
          currentCard={currentCard}
          queens={queens}
          drawedCards={drawedCards}
          reloadCards={reloadCards}
          handleReload={handleReload}
          setSeeDrawed={setSeeDrawed}
          handleDraw={handleDraw}
        />
      )}
    </div>
  );
}

export default App;
