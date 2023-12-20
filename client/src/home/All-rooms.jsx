// import { useEffect, useState } from "react";
// import withAuth from "../../HOC/withAuth";
// import * as gameService from '../../services/gameService';
// import LatestGame from "./latest-game/LatestGame";

export default function AllRooms() {
    // const [latestGames, setLatestGames] = useState([]);

    // useEffect(() => {
    //     gameService.getLatest()
    //         .then(result => setLatestGames(result));
    // }, [])

    return (
        <>
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
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
                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img
                          className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg"
                          alt="avarat image"
                        />
                      </div>
                      <div className="text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                        >
                          Samantha Reynolds
                        </a>
                        <span className="block font-medium text-muted">
                          Marketing Manager
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img
                          className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar2.jpg"
                          alt="avarat image"
                        />
                      </div>
                      <div className="text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                        >
                          Benjamin Martinez
                        </a>
                        <span className="block font-medium text-muted">
                          Sales Executive
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img
                          className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar5.jpg"
                          alt="avarat image"
                        />
                      </div>
                      <div className="text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                        >
                          Emily Turner
                        </a>
                        <span className="block font-medium text-muted">
                          Customer Support
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img
                          className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar24.jpg"
                          alt="avarat image"
                        />
                      </div>
                      <div className="text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                        >
                          Jason Anderson
                        </a>
                        <span className="block font-medium text-muted">
                          Development Engineer
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img
                          className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar23.jpg"
                          alt="avarat image"
                        />
                      </div>
                      <div className="text-center">
                        <a
                          href="javascript:void(0)"
                          className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                        >
                          Olivia Carter
                        </a>
                        <span className="block font-medium text-muted">
                          Creative Director
                        </span>
                      </div>
                    </div>
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
