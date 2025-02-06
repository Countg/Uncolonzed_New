import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { CircularProgress } from '@material-ui/core';

export default function EpisodeContainer({ episodeData }) {
  const [currentEpisodes, setCurrentEpisodes] = useState([]);
  const [mainImage, setMainImage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const latestEpisode = episodeData.episodes.splice(0, 6);
    const mainImage = episodeData.image;

    setCurrentEpisodes(latestEpisode);
    setMainImage(mainImage);
    setLoading(false);
  }, []);

  return (
    <section className='bg-[#F1F1F1] -mt-1 dark:bg-gray-900 pb-40'>
      <div className='max-w-6xl mx-auto mt-3'>
        <div className='flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10'>
          <h1 className='text-6xl md:text-5xl lg:text-9xl max-w-lg font-Spartan font-bold text-gray-500 my-20 md:my-0  md:text-white dark:text-yellow-500 text-center lg:text-left'>
            Latest Episodes
          </h1>

          <a
            href='https://pod.link/uncolonized'
            target='blank'
            className='mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-Arimo font-semibold flex flex-row space-x-4 items-center dark:text-gray-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
              />
            </svg>
            <p>LISTEN HERE</p>
          </a>
        </div>
      </div>

      {loading ? (
        <CircularProgress />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20'>
          {/* Single github Repo */}

          {currentEpisodes &&
            currentEpisodes.map((latestRepo) => (
              <EpisodeCard
                eps={latestRepo}
                key={latestRepo.guid}
                mainImage={mainImage}
              />
            ))}
        </div>
      )}
    </section>
  );
}

const EpisodeCard = ({ eps, mainImage }) => {
  return (
    <div className='md:mt-4 ease-in-out duration-300 hover:-translate-y-6'>
      <img src={mainImage} className='shadow' />
      <AudioPlayer
        src={eps.enclosure.link}
        autoPlay={false}
        customAdditionalControls={[]}
        layout='stacked-reverse'
        style={{ color: 'white', marginBottom: 5 }}
      />

      <a
        href={eps.link}
        className='font-Arimo font-semibold  group flex flex-row space-x-2 w-full items-center'>
        <p>Check out this episode </p>
        <div className='transform  group-hover:translate-x-2 transition duration-300'>
          &rarr;
        </div>
      </a>
    </div>
  );
};
