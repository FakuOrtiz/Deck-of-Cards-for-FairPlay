import useCards from "./hooks/useCards";
import Loading from "./components/Loading";
import Cards from "./components/Cards";
import { useEffect } from "react";
import "./App.css";

function App() {
  const { cards, currentCard, drawedCards, queens, getCards, drawCard, reloadCards } = useCards();

  useEffect(() => {
    getCards();
  }, []);

  if (!cards) return <Loading />;

  return (
    <div className="App">
      <Cards
        cards={cards}
        drawCard={drawCard}
        currentCard={currentCard}
        queens={queens}
        drawedCards={drawedCards}
        reloadCards={reloadCards}
      />
    </div>
  );
}

export default App;
