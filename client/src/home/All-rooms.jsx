import { useEffect, useState } from "react";
import withAuth from "../HOC/withAuth";
import * as roomService from '../services/roomService';
import * as commentService from '../services/commentService';
// import LatestGame from "./latest-game/LatestGame";
import RoomItem from "../components/Administrator/RoomItem";
import Spinner from "../components/Administrator/Spinner";
import { CommentItem } from "../components/commentItem";


function Rooms(
  {userId, 
    email}
  ) {   

    const user = [];
    if(email){
     user.push(email.split('@')[0]);
    }
    const [rooms, setRooms] = useState([]);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [roomId] = useParams();

    useEffect(() => {
      setIsLoading(true);
        roomService.getAll()
            .then(result => setRooms(result))
        commentService.getAll()
        // .then(c => setComments(c))
        .then(res => res.json())
        .then(c => setComments(c))
            .finally(() => setIsLoading(false))
            // try {
            //   fetch('http://localhost:3030/data/rooms/comments')
            //   .then(res => res.json())
            //   .then(data => console.log(Object.values(data)))
            // }catch (err) {

            //   console.log(err);
            // }

    }, []);

const formSubmitAddComment = async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.currentTarget));
try {
 const newComment = await commentService.create(userId, data);
 
 setComments(state => [...state, newComment]);
 }catch (err) {
  console.log(err);
}
}
    return (
        <>
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border  border-stone-200 bg-white m-5 dark:bg-secondary-dark">

              {/* card body  */}
              <div className="flex-auto block py-8 px-9">
                <div>
                  <div className="mb-9">
                    <h1 className="mb-2 text-[1.75rem] font-semibold text-dark">
                    ulitsa "Tsar Asen I" 95, 8000 Burgas City, Bulgaria
                    </h1>
                    <span className="text-[1.15rem] font-medium text-muted">
                      {" "}
                      Set in Burgas City, 1.6 km from Burgas Central Beach and 2.2 km from North Beach Burgas, Sweet Home offers air-conditioned accommodation with a terrace and free WiFi. This apartment provides accommodation with a balcony. Poda Birdwatching Spot is 11 km away and Burgas Saltworks is 11 km from the apartment.

The spacious apartment has 2 bedrooms, a flat-screen TV with cable channels, a fully equipped kitchen with a dishwasher and an oven, a washing machine, and 1 bathroom with a shower. Additional in-room amenities include chocolates or cookies.

Popular points of interest near the apartment include Burgas Opera House, Burgas Central Railway Station and Yug (South) Bus Station. The nearest airport is Burgas Airport, 15 km from Sweet Home.{" "}
                    </span>
                  </div>
                  <div className="flex flex-wrap w-full">
                  {rooms.map(r => 
<RoomItem
key={r.id}
id={r.id}
name={r.name}
description={r.description}
url={r.url}
/>
  )}
{/* {rooms.length === 0 && <h2 style={{color:"red", fontSize:"32px"}}>No rooms added yet!</h2>} */}
  {/* {isLoading && <Spinner />} */}
  {isLoading && <Spinner />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* view Comment */}
      
{comments.map(c => 
  <CommentItem
  key={c.commentId}
  createdAt={c.createdAt}
  comment={c.text}
  />
)}

{comments.length === 0 && <p key={'noComment'}>Nobody commnets yet.</p>}
     {/* view Comment */}

{/* add comments */}
<div className="max-w-4xl py-16 xl:px-8 flex justify-center mx-auto" >
  <div className="w-full mt-16 md:mt-0 ">
    <form  
    className="relative z-10 h-auto p-8 py-0 overflow-hidden  border-y-orange-500 border-b-2 rounded-sm shadow-2xl" 
    onSubmit={formSubmitAddComment}
    >
      <h3 className="mb-6 text-xl font-medium text-center dark:bg-secondary-dark rounded-xl ">
        Write a comment as 
        <p className='mb-5 mr-5 text-white inline'
      >
        {` ${user}` }
        {user.length ===0 && <p>Anonimous</p>}
        </p></h3>
      <textarea
        type="text"
        name="comment"
        className="text-white w-full px-4 py-3 mb-4 dark:placeholder:text-orange-100 dark:bg-secondary-dark border border-2 border-transparent dark:border-gray-900 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
        placeholder="Write your comment"
        rows={5}
        cols={33}
        // defaultValue={""}
      />
      <input
        type="submit"
        defaultValue="Submit comment"
        name="submit"
        className="text-white w-full px-4 py-3 mb-4 dark:placeholder:text-orange-100 dark:bg-secondary-dark border border-2 border-transparent dark:border-gray-900 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
      />
    </form>
  </div>
</div>
     
      </>
      
    );
}

const AllRooms = withAuth(Rooms)

export default AllRooms;