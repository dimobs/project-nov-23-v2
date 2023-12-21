import { useEffect, useState } from "react";
// import withAuth from "../../HOC/withAuth";
import * as roomService from '../services/roomService';
// import LatestGame from "./latest-game/LatestGame";

import RoomItem from "../components/Administrator/RoomItem";

export default function AllRooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        roomService.getAll()
            .then(result => setRooms(result));
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
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
            <p className="text-sm text-slate-500 py-1">
              {" "}
              Tailwind CSS Component from{" "}
              <a
                href="https://www.loopple.com/theme/riva-dashboard-tailwind?ref=tailwindcomponents"
                className="text-slate-700 hover:text-slate-900"
                target="_blank"
              >
                Riva Dashboard
              </a>{" "}
              by{" "}
              <a
                href="https://www.loopple.com"
                className="text-slate-700 hover:text-slate-900"
                target="_blank"
              >
                Loopple Builder
              </a>
              .{" "}
            </p>
          </div>
        </div>
      </>
      
    );
}
