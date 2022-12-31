import React, { useEffect, useState } from 'react';
import styles from './Pokemon.module.css'
import { BallTriangle } from  'react-loader-spinner'

interface PokeListProps {
    limit : number
  }
  
  export const Pokemon = ({limit} : PokeListProps) => {
  
    const [pokeList, setPokeList] = useState<string[]>([]);
    const [newLimit, setNewLimit] = useState<number>(limit);
    const [searchText, setSearchText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    setNewLimit(limit);
    FetchPokemon(newLimit);
  }, []);
  
  const FetchPokemon = async(limit: any) => {
    setLoading(true)
    let result = await fetch("https://pokeapi.co/api/v2/pokemon?limit="+limit);
    let json  = await result.json();
    let newArray : string[] = []; 
    for (let pokemon of json.results ){
      newArray.push(pokemon.name);
    }
    setPokeList(newArray);
    setLoading(false)
  }
  const searchWithFilter = pokeList.filter((pokemon) => {
    const pokemonSearchFilter = pokemon.toLowerCase().includes(searchText.toLowerCase());
    return pokemonSearchFilter;})
  
    return (
      <div className={styles.container}>
      <div className={styles.pokemon_container}> 
       <input className={styles.input_field} id='searchUserInput' value={searchText} placeholder='search...'
        onChange={(event) => { {
          setSearchText(event.target.value);
        }}}
        ></input>
     {loading == false ? searchWithFilter.map((pokemon, index) => <p className={styles.pokemon} key={index}> {pokemon} </p>) : <BallTriangle/>}
      </div>
      <div  className={styles.quantity_container}>
        <input className={styles.input_field} type="number" defaultValue="10" onChange={(event)=>{ setNewLimit(parseInt(event.target.value))}}></input>
        <div  className={styles.button_container}>
        <button className={styles.button_80} onClick={() => {FetchPokemon(newLimit)}}>Set Limit</button>
        </div>
        </div>
      </div>
    )
  }
  