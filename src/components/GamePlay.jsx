import React, { useEffect, useRef, useState } from 'react'
import Weapon from "../assets/FC6_Website_Weapons.avif"
import BackPacks from "../assets/FC6_Website_Backpacks.avif"
import FC6_Website_Vehicles from "../assets/FC6_Website_Vehicles.avif"
import bgVideo from "../assets/FC6_Website_Loop_Vehicles_SD.mp4"
import bgWeapons from "../assets/FC6_Website_Loop_Weapons_HD.mp4"
import bgBackpacks from "../assets/FC6_Website_Loop_Backpacks_HD.mp4"
import styled from 'styled-components'

const GamePlay = () => {
    const videoRef = useRef();
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const videos = [bgVideo, bgWeapons, bgBackpacks];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % videos.length;
            videoRef.current.src = videos[index];
            videoRef.current.load();
            setSelectedIndex(index);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Section>
            <video className="bg-video" autoPlay loop muted ref={videoRef}>
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='container' style={{ "--container-Align": "0 auto 0 auto" }}>
                <h2 className='subSection_title'>GAMEPLAY OVERVIEW</h2>
                <Content>
                    <Head>Weapons</Head>
                    <p>Can you imagine dealing a devastating blow with a modified sardine can? For Yaran guerrillas, the answer will always be yes. But resolver weapons are not all you will find in Yara. From a deadly CD launcher to a more classic sniper rifle, there is a weapon for everyone! you </p>
                    <button className='primary-button'>WATCH TRAILER</button>
                    <ImageContainer>
                        <div data-selected={selectedIndex === 1 ? "true" : "false"}>
                            <img src={Weapon} alt="" loading='lazy' />
                        </div>
                        <div data-selected={selectedIndex === 2 ? "true" : "false"}>
                            <img src={BackPacks} alt="" loading='lazy' />
                        </div>
                        <div data-selected={selectedIndex === 0 ? "true" : "false"}>
                            <img src={FC6_Website_Vehicles} alt="" loading='lazy' />
                        </div>
                    </ImageContainer>
                </Content>



            </div>
        </Section>
    )
}


const Section = styled.section`
    position: relative;
    overflow: hidden;
    padding-block: 4rem;

    @media (max-width: 50em) {
        padding-block: 2rem;
        }

    .bg-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    & .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 9rem;

        @media (max-width: 40em) {
         gap: 4rem;
        }

    }
 
`;
const ImageContainer = styled.div`
    display: flex ;
    justify-content: center;
    gap: 2rem;

    & div {
        border: 2px solid var(--bg-clr-greyish);
    }

    & div[data-selected="true"] {
        border: 2px solid var(--bg-clr-red);
    }
    & img {
         width: 240px;
        height: 100%;
    }

    @media (max-width: 40em) {
        gap: 1rem;
        & img {
         width: 200px;
         height: 100%;
    }
        }
`;

const Content = styled.div`
   text-align: center;
   display: block;

   & > * {
    margin-top: 1.4rem;

    @media (max-width: 40em) {
        margin-top: 0.8rem;
        }
   }

   & p {
    color: #e9e2cf;
    line-height: 1.5;
    text-shadow: 0 0 #000;
    max-width: 70ch;
    font-weight: bold;
    margin-inline: auto;
    font-family:  sans-serif;
   }

   
`;

const Head = styled.h2`
    text-transform: uppercase;
    font-weight: bolder;
    color: var(--f-clr-primary);
    position: relative;
    font-size: var(--fs-700);
    letter-spacing: -3px;
    display: inline-block;

    @media (max-width: 50em) {
    font-size: var(--fs-600);
  }
`;



export default GamePlay
