import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/Pagination";

function App() {
  const [info, setInfo] = useState({});

  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacteres = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response.results);
        setInfo(response.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacteres(info.prev);
  };

  const onNext = () => {
    fetchCharacteres(info.next);
  };

  useEffect(() => {
    fetchCharacteres(url);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty" />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <CharacterList characters={characters} />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </>
  );
}

export default App;
