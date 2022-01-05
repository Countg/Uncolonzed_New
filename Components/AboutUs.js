import React from "react";
import userData from '../Constants/data';

import {FaItunesNote, FaSpotify, FaRss, FaPatreon} from 'react-icons/fa'
import {
        SiPocketcasts, 
        SiStitcher, 
        SiIheartradio,
        SiGooglepodcasts,
        SiSpreaker,
        SiAmazon,
        SiTunein,
        SiPatreon
    
    } from 'react-icons/si'


export default function AboutUs() {

   


    
    return(
        <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-Spartan font-bold py-20 text-center md:text-left dark:text-yellow-400">
            About Us.
          </h1>
        </div>
     
        <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
            
          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20 ">
           {/* Patreon Call to Action */}
            <div className="inline-flex flex-col">
            
            <div>
                
      <section>

    <div className="card-container">
    <a href="https://www.patreon.com/bePatron?u=24957059">
    
      <div className="card  dark:bg-gray-900 rounded-xl px-4 border border-gray-300 hover:border-gray-300 transition duration-100 transform hover:-translate-y-2 hover:scale-100">
      <SiPatreon className="text-gray-700 dark:text-gray-200 text-4xl lg:text-4xl mt-8 "/>
        <h2 className="text-black dark:text-white sm:w-52 lg:w-full md:w-40 font-bold leading-6 tracking-normal py-2">Become a Patron and get exclusive perks</h2>

       

    <div className="mx-auto ">
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
      <p className="text-gray-700 dark:text-gray-200 text-sm">Early Access</p>
    </div>
    <div className="flex flex-row items-center space-x-2 my-4 justify-start">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200 mt-1" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>
   
      <p className="text-gray-700 dark:text-gray-200 text-sm">Merch & tickets</p>
    </div>
  </div>


       
        <div className="img-container pb-8">
        <a href="https://www.patreon.com/bePatron?u=24957059"  className="mb-20 md:mb-0 px-8 py-4 rounded-md  shadow-lg bg-red-500 flex flex-row space-x-4 items-center">
       
          <p className="md:text-xs lg:text-2xl text-4xl text-center font-spartan font-bold text-gray-200 mx-auto">Join Now!</p>
           
     </a>
     {/* <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script> */}
        </div>
      
      </div>
    </a>

  </div>
</section>
               
              </div>
              <div>
                <h1 className="text-xl font-semibold mt-8 text-gray-700 dark:text-gray-200">
                  Contact
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  For any enquiries, send us a{" "}
                  <a
                    href={`mailto:${userData.email}`}
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  >
                    message
                  </a>{" "}
                
                </p>
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
              {userData.about.description?.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
                >
                  {desc}
              
            
                
              
                </p>
              
              ))}

    
            <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-Spartan font-bold text-gray-600 dark:text-gray-50">
              Where to Listen:
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
            <a 
            alt='Link to Apple Podcasts'
            title="Apple Podcasts"
            className="transform  hover:scale-125 transition duration-1000 ease-out text-purple-500"
            href="https://podcasts.apple.com/podcast/id698940847?mt=2&app=podcast&ls=1">
            <FaItunesNote  className="h-20 w-20 mx-4 my-4" />
           

            </a>
            <a 
            alt="link to Spotify"
            title="Spotify"
            className="transform  hover:scale-125 transition duration-1000 ease-out"
            href="https://open.spotify.com/show/4VXk56ZMQABGFxlu6aBuUv?si=9c0031a40ee14b36">
            <FaSpotify  className="h-20 w-20 mx-4 my-4 text-green-500" />
            </a>

            <a 
            alt="Link to I heart Radio"
            title="I Heart Radio"
            className="transform  hover:scale-125 transition duration-1000 ease-out"
            href="https://www.iheart.com/podcast/256-master-race-debaiters-31091297/">
            <SiIheartradio   title="I Heart Radio" className="h-20 w-20 mx-4 my-4 text-red-400" />
            </a>

            <a
            alt="Link to Spreaker"
            title="Spreeker"
            className="transform  hover:scale-125 transition duration-1000 ease-out" 
            href="https://www.spreaker.com/show/mrduncolonized">
            <SiSpreaker title="Spreaker" className="h-20 w-20 mx-4 my-4 text-yellow-400" />
            </a>

            <a 
            alt="link to Stitcher"
            title="Stitcher"
            className="transform  hover:scale-125 transition duration-1000 ease-out"
            href="https://listen.stitcher.com/yvap/?af_dp=stitcher://show/123146&af_web_dp=https://www.stitcher.com/show/123146">
            <SiStitcher   title="Stitcher" className="h-20 w-20 mx-4 my-4" />
           

            </a>

            <a
            alt="Link to Pocketcasts"
            title="PocketCasts"
            className="transform  hover:scale-125 transition duration-1000 ease-out" 
            href="https://pca.st/v97F">
            <SiPocketcasts title="PocketCasts" className="h-20 w-20 mx-4 my-4 text-red-600" />
            </a>

           

            <a 
            alt="Link to Google Podcasts"
            title="Google Podcasts"
            className="transform  hover:scale-125 transition duration-1000 ease-out"
            href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDI0NTUzMi9lcGlzb2Rlcy9mZWVk">
            <SiGooglepodcasts title="Google Podcasts" className="h-20 w-20 mx-4 my-4 text-blue-500" />
           

            </a>
            <a
            alt="Link to Patreon"
            title="Patreon"
            className="transform  hover:scale-125 transition duration-1000 ease-out" 
            href="https://patreon.com/theuncolonized">
            <FaPatreon title="Patreon" className="h-20 w-20 mx-4 my-4 text-orange-600" />
            </a>

            <a
            alt="Link to Amazon Music"
            title="Amazon Music"
            className="transform  hover:scale-125 transition duration-1000 ease-out" 
            href="https://music.amazon.ca/podcasts/0f7e322a-9108-4e40-8a6e-d5bc838720f1/uncolonized">
            <SiAmazon title="Amazon Music" className="h-20 w-20 mx-4 my-4" />
            </a>

            <a
            alt="Link to TuneIn"
            title="Tunin"
            className="transform  hover:scale-125 transition duration-1000 ease-out" 
            href="http://tun.in/pjM2B">
            <SiTunein title="TuneIn" className="h-20 w-20 mx-4 my-4 text-cyan-300" />
            </a>
         
          

            <a
            alt="Link to Rss Feed"
            title="Rss Feed"
            className="transform  hover:scale-125 transition duration-1000 ease-out" 
            href="https://www.spreaker.com/show/4245532/episodes/feed">
            <FaRss title="RSS Feed" className="h-20 w-20 mx-4 my-4 text-yellow-600" />
            </a>
         
          
             
              
              </div>
  
             </div>
            </div>
          </div>
       
      </section>
    )
}
