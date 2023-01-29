import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

import '../styles/cardPokemon.css'
import Loading from '../components/Loading'
import axios from "axios";



const infoPokemon = () => {
    const [details, setDetails] = useState(null);
    const { id } = useParams();

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const fetchData = () => {
      setTimeout(() => {
        axios
        .get(url)
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
    <>
     <div className='card-pokemon'>
      <div style={{color: 'white', fontSize: '20px', fontStyle: 'bold'}}>
        ID: {details.id}
      </div>
      <div className='imagePokemon'>
        <img src={details.sprites.other.dream_world.front_default} style={{width: 120, marginTop: 20}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
        <h3>{details.name}</h3>
      </div> 

      <div className='wrap-details'>
        Exp: {details.base_experience}
      </div>

    </div>
      <Link to='/'>
        <div style={{color: 'black', fontSize: 20, padding: 10}}>
         Voltar
        </div>
      </Link>
    </>
  )
}

export default infoPokemon;
