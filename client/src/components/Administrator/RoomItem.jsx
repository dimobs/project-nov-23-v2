export default function RoomItem ({
  id,
  name,
  description,
  url,
  deleteItemHandler
}) {

  const onDelItem = () => {
    deleteItemHandler(id);
  };

  return (
    <>
     
                <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                  <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                    <img
                      className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                      src={url} 
                      alt={name + ' image'}
                    />
                  </div>
                  <div className="text-center">
                    <a
                      href="javascript:void(0)"
                      className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                    >
                     {id}
                    {name}
                    </a>
                    <span className="block font-medium text-muted">
                     {description}
                    </span>
                  </div>
                  <div className="flex items-center">
                  <button onClick={onDelItem} className="mr-10 inline-block">Delete</button>
                  {/* <button className="inline">Edit</button> */}
                  </div>
                </div>
        
  </>
  
);
}