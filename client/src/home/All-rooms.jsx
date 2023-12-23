import { useEffect, useState } from "react";
// import withAuth from "../../HOC/withAuth";
import * as roomService from '../services/roomService';
// import LatestGame from "./latest-game/LatestGame";

import RoomItem from "../components/Administrator/RoomItem";
import Spinner from "../components/Administrator/Spinner";

export default function AllRooms() {
    const [rooms, setRooms] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true);

        roomService.getAll()
            .then(result => setRooms(result))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5 dark:bg-black ">
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

  {isLoading && <Spinner />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
            <p className="text-sm text-slate-500 py-1 dark:text-slate-400">
              {" "}
         This project was created by{" "}
              <a
                href="https://portfolio-dimo.web.app/"
                className="text-slate-700 hover:text-slate-900 dark:text-slate-200"
                target="_blank"
              >
               Dimo Karachorbadzhiev
              </a>{" "}
              Go to...{" "}
              <a
                href="https://www.linkedin.com/in/dimo-karachorbadzhiev-313418123/"
                className="text-slate-700 hover:text-slate-900 dark:text-slate-200"
                target="_blank"
              >
                LinkIn
              </a>
              .{" "}
            </p>
          </div>
        </div>
      </>
      
    );
}
