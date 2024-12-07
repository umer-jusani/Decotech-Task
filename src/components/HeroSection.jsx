import React from 'react';
import Background from "../assets/header_fc6.avif"
import SecondaryBackground from "../assets/fc6_background_mobile.avif"
import VideoBg from "../assets/fc6-header-trailer-thumbnail-20th_anniversary.avif"
import Pause from "../assets/PauseIcon.png"
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Section>
      <div className='container' style={{ "--container-Align": "0 auto 0 auto" }}>
        <Wrapper className='flow' style={{ "--flow-spacer": "3em" }}>
          <Head>
            <h1>Welcome</h1>
            <h2>to yara</h2>
          </Head>
          <p>Embrace the gritty experience of an improvised modern-day guerrilla and take down a Dictator and his son to free Yara.</p>


          <VideoContainer>
            <img src={VideoBg} alt="" />
          </VideoContainer>

        </Wrapper>
      </div>

    </Section>
  )
}

const Section = styled.section`
  background-image: url(${Background});
  height: 85vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 70em) {
    background-image: url(${SecondaryBackground});
  }
`;



const VideoContainer = styled.div`
  width: 22em;
  margin-inline: auto;

  & > img {
    width: 100%;
    height: auto;
  }
`;



const Wrapper = styled.div`
  width: fit-content;
  padding-block: 2rem;
   
  @media (min-width: 50em) {
    margin-left: auto;
    margin-right: 6rem;
    padding-block: 6rem;
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
}
& > h1:first-child {
    font-size: var(--fs-600);
    letter-spacing: -1px;
  }
  }
`;

export default HeroSection
