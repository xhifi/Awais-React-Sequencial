import {useState} from 'react';
import Main from '../../components/layouts/Main'

export default function Landing () {
    const [todo, setTodo] = useState("");
    const [addTodos, setAllTodos] = useState([]);

    const addTodo = (e) => {
        e.preventDefault();
        if(e.target.value){
            setAllTodos([...addTodos, todo])
        }else{
            console.warn("No value")
        }
        
        
    }
    
    return (
        <Main>
            <form>
                <label htmlFor="todoitem">Todo Name</label>
                <input type="text" id="todoitem" onChange={e => setTodo(e.target.value)}/>
                <button onClick={addTodo}>Add Todo</button>
                <hr />
                {addTodos.map((v, i) => <li key={i}>{v}</li>)}
            </form>
        </Main>
    )
}