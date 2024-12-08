import React from 'react'
import styled from 'styled-components';
import Background from "../assets/c3ad5e8373cdf41025fdbb5f5b40cbbf.jpg";
import SliderImageOne from "../assets/FC20-thumbnail.avif";
import SliderImageTwo from "../assets/Happening___Ubisoft_960px_540px.avif";
import SliderImageThree from "../assets/FarCry6_FreeWeekend.avif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LatestNews = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1100, // Medium devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768, // Small devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <Section className='padding-block-500'>
            <Container className='container' style={{ "--container-Align": "0 auto 0 auto", "--max-width": "1200px" }}>
                <h2 className='subSection_title'>Latest Game News</h2>




                <Slider className='slider' {...settings}>
                    <Card>
                        <Image src={SliderImageOne} alt='Far-Cry' loading='lazy' />
                        <Content className='flow' style={{ "--flow-spacer": ".75em" }}>
                            <Title>CELEBRATE FAR CRY 20TH ANNIVERSARY WITH THE LATEST TRANSMEDIA RELEASES</Title>
                            <p>14 March 2024</p>
                            <span className='time-duration'>3 Min Read</span>
                            <p>If you enjoyed playing Far Cry games, then brace yourself because there’s more to explore thanks to the slate of transmedia products developed around the franchise.</p>
                            <button className='primary-button'>Read More</button>
                        </Content>
                    </Card>
                    <Card>
                        <Image src={SliderImageTwo} alt='Far-Cry' loading='lazy' />
                        <Content className='flow' style={{ "--flow-spacer": ".75em" }}>
                            <Title>Take Your Best Shot for Ubisoft’s Photomode Contest 2024</Title>
                            <p>19 February 2024</p>
                            <span className='time-duration'>3 Min Read</span>
                            <p>Submit your best in-game photo for a chance to win a Ubisoft Montreal studio tour, a one-year Ubisoft+ Premium subscription, and more.</p>
                            <button className='primary-button'>Read More</button>
                        </Content>
                    </Card>
                    <Card>
                        <Image src={SliderImageThree} alt='Far-Cry' loading='lazy' />
                        <Content className='flow' style={{ "--flow-spacer": ".75em" }}>
                            <Title>Far Cry 6 – Free Weekend Available Now</Title>
                            <p>14 February 2023</p>
                            <span className='time-duration'>3 Min Read</span>
                            <p>Don’t miss this chance to liberate Yara from an oppressive dictator, take advantage of major discounts, and snag an in-game exclusive for playing co-op.</p>
                            <button className='primary-button'>Read More</button>
                        </Content>
                    </Card>
                </Slider>

                <Button>
                    <button className='primary-button'>All News</button>
                </Button>
            </Container>


        </Section>
    )
}


const Section = styled.section`
background-image: url(${Background});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
/* color: var(--bg-clr-greyish); */

& h2 {
    display: block;
}
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;

    @media (max-width: 40em) {
        gap: 2rem;
    }
`;

const Content = styled.div`
margin-top: 2em;

    & .time-duration {
        color: var(--bg-clr-greyish);
        border-top: 1px solid #e9e2cf;
        border-bottom: 2px solid #e9e2cf;
        display: block;
        padding-block: 7px;
        /* font-weight: 500; */
    }

     @media (min-width: 50em) {
        & p {
            display: -webkit-box !important;
    -webkit-line-clamp: 4 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    }
     }
`;

const Title = styled.h2`
    text-transform: uppercase;
    color: var(--bg-clr-yellow);
    font-weight: bolder;
    font-size: var(--fs-500);
    line-height: 1.15;
    opacity: 0.9;
    width: min(36ch, 100%);
    display: -webkit-box !important;
-webkit-line-clamp: 2 !important;
-webkit-box-orient: vertical !important;
overflow: hidden !important;


`;


const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: .75rem;
    object-fit: cover;
    border: 5px solid var(--bg-clr-greyish);
    /* transform: rotate(-4deg) */
`;

const Button = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin-inline: auto;
    gap: 3rem;

`;

const Card = styled.div`
    @media (min-width: 30em) {
        padding-inline: 2rem;
    }
`;
export default LatestNews
