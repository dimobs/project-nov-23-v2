

export default function TodoList({
    id,
    todoDescript,
    completed,
    chnageStatusHandler

}) {

   const changeStatus = () => {
    chnageStatusHandler(id);
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