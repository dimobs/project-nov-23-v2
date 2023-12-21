

export default function TodoList({
    id,
    todoDescript,
    completed,
    deleteItemHandler
}) {

   const changeStatus = () => {
    deleteItemHandler(id);
   }

    return (
        <tr>
            <td>{id}</td>
            <td>{todoDescript}</td>
            <td><button onClick={changeStatus} >Status:</button></td>
            <td>{completed ? 'ok' : 'Not ok'}</td>  
        </tr>
    )

}