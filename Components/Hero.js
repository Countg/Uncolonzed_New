import React, { useEffect, useState } from 'react';
import { SiItunes, SiPatreon } from 'react-icons/si';
import { FaSpotify } from 'react-icons/fa';
import { CircularProgress } from '@mui/material'; // Updated for MUI v5

export default function Hero({ episodeData }) {
  const [episode, setEpisode] = useState([]);
  const [image, setImage] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const latestEpisode = episodeData.episodes.splice(0, 1);
    const mainImage = episodeData.image;

    setEpisode(latestEpisode);
    setImage(mainImage);
    setLoading(false);
  }, []);

  return (
    <div className='flex flex-row justify-center items-start overflow-hidden'>
      {/* Text container */}

      <div className='w-full lg:w-1/2 md:w-full mx-auto text-center lg:text-left md:text-center lg:p-20'>
        <h1 className='font-Spartan xl:text-7xl lg:text-4xl md:text-7xl text-4xl font-bold text-gray-700 dark:text-gray-200 my-2'>
          A Canadian
        </h1>
        <h1 className='font-Spartan  xl:text-7xl lg:text-4xl   md:text-7xl  text-4xl  font-bold text-gray-700 dark:text-gray-200 my-2'>
          Podcast about
        </h1>
        <h1 className='font-Spartan  xl:text-7xl  lg:text-4xl md:text-7xl  text-4xl font-bold text-gray-700 dark:text-gray-200 my-2'>
          Race Politics
        </h1>

        <h1 className='font-Spartan xl:text-7xl  lg:text-4xl md:text-7xl  text-4xl font-bold text-gray-700 dark:text-gray-200 my-2'>
          and Pop culture
        </h1>

        <h3 className='font-Arimo font-bold text-4lg  md:text-4lg font-bold text-gray-700 dark:text-gray-200 my-2'>
          With hosts Gavin Stephens & Daniel Grant
        </h3>
      </div>
      {/* Image container */}
      <div className='hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20'>
        {loading ? (
          <CircularProgress color='success' />
        ) : (
          <div className='w-3/4 relative'>
            {episode &&
              episode.map((latestEpisode) => (
                <LatestEpisodeCard
                  latestEpisode={latestEpisode}
                  key={latestEpisode.guid}
                  mainImage={image}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

const LatestEpisodeCard = ({ latestEpisode, mainImage }) => {
  return (
    <div className='github-repo'>
      <a href={latestEpisode.link}>
        <img src={mainImage} className=' shadow' />
      </a>

      <div className='flex flex-row justify-between mt-4'>
        <div className='flex flex-row space-x-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-arrow-90deg-up'
            viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              d='M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z'
            />
          </svg>

          <p className='font-Arimo'>{latestEpisode.title} </p>
        </div>
      </div>
    </div>
  );
};
