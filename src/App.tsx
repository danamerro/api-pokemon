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

  useEffect(() => {
    console.log(pokemonId);
  }, [pokemonId]); // Agregar pokemonId como dependencia para que el efecto se ejecute cuando cambie

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
        {pokemonId}
        <Button icon={<TiArrowRightOutline />} handleClick={nextClick} />
      </div>
    </>
  );
};

export { App };
