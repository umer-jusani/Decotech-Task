import React from 'react'
import styled from 'styled-components';
import Logo from "../assets/logo.avif"
import Arrow from "../assets/rightarrw.svg"
import Humburger from "../assets/burger-menu.svg"

const Header = () => {
    return (
        <Section className='primary_header'>
            <Container className='container' style={{ "--container-Align": "0 0 0 auto" }}>

                <div className='left_section'>
                    <a href="" className='humburger'>
                        <img src={Humburger} alt="humburger" />
                    </a>
                    <BrandLogo href="" >
                        <img src={Logo} alt="" />
                    </BrandLogo>

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
        list-style: none;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        /* padding-inline: 1rem; */
        cursor: pointer;
        transition-duration: 0.25s;

        &:hover {
            background-color: var(--bg-clr-yellow);
        }

        @media (min-width: 70em) {
            padding-inline: 1.5rem;
        }
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

export default Header
