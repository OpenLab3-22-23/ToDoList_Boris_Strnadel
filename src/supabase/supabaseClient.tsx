import TodoList from "../ToDoList";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPA_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);



//urobiť metodu na vytvaranie taskov 
//vytvoriť useeffect v ktorom sa načitaju všetky tasky z databazy

export async function uploadTodo(todotext: string, deadline: string){
  const { error } = await supabase
  .from('todotasks')
  .insert({  taskname: todotext, deadline: deadline  })
}

export async function deleteTodo(id: number){
  const { error } = await supabase
  .from('todotasks')
  .delete()
  .eq('id', id)
}
