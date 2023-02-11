import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import "./App.css";
import TodoList from "./ToDoList";
import Dropdown from "./Dropdownmenu";

export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }

    return (
        <div>
         <div className="Header">
        
         <h1 className="Title">To Do List</h1>
         <Dropdown />
         <div className="wrapper">
         
         </div>
        </div>   
        
        <TodoList />
        
        </div>
        
        
        

        
    )
}


//<button onClick={handleLogOut}>Odhlásiť sa</button>