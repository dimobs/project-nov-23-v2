// import {formatData} from '../utils/dataUtils';
import {formatDate } from '../utils/dataUtils' 

export const CommentItem = (
{
  createdAt,
  comment,
  owner,
  userId,
  ownerId,
  commentId,
  deleteButtonClickHandler
}

) => {

const deleteHandler = () => {
  deleteButtonClickHandler(commentId)
}

    return (

    <>
  <div className="ml-6 inline-flex gap-10 justify-start relative top-1/3" > 
   <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg border-solid shadow-lg">
    <div className="relative flex gap-4">
      <img
        src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
        className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
        alt=""
        loading="lazy"
      />
     <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between">
          <p className="dark:text-gray-500 relative text-xl whitespace-nowrap truncate overflow-hidden">
          {owner}
          </p>
          <a className="text-gray-500 text-xl" href="#">
          <i className="fa-solid fa-trash" />
          </a>
      </div>
          <p className="text-gray-400 text-sm">{formatDate(createdAt)}</p>
     </div>
    </div>
          <p className="-mt-4 text-gray-500">
           {comment}
          </p>
          
            {userId === ownerId && (
            <p>
          <button 
          className="text-white w-full px-4 py-3 mb-4 dark:placeholder:text-orange-100 dark:bg-secondary-dark border border-2 border-transparent dark:border-gray-900 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
          onClick={deleteHandler}
          >
            Delete</button>
          </p>
          )}
   </div>
  </div>
</>
    )
}