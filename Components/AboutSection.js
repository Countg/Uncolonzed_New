import React, {useState} from "react";
import Link from "next/link";
import Model from "./Model";
import gavinData from "../Constants/gavin";
import danielData from "../Constants/daniel";


export default function AboutSection(){

  const [gavinToggle, setGavinToggle] = useState(false);
  const [danielToggle, setDanielToggle] = useState(false)


  const gavinToggleHandler = () => {
   setGavinToggle(!gavinToggle)
  }

  const danielToggleHandler = () => {
    setDanielToggle(!danielToggle)
  }




    return (
        <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 ">
          <div className="max-w-6xl mx-auto">
            <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:mt-20 md:mb-10 lg:my-0">
              <h1 className="text-6xl md:text-5xl lg:text-9xl max-w-lg font-Spartan font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-yellow-500 text-left">
              The Hosts
              </h1>
             
            </header>
    
            {/* Grid starts here */}
            <div className="m-3 grid grid-rows-2 gap-4  sm:grid-cols-6 sm:grid-rows-none sm:gap-4">
              <button
                onClick={gavinToggleHandler}
                className="w-full block row-span-1 col-span-6 sm:col-span-3 shadow-2xl h-14 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
                  <img
                    src='/0004-GavinStephens_Album_Oct2020.jpg'
                    alt="portfolio"
                    className=" w-full md:h-[35rem] h-[20rem] object-cover  transform  hover:scale-125 transition duration-2000 ease-out"
                  />
                  <h1 className="absolute top-5 left-5  md:top-10 md:left-10 text-gray-50 font-Arimo font-semibold  md:text-xl sm:text-xs bg-red-500 rounded-md px-2">
                    {gavinData.name}
                  </h1>
                  </div>
               </button>
               
           
            {gavinToggle ?  (
              <Model
              image={gavinData.image}
              name={gavinData.name}
              bio={gavinData.description}
              link={gavinData.link}
              toggleHandler={gavinToggleHandler} 
              toggleModel={gavinToggle}
              />
      
      ) : null}
  

           

               
            
        
           
              {/* Single card */}
              <button
                onClick={danielToggleHandler}
                className="w-full block row-end-auto col-span-6 sm:col-span-3 shadow-2xl "
              >
                <div className="relative overflow-hidden">
                  {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
                  <img
                    src='/IMG_3127.JPG'
                    alt="portfolio"
                    className="  w-full md:h-[35rem] h-[20rem] object-cover transform w-full hover:scale-125 transition duration-2000 ease-out"
                  />
                  <h1 className="absolute top-5  right-8 md:top-10  text-gray-50 font-Arimo font-semibold md:text-xl text-sx  bg-red-500 rounded-md px-2">
                  {danielData.name}
                  </h1>
                  </div>
               
              </button>
              {danielToggle ?  (
              <Model
              image={danielData.image}
              name={danielData.name}
              bio={danielData.description}
              link={danielData.link}
              toggleHandler={danielToggleHandler} 
              toggleModel={danielToggle}
              />
      
      ) : null}
  
            </div>
          </div>
        </div>
      );

}