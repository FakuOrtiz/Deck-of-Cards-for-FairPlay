import useCards from "./hooks/useCards";
import Loading from "./components/Loading";
import Cards from "./components/Cards";
import { useEffect } from "react";
import "./App.css";

function App() {
  const { cards, currentCard, getCards, drawCard } = useCards();

  useEffect(() => {
    getCards();
  }, []);

  if (!cards) return <Loading />;

  return (
    <div className="App">
      <Cards cards={cards} drawCard={drawCard} currentCard={currentCard} />
    </div>
  );
}

export default App;
