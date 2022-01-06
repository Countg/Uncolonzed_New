import React from "react";

export default function Modal({ name, bio, link, toggleHandler, image}) {
    return (
        <>
        <div
         onClick={toggleHandler}
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-2xl ">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-Spartan font-semibold text-gray-700 dark:text-gray-200">
                  {name}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={toggleHandler}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <img 
                src={image}
                className=" w-full object-cover h-40 sm:h-80"
                />
                <p className="my-4 text-blueGray-500 text-lg text-center leading-relaxed text-black sm:text-left text-gray-700 dark:text-gray-200">
                 {bio}
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-9 border-t border-solid border-blueGray-200 rounded-b">
              <button
                  className="mb-20 md:mb-0 px-8 py-4 rounded-md shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center  bg-cyan-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  target='blank'
                  href={link}
                >
                 <svg xmlns="http://www.w3.org/2000/svg" 
                 className="h-6 w-6" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              SOCIAL LINKS
                </button>
                
                
               
                <button
                  className="mb-20 md:mb-0 px-8 py-4 rounded-md shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center  bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
               
                  type="button"
                  target='blank'
                 onClick={toggleHandler}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>


    )
}