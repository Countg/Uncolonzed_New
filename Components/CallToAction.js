import React from "react";
import { SiPatreon } from "react-icons/si";

export default function CallToAction() {
    return( 
    <div className="m-h-full border border-gray-300 rounded-md grid grid-cols-1 md:grid-cols-3 justify-center items-center p-8 text-gray-700 dark:text-gray-200 shadow mx-4 md:mx-20 my-6">

 <div>
    <h1 className="font-semibold md:text-2xl text-center md:text-left my-2 text-gray-700 dark:text-gray-200">Want to support the podcast? Become a patron!</h1>
    <p className=" text-sm md:text-base font-light font-Arimo text-gray-700  dark:text-gray-200">Uncolonzed is a fan supported podcast. We couldn&apos;t do this without YOUR help.</p>
  </div>
  <div className="mx-auto">
    <div className="flex flex-row items-center space-x-2 my-4 justify-start ">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200 mt-1" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>
      <p className=" text-sm font-Arimo text-gray-700 dark:text-gray-200">Exclusive Content</p>
    </div>
    <div className="flex flex-row items-center space-x-2 my-4 justify-start text-gray-700 dark:text-gray-200">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-Arimo text-gray-700 dark:text-gray-200 mt-1" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>
      <p className=" text-sm font-Arimo text-gray-700 dark:text-gray-200">Early Access to Content</p>
    </div>
    <div className="flex flex-row items-center space-x-2 my-4 justify-start text-gray-700 dark:text-gray-200">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200 mt-1" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>
   
      <p className="text-sm font-Arimo text-gray-700 dark:text-gray-200">Merch</p>
    </div>
  
  </div>
  <div className="hirenow-button mx-auto">
  <a href="https://www.patreon.com/bePatron?u=24957059"  className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-red-500 shadow-lg text-xl flex flex-row space-x-4 items-center hover:border-gray-300 transition duration-100 transform hover:-translate-y-2 hover:scale-100">
        <SiPatreon className="text-gray-900"/>
          <p className="md:text-base xl:text-2xl sm:text-2xl font-spartan font-bold text-gray-200">Join Now!</p>
           
     </a>
     {/* <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script> */}
   
  </div>

 
   
 
 
</div>


    )
}