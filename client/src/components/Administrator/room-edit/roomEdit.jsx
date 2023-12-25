import { useNavigate, useParams, Link } from 'react-router-dom';
import * as roomService from '../../../services/roomService';
import { useEffect, useState } from 'react';


export default function RoomEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [room, setRoom] = useState({
    name: '',
    description: '',
    url: '',
  });
  
  useEffect(() => {
        roomService.getOne(id)
            .then(result => {
                setRoom(result)
               
            })
    }, [id]);

    const editRoomSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await roomService.edit(id, values);

          } catch (err) {
            // Error notification
            console.log(err);
          }
          navigate('/admin/createRoom');
    }

    const onChange = (e) => {
        setRoom(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const deleteButtonClickHandler = async () => {
      const hasConfirmed = confirm(`Are you sure you want to delete ${room.name} `);

      if (hasConfirmed) {
        await roomService.remove(id).catch

        navigate('/admin/createRoom')
      }else {
       navigate('/') 
      }
    }

    return (

      <div className="max-w-6xl mx-auto">
           <h1  className="text-center text-5xl mb-10 ">Admin Panel / Edit Room in data</h1>
        <div className=" bg-slate-100s dark:bg-slate-600 dark:text-green-100 py-8 px-6 shadow rounded-lg sm:px-10">
          <form  onSubmit={editRoomSubmitHandler} className="m-20 padd block text-xs font-medium text-gray-700 dark:text-green-100">
        <div>
          <label className="m-3 block text-sm font-medium text-gray-700 dark:text-green-100">
            Name: <input 
            type="text" 
            name="name"   
            className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name room..."
            value={room.name}
            onChange={onChange}

            />
          </label>
      
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your description:
          <textarea 
          id="message" 
          name="description" 
          rows="4" 
          className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your description..."
          value={room.description}
          onChange={onChange}

          >
          </textarea>
          </label>
          
          <label className="m-3 block text-sm font-medium text-gray-700 dark:text-green-100">
            url: <input 
            type="text" 
            name="url"   
            className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your url resource..."
            value={room.url}
            onChange={onChange}
            />
          </label>
          <button  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-white">Save</button>
        </div>
        </form>
        </div>
        </div>
          )
      }