import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {loadGames} from "../actions/gameAction";
import GameDetail from "../components/GameDetail";
//import components
import Games from "../components/Games";
//styling and animation
import styled from "styled-components";
//import fade in 
import {fadeIn} from "../animations";
import { motion,AnimatePresence,AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
const Home=()=>{
  const location = useLocation();
  const pathId=location.pathname.split("/")[2]
  //fetch the data games
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(loadGames());
  },[dispatch])
  //get the data back
  const {popular,newGames,upcoming,serched}=useSelector((state)=>state.games); 
  if (!pathId) {
    document.body.style.overflow = "auto";
  }
  return(
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
      <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
      {serched.length ? (
      <div className="serches">
       <h2>Serched Games</h2>
      <Game>
          {serched?.map(game=>
           ( <Games 
            name={game.name} 
            released={game.released} 
            id={game.id} 
            image={game.background_image} 
            key={game.id}></Games> )
          )}
        </Game>
        </div>
        ):[]}
        <h2>upComing Games</h2>
        <Game>
          {upcoming.map(game=>
           ( <Games 
            name={game.name} 
            released={game.released} 
            id={game.id} 
            image={game.background_image} 
            key={game.id}></Games> )
          )}
        </Game>
       <h2>popular Games</h2>
        <Game>
          {popular.map(game=>
           ( <Games 
            name={game.name} 
            released={game.released} 
            id={game.id} 
            image={game.background_image} 
            key={game.id}></Games> )
          )}
        </Game>
       <h2>new Games</h2>
        <Game>
          {newGames.map(game=>
           ( <Games 
            name={game.name} 
            released={game.released} 
            id={game.id} 
            image={game.background_image} 
            key={game.id}></Games> )
          )}
        </Game>
        </AnimateSharedLayout>
    </GameList>
  )
}

const GameList=styled(motion.div)`
  padding:0rem 5rem;
  h2{
    padding:5rem 0rem
  }
`
const Game=styled(motion.div)`
  min-height:80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
  grid-row-gap: 3rem;
  grid-column-gap: 3rem;
  cursor: pointer;
  
`

export default Home;