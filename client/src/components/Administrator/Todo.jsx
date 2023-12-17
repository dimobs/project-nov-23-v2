import { useEffect, useState } from "react"
import TodoList from "./TodoList"


export default function Todo() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
        .then(response => response.json())
        .then(data => {
            console.log(Object.values(data)[0]);
            setTodos(Object.values(data)[0])

        })
        .catch(err => console.log(err))
    }, []);
    
    const chnageStatusHandler = (todoId) => {
          setTodos(state => state.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
    }

    return (
      <div>
        <table>
            <thead>
            <tr>
               <th>id:</th> 
               <th>Change Status</th> 
               <th>todo:</th> 
               <th>completed:</th>
            </tr>
            </thead>
<tbody>
    {todos.map(t => (
        <TodoList
        key={t.id}
        id={t.id}
        todoDescript={t.todo}
        completed={t.completed}
        chnageStatusHandler={chnageStatusHandler}
        />
    ))}
</tbody>

        </table>
      </div>
)
}