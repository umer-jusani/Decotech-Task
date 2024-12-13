import React, { useState } from 'react'
import styled from 'styled-components';
import Logo from "../assets/logo.avif"
import Arrow from "../assets/rightarrw.svg"
import Humburger from "../assets/burger-menu.svg"

const Header = () => {
    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    return (
        <Section className='primary_header'>
            <Container className='container' style={{ "--container-Align": "0 0 0 auto" }}>

                <div className='left_section'>
                    <button href="" className='humburger' onClick={toggleNav}>
                        <img src={Humburger} alt="humburger" />
                    </button>
                    <BrandLogo href="" >
                        <img src={Logo} alt="" />
                    </BrandLogo>

                    {navVisible ? (
                        <MobileNav>
                            <li>
                                <h5>Post Launch</h5>
                            </li>
                            <li>
                                <h5>News & Videos</h5>
                            </li>
                            <li>
                                <h5>Expansion</h5>
                            </li>
                            <li>
                                <h5>Community</h5>
                            </li>
                            <li>
                                <h5>More games</h5>
                            </li>
                        </MobileNav>
                    ) : (
                        <Nav className='nav' >
                            <li>
                                <h5>Post Launch</h5>
                                <a href="" className='arrow'><img src={Arrow} alt="" /></a>
                            </li>
                            <li>
                                <h5>News & Videos</h5>
                            </li>
                            <li>
                                <h5>Expansion</h5>
                            </li>
                            <li>
                                <h5>Community</h5>
                                <a href="" className='arrow'><img src={Arrow} alt="" /></a>
                            </li>
                            <li>
                                <h5>More games</h5>
                                <a href="" className='arrow'><img src={Arrow} alt="" /></a>
                            </li>
                        </Nav>
                    )}
                </div>

                <div>
                    <button className='primary-header-button'>FREE TRIAL</button>
                    <button className='primary-header-button' data-inverted="true">BUY NOW</button>
                </div>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    background-color: var(--bg-clr-black);
    color: var(--f-clr-white);
`

const BrandLogo = styled.a`
    align-self: center;

     & img {
        width: 10rem;
        height: auto;

        @media (max-width: 50em) {
            width: 7rem;
            height: auto;
        }
     }
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const Nav = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
     

    & > li {
        display: flex;
        position: relative;
      /* display: inline-block; */
        list-style: none;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        /* padding-inline: 1rem; */
        cursor: pointer;
        transition-duration: 0.25s;
        z-index: 1;
        @media (min-width: 70em) {
            padding-inline: 1.5rem;
        }
    }

    & > li::after {
      content: "";
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--bg-clr-yellow);  
      z-index: -1;
      transition: top 0.5s ease;
    }

    & > li:hover::after {
      top: 0;
    }

    &  h5 {
    font-size: var(--fs-300);
    line-height: 16px;
    letter-spacing: .01rem;
    height: fit-content;
    }

    @media (max-width: 75em) {
        display: none;
    }
 
`

const MobileNav = styled.ul`
position: fixed;
background-color: var(--bg-lightBlack);
inset: 6rem 2rem 4rem 2rem;
padding-block: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;
border-radius: 1rem;
z-index: 1;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 0 1000vmax rgba(0, 0, 0, 0.75);

height: fit-content;
& > li {
        display: flex;
        text-align: center;
        list-style: none;
        margin-inline: auto;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        height: 100%;
        padding: .5rem;
        cursor: pointer;
        transition-duration: 0.25s;

        &:hover {
            background-color: var(--bg-clr-yellow);
        }

        @media (min-width: 70em) {
            padding-inline: 1.5rem;
        }
    }

`
export default Header
