import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import "./App.css";
import TodoList from "./ToDoList";
import OptionsPage from "./Options";


export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

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
        <TodoList />
        
        <button className="logout" onClick={handleLogOut}>Odhlásiť sa</button>
        <button className="options"  >Options</button>
        </div>
        
        
        

        
    )
}


//<button onClick={handleLogOut}>Odhlásiť sa</button>