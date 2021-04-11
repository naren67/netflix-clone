import React, { useEffect, useState} from 'react'
import './Banner.css'
import axios from './axios'
import request from './request.js'

function Banner() {

           const [movie, setMovie] = useState([])

          useEffect(()=>{
            async function fetchData(){
                 const urlData = await axios.get(request.fetchNetflixOriginals)
          //        console.log(urlData.data.results)
                 setMovie(
                    urlData.data.results[
                               Math.floor(Math.random()* urlData.data.results.length-1 )
                     ] 
                 )
      
            }
           fetchData()
          },[])
 
           console.log(movie)

          return (
                    <header className='banner'
                         style={{
                                   backgroundSize:'cover',
                                   backgroundPosition:'center center',
                                   backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
                         }}
                    >
                              <div className='banner__content'>
                                       {/* title
                                       2 buttons
                                       description */}
                                       <h1 className='banner__title'>{movie?.name || movie?.title || movie?.original_name}</h1>
                                       <div className='banner__buttons'>
                                                 <button className='banner__button'>My List</button>
                                                 <button className='banner__button'>Play</button>
                                       </div>
                                       <p className='banner__description'>{movie?.overview}</p>
                                       
                              </div>

                              
                              {/* <div className='banner__fade'/> */}
                    </header>
          )
}

export default Banner
