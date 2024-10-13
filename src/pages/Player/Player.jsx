  import React, { useEffect, useState } from 'react'
  import './Player.css'
  import backarrowIcon from '../../assets/back_arrow_icon.png'
  import { useNavigate, useParams } from 'react-router-dom'
  
  function Player() {

    const {id} = useParams();
    const navigate = useNavigate();


    const[apiData,setApiData] = useState({
      name:'',
      key:'',
      published_at:'',
      typeof:''
    })

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGNkNDM1MzQxYjY3YjM0OGMyNzNlMzk3NmM2ODI4OSIsIm5iZiI6MTcyNjIzMDc0Ni43NTMzMTgsInN1YiI6IjY2ZTJhODJiMDAwMDAwMDAwMGI5MThkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jWRj4cfyc5aRAPR3oSkrE-ZA0iJzIfBzkc7qaiOkhys'
      }
    };

    useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
          .then(response => response.json())
          .then(response => setApiData(response.results[0]))
          .catch(err => console.error(err));

    },[])
    
  


    return (
     

        <div className="player">
          <img src={backarrowIcon} alt="" onClick={()=> {navigate(-2)}} />
          <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
              title='trailer' allowFullScreen  frameBorder="0"  ></iframe>

              <div className="player-info">

                <p> {apiData.published_at.slice(0,10)} </p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>

              </div>
          </div>  

      
    )
  }
  
  export default Player