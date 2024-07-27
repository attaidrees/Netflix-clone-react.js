import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';



const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDFjZjFjOGNkZjA2NmNkYzNjMzMzZWU0MDJiYzQyZiIsIm5iZiI6MTcyMTgzNDEwOC4yNzU4MTksInN1YiI6IjY2YTExOTQzYzRlNjNiZGI3NGUwZDdhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6qv0LmCJF9yvgj4crKO4Kb3TM4p93wbr4OgMMI1diok'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err)); 
  }) 

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular Shows On Netflix"}</h2>
      <div className='cards-list'>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
