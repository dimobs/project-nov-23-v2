import { useNavigate } from 'react-router-dom';
import * as roomService from '../../services/roomService';
import { useEffect, useState } from 'react';
import RoomItem from './RoomItem';


export default function CreateRoom () {
const navigate = useNavigate();
const [rooms, setRoom] = useState([]);

useEffect(() => {
  try {
fetch('http://localhost:3030/data/rooms')
.then(res => res.json()
.then(data => setRoom(Object.values(data)))
)
  }catch (err) {
    console.log(err);
  }
},[rooms])
const createRoomsSubmitHandler = async (e) => {
    e.preventDefault();

    const roomData = Object.fromEntries(new FormData(e.currentTarget));
      
    
    try {
          await roomService.create(roomData);
        navigate('/admin/createRoom');
    }catch (err) {
        console.log(err);
    }


}

    return (

<div className="max-w-6xl mx-auto">
     <h1  className="text-center text-5xl mb-10 ">Admin Panel / Create Room in data</h1>
  <div className=" bg-slate-100s dark:bg-slate-600 dark:text-green-100 py-8 px-6 shadow rounded-lg sm:px-10">
    <form  onSubmit={createRoomsSubmitHandler} className="m-20 padd block text-xs font-medium text-gray-700 dark:text-green-100">
  <div>
    <label className="m-3 block text-sm font-medium text-gray-700 dark:text-green-100">
      Name: <input type="text" name="name"   className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name room..."/>
    </label>

    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your description:</label>
    <textarea id="message" name="description" rows="4" className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your description..."></textarea>

    
    <label className="m-3 block text-sm font-medium text-gray-700 dark:text-green-100">
      url: <input type="text" name="url"   className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your url resource..."/>
    </label>
    <button  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-white">+Create room</button>
  </div>
  </form>
  </div>

  <div className="flex flex-wrap -mx-3 mb-5">
      <div className="w-full max-w-full px-3 mb-6  mx-auto">
        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5 dark:bg-black ">
          {/* card body  */}
          <div className="flex-auto block py-8 px-9">
            <div>
              <div className="mb-9">
                <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">
                  Our Executive Team
                </h1>
                <span className="text-[1.15rem] font-medium text-muted">
                  {" "}
                  Meet our talented team, a dynamic group of experts driven by
                  passion and innovation.{" "}
                </span>
              </div>
              <div className="flex flex-wrap w-full">
              {rooms.map(r => 
<RoomItem 
key={r.name}
name={r.name}
description={r.description}
url={r.url}
/>
  )}
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
    )
}