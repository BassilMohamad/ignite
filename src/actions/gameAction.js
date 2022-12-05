import axios from "axios";
import {popularGamesURL,upcomingGamesURL,newGamesURL,searchGameURL} from "../api";
  
export const loadGames=()=> async (dispatch)=>{
  //FETCH DATA 
  const popularData= await axios.get(popularGamesURL());
  const upcommingData= await axios.get(upcomingGamesURL());
  const newGamesData= await axios.get(newGamesURL());
  dispatch({
    type:"FETCH_GAMES",
    payload:{
      popular: popularData.data.results,
      upcoming: upcommingData.data.results,
      newGames: newGamesData.data.results,
    }
  })
}
export const fetchSerched=(game_name)=> async(dispatch)=>{
  const serchedGames=await axios.get(searchGameURL(game_name));
  dispatch({
    type:"FETCH_SERCHED",
    payload:{
      serched:serchedGames.data.results
    }
  })
}