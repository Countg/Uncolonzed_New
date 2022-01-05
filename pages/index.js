import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import latestEpisodes from '../lib/latestEpisodes';
import ContainerBlock from '../Components/ContainerBlock'
import Hero from '../Components/Hero'
import EpisodeContainer from '../Components/Episodes';
import AboutSection from '../Components/AboutSection';
import CallToAction from '../Components/CallToAction';


export default function Home({episodeData}) {
  return (
    <ContainerBlock 
    title="Uncolonized Podcast - Race, pop culture and Politics, from a Canadian perspective"
    description="Uncolonized is a funny and blunt podcast about race, politics, and culture, from a Canadian perspective."
    >
    <Hero episodes={episodeData}/>
   
    <AboutSection/>
    <CallToAction/>
    <EpisodeContainer episodes={episodeData}/>
  
   
    </ContainerBlock>
  )
};

export const getServerSideProps = async () => {
  const episodeData = await latestEpisodes();
  

  return {
    props: {
      episodeData,
    },
  }

}
