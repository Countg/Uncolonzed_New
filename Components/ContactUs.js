import React from "react";
import userData from '../Constants/data';
import { SiPatreon } from "react-icons/si";
import ContactForm from "./ContactForm";


export default function ContactUs() {
    return(
        <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-Spartan font-bold py-20 text-center md:text-left dark:text-yellow-400">
           Contact Us.
          </h1>
        </div>
     
        <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
            
          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
           {/* Patreon Call to Action */}
            <div className="inline-flex flex-col">
            
            <div>
                
      <section>

    <div className="card-container">
    <a href="https://www.patreon.com/bePatron?u=24957059">
    
      <div className="card dark:bg-gray-900 rounded-xl px-4 border border-gray-300 hover:border-gray-300 transition duration-100 transform hover:-translate-y-2 hover:scale-100">
      <SiPatreon className="text-gray-700 dark:text-gray-200 text-4xl lg:text-4xl mt-8 "/>
        <h2 className="text-black dark:text-white sm:w-52 lg:w-52 md:w-40 font-bold leading-6 tracking-normal py-2">Become a Patron and get exclusive perks</h2>

       

        <div className="mx-auto">
    <div className="flex flex-row items-center space-x-2 my-4 justify-start">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200 mt-1" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>
      <p className="text-gray-700 dark:text-gray-200 text-sm">Exclusive Content</p>
    </div>
    <div className="flex flex-row items-center space-x-2 my-4 justify-start">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200 mt-1" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>
      <p className="text-gray-700 dark:text-gray-200 text-sm">Early Access to Content</p>
    </div>
    <div className="flex flex-row items-center space-x-2 my-4 justify-start">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200 mt-1" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>
   
      <p className="text-gray-700 dark:text-gray-200 text-sm">Merch</p>
    </div>


       
        <div className="img-container pb-8">
        <a href="https://www.patreon.com/bePatron?u=24957059" data-patreon-widget-type="become-patron-button"  className="mb-20 md:mb-0 px-8 py-4 rounded-md  shadow-lg bg-red-500 flex flex-row space-x-4 items-center">
       
          <p className="md:text-xs lg:text-2xl text-4xl text-center font-spartan font-bold text-gray-200 mx-auto">Join Now!</p>
           
     </a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
        </div>
      </div>
      </div>
    </a>

  </div>
</section>
               
              </div>
             
             
              {/* Social Links */}
              <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                Social Links
              </h1>
              <div className="mt-4 ml-4">
                <div className="flex flex-row justify-start items-center ">
                  <a
                    href={userData.socialLinks.facebook}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      Facebook
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.twitter}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      Twitter
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.patreon}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      Patreon
                    </p>
                  </a>
                </div>
              
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.instagram}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                      Instagram
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {/* Text area */}
            <div className="col-span-1 md:col-span-2">
            
    
            <h1 className="text-3xl text-left rounded-md px-2 py-1 inline-block font-Spartan font-bold text-gray-600 dark:text-gray-50">
            We love to hear from our listeners. Why not drop us a line, send us a question, comment or suggest an episode?
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
                <ContactForm/>
           
         
          
             
              
              </div>
  
             </div>
            </div>
          </div>
       
      </section>
    )
        
    
}