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
  const [pokemonEvolutions, setPokemonEvolutions] = useState([])

  useEffect(() => {
    getEvolutions(pokemonId);
    console.log("useEffect ejecutado");
  }, [pokemonId]);

  async function getEvolutions(id: number) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    const data = await response.json();

    let pokemonEvoArray = []

    //arreglo con nombre e imagen
    let pokemonLv1 = data.chain.species.name
    let pokemonLv1Img = await getPokemonImgs(pokemonLv1)
    pokemonEvoArray.push([pokemonLv1, pokemonLv1Img])

    if(data.chain.evolves_to.length !== 0){
      let pokemonLv2 = data.chain.evolves_to[0].species
      .name;
      let pokemonLv2Img = await getPokemonImgs(pokemonLv2)
      pokemonEvoArray.push([pokemonLv2, pokemonLv2Img])
      //console.log(pokemonEvoArray)

      if(data.chain.evolves_to[0].evolves_to.length !==0){
        let pokemonLv3 = data.chain.evolves_to[0].species
      .name;
        let pokemonLv3Img = await getPokemonImgs(pokemonLv3)
      pokemonEvoArray.push([pokemonLv3, pokemonLv3Img])
      setPokemonEvolutions(pokemonEvoArray)
      }
    }



  }

  async function getPokemonImgs(pokemonName: string){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    const data =  await response.json()
    return data.sprites.other[`official-artwork`].
      front_default
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
        <Button icon={<TiArrowRightOutline />} handleClick={nextClick} />
      </div>
    </>
  );
};

export { App };
