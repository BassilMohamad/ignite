const BASE_URL=`https://api.rawg.io/api/games?key=4e58d66d42074002851711fc6e726c05`

const getCurrentMonth=()=>{
  const month=new Date().getMonth()+1
  if(month<10){
    return `0${month}`
  }else{
    return `${month}`
  }
}
const getCurrentDay=()=>{
  const day=new Date().getDate()
  if(day<10){
    return `0${day}`
  }else{
    return `${day}`
  }
}

const currentYear=new Date().getFullYear();
const currentMonth=getCurrentMonth();
const currentday=getCurrentDay();
const currentDate=`${currentYear}-${currentMonth}-${currentday}`;
const lastYear=`${currentYear-1}-${currentMonth}-${currentday}`;
const nextYear=`${currentYear+1}-${currentMonth}-${currentday}`;

//popular Games
const popularGames = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcomingGames = `&dates=${currentDate},${nextYear}&ordering=-rating&page_size=10`
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

//Api 
const apiKey=`4e58d66d42074002851711fc6e726c05`;
const MODIFY_API=`https://api.rawg.io/api/games/`;
const MODIFY_API2=`https://api.rawg.io/api/games`;
//export the games info
export const popularGamesURL=()=>`${BASE_URL}${popularGames}`;
export const upcomingGamesURL=()=>`${BASE_URL}${upcomingGames}`;
export const newGamesURL=()=>`${BASE_URL}${newGames}`;
export const gameDetailsURL = (game_id) => `${MODIFY_API}${game_id}.json?&key=${apiKey}`;
export const gameScreenshotsURL = (game_id) =>
  `${MODIFY_API}${game_id}/screenshots?&key=4e58d66d42074002851711fc6e726c05`;
export const searchGameURL=(game_name)=>`${MODIFY_API2}?search=${game_name}&page_size=9.json?&key=${apiKey}`;  
//https://api.rawg.io/api/games?search=gta&page_size=9.json?&key=4e58d66d42074002851711fc6e726c05
//https://api.rawg.io/api/games/644661.json?&key=1205e9093aa54f1aa02daf800a2572b9
//https://api.rawg.io/api/games/644661.json?&key=3329d986376342039fa4e654f1e7d910