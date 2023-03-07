import TodoList from "../ToDoList";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPA_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function gettodos() {
    const { data, error } = await supabase
  .from('todotasks')
  .select()

  return { data, error };
}

const { error } = await supabase
  .from('todotasks')
  .insert({  text: newTodo, completed: false, deadline: newDeadline  })


//urobiť metodu na vytvaranie taskov 
//vytvoriť useeffect v ktorom sa načitaju všetky tasky z databazy

