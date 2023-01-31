import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import "./App.css";
import TodoList from "./ToDoList";

export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }

    return (
        <div>
         <div className="Header">
         <h1 className="Title">To Do List</h1>
         <div className="wrapper">
         <button className="logout" onClick={handleLogOut}>Odhlásiť sa</button>
         </div>
        </div>   

        <TodoList />
        </div>
        
        
        

        
    )
}


//<button onClick={handleLogOut}>Odhlásiť sa</button>