const initState={
  popular:[],
  newGames:[],
  upcoming:[],
  serched:[],
}

const gamesReducer =(state=initState,action)=>{
  switch(action.type){
    case "FETCH_GAMES":
      return({...state,
        popular: action.payload.popular,
        newGames:action.payload.newGames,
        upcoming:action.payload.upcoming,
      });
      case "FETCH_SERCHED":
        return({
          ...state,
          serched:action.payload.serched
        })
        case "CLEAR_SEECHED":
          return({
            ...state,
            serched:[]
          })
    default:
      return({...state})  
  }
}

export default gamesReducer