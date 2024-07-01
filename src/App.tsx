//Components
import { Button } from "./components/Button";
import { Card } from "./components/Card";
//Styles
import "./sass/App.scss";
//Icons
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
//Hooks
import { useState, useEffect } from "react";

//crear componente
const App = () => {
  //actualiza la variable 1 en 1
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    getEvolutions(pokemonId);
    console.log('useEffect ejecutado')
  }, [pokemonId]);

  async function getEvolutions(id: number) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    const data = await response.json();
    setPokemonName(data.chain.species.name);
  }

  //logica boton atras
  function prevClick() {
    setPokemonId((prevId) => (prevId === 1 ? 1 : prevId - 1));
  }

  //logica boton adelante
  function nextClick() {
    setPokemonId((prevId) => prevId + 1);
  }

  return (
    <>
      <div className="card-container">
        <Card />
      </div>

      <div className="buttons-container">
        <Button icon={<TiArrowLeftOutline />} handleClick={prevClick} />
        {pokemonName}
        <Button icon={<TiArrowRightOutline />} handleClick={nextClick} />
      </div>
    </>
  );
};

export { App };
