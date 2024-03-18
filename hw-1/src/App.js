import "./App.css";
import { useEffect, useState } from "react";
import MainArea from "./Components/MainArea";
import Header from "./Components/Header";
function App() {
  const [characters, setCharacters] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [charactersInfo, setCharactersInfo] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=300"
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error working with api:", error);
      }
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchCharactersInfo = async () => {
      try {
        const promises = characters.map(async (item) => {
          const response = await fetch(item.url);
          return response.json();
        });
        const data = await Promise.all(promises);
        setCharactersInfo(data);
      } catch (error) {
        console.error("Error characters data:", error);
      }
    };

    fetchCharactersInfo();
  }, [characters]);

  const InputSearchChange = (input) => {
    setInputSearch(input);
  };

  return (
    <div className="App">
      <Header changeInputSearch={InputSearchChange} />
      <MainArea charactersInfo={charactersInfo} filter={inputSearch} />
    </div>
  );
}

export default App;
