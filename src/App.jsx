import useCards from "./hooks/useCards";
import Loading from "./components/Loading";
import Cards from "./components/Cards";
import { useEffect } from "react";
import "./App.css";

function App() {
  const { cards, getCards } = useCards();

  useEffect(() => {
    getCards();
  }, []);

  if (!cards) return <Loading />;

  cards && console.log(cards)

  return (
    <div className="App">
      <Cards cards={cards} />
    </div>
  );
}

export default App;
