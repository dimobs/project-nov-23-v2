import { useNavigate } from "react-router-dom";
import * as roomService from "../../services/roomService";
import { useEffect, useReducer, useState } from "react";
import RoomItem from "./RoomItem";
import FocusImput from "../../hooks/focusInputForm";
import reducer from "../../utils/stateReducer";
import useForm from "../../hooks/useForm";
// import { json } from "stream/consumers";

const FORM_INITIAL_STATE = {
  name: "",
  description: "",
  url: "",
};

export default function CreateRoom() {
  const inputFiled = FocusImput();
  // const [values, onchange] = useState(FORM_INITIAL_STATE);
  // const [rooms, setRoom] = useState([]);
  const [rooms, setState] = useReducer(reducer, []);
  const [file, setFile] = useState("");
  // const [value, setValue] = useState("");


    const [formData, setFormData] = useState({
      name: '',
      description: '',
    })


  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'file' ? files[0] : value,
    }));
  };



const handleSubmit = async (e) => {
  e.preventDefault();

    const fd = new FormData();
    fd.append("file", file);
    fd.append("name", formData.name);
    fd.append("description", formData.description);


    // fd.append('data', data)
    try {

      if (!file) {
        return confirm('You should attach file!');
      }

      // const newRoom = await fetch('http://192.168.50.206:3030/data/rooms', {  
      // method: "POST",
      //  body: fd
      // })

      await roomService.create(fd);
      resetFormHandler();


      navigate("/admin/createRoom");
    } catch (err) {
      console.log("create room:", err);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    try {
      fetch("http://localhost:3030/data/rooms")
        .then((res) => res.json())
        .then((data) => {
          setState({
            type: "GET_ALL",
            payload: Object.values(data),
          });
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // const deleteItemHandler = (roomId) => {
  //   setRoom(rooms.filter(r => r.id !==roomId))
  //   // setRoom(rooms.filter(r => r.id !== id));
  // }

  const resetFormHandler = () => {
    formData.name = "";
    formData.description = "";
   
    // setErrors({});
  };

  // const onChangeHangler = (e) => {
  //   let value = e.target.value;
  //   onchange(state => ({
  //     ...state,
  //     [e.target.name]: value, 
  //   })
  // )
  // }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center text-4xl mb-0 ">Admin Panel / Create Room </h1>
      <div className=" bg-slate-100s dark:bg-slate-600 dark:text-green-100 py-0 px-6 shadow rounded-lg sm:px-10">
        <form
        encType="multipart/form-data"
        action=""
          onSubmit={handleSubmit}
          className="m-0 padd block text-xs font-medium text-gray-700 dark:text-green-100"
        >
          <div>
            <label className="m-3 block text-sm font-medium text-gray-700 dark:text-green-100">
              Name:
              <input
                type="text"
                name="name"
                className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name room..."
                ref={inputFiled}
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label className="block text-sm font-medium text-gray-900 dark:text-gray-400">
              Your description:
              <textarea
                id="message"
                name="description"
                rows="4"
                className="shadow-sm block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your description..."
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </label>

            <label className="m-3 block text-sm font-medium text-gray-700 dark:text-green-100">
              Upload file:{" "}
              <input
                type="file"
                name="file"
                className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder="Your url resource..."
              accept="image/jpeg, image/jpg, image/png"
                // value={file.file}
                  onChange={(e) => {
                  setFile(e.target.files[0])                  
                }}
                // onChange={handleChange}
              />
            </label>

            {/* <label className="m-3 block text-sm font-medium text-gray-700 dark:text-green-100">
      url: <input 
      type="text" 
      name="url"   
      className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your url resource..."
      value={values.url} 
      onChange={onChangeHangler}
      />
    </label> */}
            <div className="flex gap-10">
              <button className="mb-5 w-36 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-white">
                +Create room
              </button>
            </div>
          </div>
        </form>
        {/* <button 
    onClick={() => setFormValues(FORM_INITIAL_STATE)} 
    className="mb-5 w-36 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-white"
    >
    Reset
    </button> */}
      </div>

      <div className="flex flex-wrap -mx-96 mb-5">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5 dark:bg-black ">
            {/* card body  */}
            <div className="flex-auto block py-8 px-9">
              <div>
                <div className="flex flex-wrap w-full">
                  {rooms.map((r) => (
                    <RoomItem
                      key={r.id}
                      id={r.id}
                      name={r.name}
                      description={r.description}
                      url={r.url}
                      // deleteItemHandler={deleteItemHandler}
                    />
                  ))}
                  {rooms.length === 0 && (
                    <h2 style={{ color: "red" }}>No rooms added yet! </h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
