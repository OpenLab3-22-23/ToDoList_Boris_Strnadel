import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import "./App.css";
import TodoList from "./ToDoList";
import OptionsPage from "./Options";
import Refresher from "./refresher";
import {  Link } from 'react-router-dom';
import React, { useState } from 'react';


export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()
    const [bgColor, setBgColor] = useState('white');

    
    function handleLogOut(): void {
        signOut();
    }

    return (
        <div>
         <div className="Header">
         <div className="wrapper">
         <h1 className="Title">To Do List</h1>
         </div>  
        </div>         
        <Refresher/>
        
        <button className="logout" onClick={handleLogOut}>Odhlásiť sa</button>
        <button className="options"  ><Link to='/options'>Options</Link></button>
        

        </div>
        
        
        

        
    )
}


//<button onClick={handleLogOut}>Odhlásiť sa</button>