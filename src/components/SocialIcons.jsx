import React from 'react'
import styled from 'styled-components'
import twitter from "../assets/twitter.avif"
import Twich from "../assets/twich.avif"
import Youtube from "../assets/youtube.avif"
import instagram from "../assets/instagram.avif"
import Facebook from "../assets/facebook.avif"
import musk from "../assets/socialiconsmusk.png"

const SocialIcons = () => {
    return (
        <Section>
            <Musk src={musk} alt="Musk overlay" />
            <div className='container' style={{ "--container-Align": "0 auto 0 auto" }}>
                <div>
                    <ul className='socialIcons_List'>
                        <li>
                            <a href="">
                                <img src={twitter} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={Twich} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={Youtube} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={instagram} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={Facebook} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    background-color: var(--bg-clr-black);
    position: relative;
`

const Musk = styled.img`
position: absolute;
    bottom: -2.7%;
    width: 107%;
    z-index: 3;
    height: 15px;
`;


export default SocialIcons
