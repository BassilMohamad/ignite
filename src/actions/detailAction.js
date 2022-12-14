import axios from "axios";
import {gameDetailsURL,gameScreenshotsURL} from "../api";

export const loadDetail=(id)=> async (dispatch)=>{
  dispatch({
    type:"LODING_DETAIL"
  })
  const  detailData=await axios.get(gameDetailsURL(id));
  const  screenshotData=await axios.get(gameScreenshotsURL(id));
  dispatch({
    type:"GET_DETAIL",
    payload:{
      game:detailData.data,
      screen:screenshotData.data
    }
  })

}