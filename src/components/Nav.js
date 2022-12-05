import React,{useState} from "react";

import styled from "styled-components";
import {motion} from "framer-motion"
import logo from "../img/logo.svg";
//import redux routs
import {fetchSerched} from "../actions/gameAction"
import { useDispatch } from "react-redux";
//import fade in 
import {fadeIn} from "../animations";
const Nav = () => { 
  const dispatch=useDispatch();
  const [textInput,setTextInput]=useState("");
  const inputHandler=(e)=>{
    setTextInput(e.target.value)
  }
  const submitSerch=(e)=>{
    e.preventDefault();
    dispatch(fetchSerched(textInput))
    setTextInput("")
  }
  const clearSerched=()=>{
    dispatch({type:"CLEAR_SEECHED"})
  }
  return(
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSerched}>
        <img src={logo} alt="Logo" />
        <h1>Igniht</h1>
      </Logo>
      <form className="serch">
        <input value={textInput} onChange={inputHandler} type="serch" />
        <button type="submit" onClick={submitSerch}>Serch</button>
      </form>
    </StyledNav>
  )
}


const StyledNav=styled(motion.nav)`
  padding:3rem 5rem ;
  text-align: center;
  input{
    width:30%;
    font-size: 1.5rem;
    padding:0.5rem;
    margin-top:1rem;
    outline: none;
    border:none;
    box-shadow:0px 0px 30px rgba(0,0,0,0.2);
    border-radius: 1.5rem;
  }
  button{
    font-size: 1.5rem ;
    border:none;
    padding:0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color:white;
    border-radius: 1.5rem;
  }
`
const Logo=styled(motion.div)`
  display: flex;
  justify-content: center;
  padding:1rem;
  cursor: pointer;
  img{
    width:2rem;
    height: 2rem;
  }
`

export default Nav;

