import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Background from "../assets/fc6_background_mobile.avif"
// character
import Anton from "../assets/characters/FC6_Characters_Anton.avif";
import Clara from "../assets/characters/FC6_Characters_Clara.avif";
import Dani from "../assets/characters/FC6_Characters_Dani-Male.avif";
import Diego from "../assets/characters/FC6_Characters_Diego.avif";
import Juan from "../assets/characters/FC6_Characters_Juan.avif";
import guerillas from "../assets/characters/fc6-guerillas-dani.avif";

const Character = () => {

    var settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1620,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,

                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };;


    return (
        <Section className='padding-block-500 flow' style={{ "--flow-spacer": "3em" }}>
            <Container className='container flow' style={{ "--container-Align": "0 auto 0 auto", "--flow-spacer": "2em" }}>
                <h2 className='subSection_title'>Main characters</h2>
                <div>
                    <p>From forced yaran army recruit to gurrrilla leader, become dani roljas and fight a corrupt regime to restore the island nation of Yara.</p>
                    <p>Meet a diverse cast of character along your journet to take down a Anton Castillo.</p>
                </div>
            </Container>

            <div style={{ overflow: "hidden" }}>
                <Slider {...settings}>
                    <Card>
                        <img src={Anton} alt="" />
                        <h3>Anton Castillo</h3>
                    </Card>
                    <Card>
                        <img src={Clara} alt="" />
                        <h3>Clara garcia</h3>
                    </Card>
                    <Card >
                        <img src={Dani} alt="" />
                        <h3>Dani (Female)</h3>
                    </Card>
                    <Card >
                        <img src={Diego} alt="" />
                        <h3>Diego Castillo</h3>

                    </Card>
                    <Card >
                        <img src={Juan} alt="" />
                        <h3>Juan cortez</h3>
                    </Card>
                    <Card>
                        <img src={guerillas} alt="" />
                        <h3>Juan cortez</h3>
                    </Card>
                </Slider>
            </div>

        </Section>
    )
}

const Section = styled.section`
background: url(${Background});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
    color: var(--f-clr-primary);
`;

const Card = styled.div`
 position: relative;
 
    & img {
        width: 18rem;
        height: auto;
        border: 3px solid var(--bg-clr-greyish);
        border-radius: 0.5rem;
        margin-inline: auto;
        @media (min-width: 50em) {
            width: 20rem;
    }
    }

    & > h3 {
        position: absolute;
        bottom: 40px;
        left: 10%;
        margin-inline: 1rem;
        font-size: var(--fs-600);
        font-weight: 500;
        text-transform: uppercase;
        display: inline-block;
        border-top: 3px solid var(--f-clr-primary);
        letter-spacing: 0.5;
        line-height: 1.2;

        @media (max-width: 50em) {
            font-size: var(--fs-550);
    }

    }

    /* & > h3:before {
        content: "fm 30-184";
        top: -40%;
        left: 0;
        font-size: 10px;
        position: absolute;
        font-size: .625rem;
        line-height: 10px;
        line-height: .625rem;
        letter-spacing: .5px;
        letter-spacing: .5rem;
    } */
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;


    & > p {
        width: 100%;
    }
`;

export default Character
