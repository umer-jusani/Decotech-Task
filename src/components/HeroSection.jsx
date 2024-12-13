import React, { useEffect } from 'react';
import styled from 'styled-components';
import VideoBg from "../assets/fc6-header-trailer-thumbnail-20th_anniversary.avif";
import SecondaryBackground from "../assets/fc6_background_mobile.avif";
import Background from "../assets/header_fc6.avif";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const HeroSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 600, // Customize options here
    });
  }, []);

  return (
    <Section className='hero-section'>
      <div className='container' data-small="true" style={{ "--container-Align": "0 auto 0 auto" }}>
        <Wrapper className='flow' style={{ "--flow-spacer": "3em", }}>
          <Head data-aos="fade-left" data-aos-duration="1500" >
            <h1>Welcome</h1>
            <h2>to yara</h2>
          </Head>
          <p data-aos="fade-left" data-aos-duration="3000">Embrace the gritty experience of an improvised modern-day guerrilla and take down a Dictator and his son to free Yara.</p>
          <VideoContainer data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
            <img src={VideoBg} alt="Video Background" loading="lazy" />
          </VideoContainer>

        </Wrapper>
      </div>

    </Section>
  )
}

const Section = styled.section`
  background-image: url(${Background});
  min-height: 85vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  @media (max-width: 70em) {
    background-image: url(${SecondaryBackground});
  }

  @media (max-width: 40em) {
    min-height: 70vh;
  }
`;



const VideoContainer = styled.div`
  width: 22em;
  margin-inline: auto;

  @media (max-width: 40em) {
    width: 16em;
  }

  & > img {
    width: 100%;
    height: auto;
  }
`;


const Wrapper = styled.div`
  width: fit-content;
  /* padding-block: 4rem; */
  
  @media (min-width: 50em) {
    margin-left: auto;
    margin-right: 6rem;
    /* padding-block: 6rem; */
  }

  @media (max-width: 50em) {
    max-width: 394px;
    margin-inline: auto;
  }

& p {
  color: var(--bg-lightBlack);
  text-align: center;
  
}
`;

const Head = styled.div`
  text-transform: uppercase;
  color: var(--bg-lightBlack);
  font-weight: bolder;
  line-height: 100px;

  & > h1:first-child {
    font-size: var(--fs-800);
    letter-spacing: -5px;
    border-bottom: 4px solid var(--bg-lightBlack);
  }

  & > :nth-child(2) {
  /* Your styles here */
  font-size: var( --fs-750);
  text-align: end;
  letter-spacing: -3px;
  line-height: 53px;
}


@media (max-width: 50em) {
  
  & > :nth-child(2) {
  font-size: var( --fs-700);
  line-height: 0.6;
}
& > h1:first-child {
    font-size: var(--fs-700);
    letter-spacing: -1px;
    line-height: 0.6;
  }
  }
`;

export default HeroSection
