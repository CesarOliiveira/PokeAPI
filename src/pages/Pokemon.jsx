import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import '../styles/cardPokemon.css'
import axios from "axios";

import { Link } from 'react-router-dom';

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/

function App() {
  const [list, setList] = useState([])

  
  
  const fetchListData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=120').then((response) => {
        const sortedArray = [...response.data.results];
        sortedArray.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });

        setList(sortedArray);
      });

  };

  useEffect(() => {
    fetchListData();
  }, []);

  return (
    <>
      <div style={{padding: 10}}>
        <h3>Desafio</h3>
        <h1>Consumir API Pokémon</h1>
      </div>
      <hr/>
    <div className="container-wrap">  
      <div className='container-grid'>
        {list.map((item) =>
          <Pokemon key={item.name} data={item}/>
        )}
      </div>
    </div>
    </>
  );
}

//Listagem dos Pokemons

const Pokemon = ({data}) => {
  const [details, setDetails] = useState(null);

  const fetchData = () => {
    setTimeout(() => {
      axios
      .get(data.url)
      .then((response) => setDetails(response.data));
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(!details) {
    return <Loading/>;
  }

  return (
    <div className='card-pokemon'>
      <div className='imagePokemon'>
        <img src={details.sprites.other.dream_world.front_default} style={{width: 120, marginTop: 20}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
        <h3>{details.name}</h3>
      </div> 

      <div className='wrap-button'>
        <Link to={`pokemon/${details.name}`}>
          <div className='button-about'>
            <span>Saiba Mais</span>
          </div>
        </Link>
        
      </div>

    </div>
  )
}

export default App;
