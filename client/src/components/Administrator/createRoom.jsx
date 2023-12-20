export default function CreateRoom () {



    return (
        // <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6 dark:bg-teal-900">
        <div className="max-w-2xl mx-auto">
     <h1 className="">Admin Panel / Create Room in data</h1>
     <div className=" bg-slate-100s dark:bg-slate-600 dark:text-green-100 py-8 px-6 shadow rounded-lg sm:px-10">
  <form className="m-20 padd block text-xs font-medium text-gray-700 dark:text-green-100" >
    <div >
    <label className="m-3 block text-sm font-medium text-gray-700 dark:text-green-100">
      Name: <input type="text" name="nameUrl"   className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name room..."/>
    </label>

    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your description:</label>
    <textarea id="message" rows="4" className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your description..."></textarea>

    
    <label className="m-3 block text-sm font-medium text-gray-700 dark:text-green-100">
      url: <input type="url" name="description"   className="shadow-sm block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your url resource..."/>
    </label>
    <button  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-white">+Create room</button>
    </div>
  </form>
  </div>
        </div>
    )
}