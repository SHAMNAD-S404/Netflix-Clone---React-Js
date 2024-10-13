 import React, { useEffect, useRef, useState } from 'react'
 import './TittleCards.css'
 import titleCard from '../../assets/cards/Cards_data'
 import { Link } from 'react-router-dom';


 
 function TittleCards({title,category}) {

   const[apiData, setApiData] = useState([]);

    const cardsRef = useRef()

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGNkNDM1MzQxYjY3YjM0OGMyNzNlMzk3NmM2ODI4OSIsIm5iZiI6MTcyNjIzMDc0Ni43NTMzMTgsInN1YiI6IjY2ZTJhODJiMDAwMDAwMDAwMGI5MThkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jWRj4cfyc5aRAPR3oSkrE-ZA0iJzIfBzkc7qaiOkhys'
      }
    };
    
  



    const handleWheel = (event)=> {
       event.preventDefault();
       cardsRef.current.scrollLeft +=event.deltaY
    }
   
    useEffect(()=>{

      fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));


       cardsRef.current.addEventListener('wheel',handleWheel)
    },[])

   return (
     <div className='tittleCards'>

     <h2>{title?title:"Popular on Netflix"}</h2> 
     
     <div className="card-list" ref={cardsRef}>

        {apiData.map((card,index)=>{
            return < Link to={`/player/${card.id}`} className='card' key={index} >
                <img src={`http://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
            </Link>
        })}
        
    </div>
    
    </div>
   )
 }
 
 export default TittleCards