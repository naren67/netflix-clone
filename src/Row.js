import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios.js'
// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer'

//base image url from api server

const base_url = 'https://image.tmdb.org/t/p/original'

function Row({title, fetchUrl, isLargePath}) {

           const [movies, setMovies] = useState([])
           const [trailerRun,setTrailer] = useState('')

           useEffect(()=>{
            async function fetchRequest(){
                      const UrlConCad = await axios.get(fetchUrl)

                    //   console.log(UrlConCad)
                      setMovies(UrlConCad.data.results)
                      return UrlConCad
            }

            fetchRequest()
           },[fetchUrl])

          //  console.log(movies)
          // const opts = {
          //   height: '390',
          //   width: '100%',
          //   playerVars: {
          //     // https://developers.google.com/youtube/player_parameters
          //     autoplay: 1,
          //   }
          //   }


            //onClick run trailer //also opening and closing functionality

            // const imageClick = (movies)=>{
            //        if(trailerRun)
            //        {
            //         setTrailer("")
            //        }
            //        else{
            //         movieTrailer(movies?.name || "")

            //         //url gives you the entire url we need to crop the id only
            //         //https://www.youtube.com/watch // ?v=gnkrDse9QKc // part Iwant

            //         .then(url =>{
            //                                //helps to get or start from the particular string
            //             const fullUrl = new URLSearchParams(new URL(url).search)
            //             //  fullUrl.get('v')

            //             setTrailer(fullUrl.get('v'))
            //         })
            //         .catch(error => console.log(error))
            //        }
            // }

            // console.log(trailerRun)

          return (

                    <div className='row'>
                             {/* title
                             row of video */}
                             <h1>{title}</h1>


                            <div className='row__posters'>
                                      {movies.map(movie=>(
                                        //onClick={()=>imageClick(movies)}
                                            <img key={movie.id} className={`row__poster ${isLargePath && 'row__posterLarge'}`} src={`${base_url}${isLargePath ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                                      ))}
                            </div>

                            {/* <YouTube videoId={trailerRun} opts={opts}/> */}
                    </div>
          )
}

export default Row
