import React from 'react'
import styled from 'styled-components';
import BgOne from "../assets/banner-webasset.avif";
import LightBgOne from "../assets/banner-background_alt.avif";
import BgTwo from "../assets/newspaper-background.avif";
import LightBgTwo from "../assets/newspaper-background_alt.avif";
import BgThree from "../assets/FC6_Comeback_HiRez_Dani_Female_Final.avif";
import LightBgThree from "../assets/FC6_Comeback_HiRez_Dani_Male_Final.avif";
import titleMusk from "../assets/titlemusk.png";

const Parellell = () => {
    return (
        <>
            <Section className='parellell' style={{ "--image": `url(${BgOne})` }}>
                <Content>
                    <Title data-musk="appear">Trust your leader</Title>
                    <Information>As the leaders of Yara, my son Diego and I will restore this nation back to its former glory</Information>
                </Content>
            </Section>

            <Section className='parellell' style={{ "--image": `url(${LightBgOne})` }}>
                <Content>
                    <Title data-musk="appear">Beware of the dictator</Title>
                    <Information>Anton will even sacrifice his own people to forge his paradise. DO NOT TRUST HIM.</Information>
                </Content>
            </Section>

            <Section className='parellell' style={{ "--image": `url(${BgTwo})`, "--placement": "25% 0 0 9%" }}>
                <Content>
                    <Title data-musk="appear">GUERRILLA FIGHTERS DESTROY CAPITOL</Title>
                    <Information>Dani Rojas and his band of guerillas are traitors to our great country</Information>
                </Content>
            </Section>

            <Section className='parellell' style={{ "--image": `url(${LightBgTwo})`, "--placement": "25% 0 0 9%" }}>
                <Content>
                    <Title data-musk="appear">GUERRILLA FIGHTERS DEFEND FREEDOM</Title>
                    <Information>We fight to liberate our nation from the oppression of a ruthless tyrant.</Information>
                </Content>
            </Section>

            <Section className='parellell' style={{ "--image": `url(${BgThree})` }}>
                <Content>
                    <Title data-musk="appear">MEET DANI ROJAS</Title>
                    <Information>Growing up in Yara, Dani has experienced the brutality of Antón's rule firsthand. After barely escaping the regime forces with her life, she joins forces with Libertad, a rag tag group of guerrilla fighters, to liberate her home from Antón's grip and corrupt regime..</Information>
                </Content>
            </Section>
            <Section className='parellell' style={{ "--image": `url(${LightBgThree})` }}>
                <Content>
                    <Title data-musk="appear">MEET DANI ROJAS</Title>
                    <Information>Growing up in Yara, Dani has experienced the brutality of Antón's rule firsthand. After barely escaping the regime forces with his life, he joins forces with Libertad, a rag tag group of guerrilla fighters, to liberate his home from Antón's grip and corrupt regime.</Information>
                </Content>
            </Section>
        </>
    )
}

const Section = styled.section`
    width: 100%;
    height: 60vh;
    background: var(--image);  
    background-size: cover;
    background-position: center;
    position: relative;

    @media (min-width: 50em) {
        height: 100vh;
        }
`;

const Content = styled.div`
    position: absolute;
    /* height: 100%; */
    color: white;
    padding: 20px;
    inset: 50% 0 15% 0;
     

    @media (min-width: 50em) {
        inset: var(--placement, 25% 0 0 50%);
        }
`;

const Title = styled.h2`
  display: inline;
  padding: 7px;
  font-weight: bold;
  background-color: var(--bg-clr-yellow);
  color: var(--bg-lightBlack);
  text-transform: uppercase;
  word-spacing: 0.5px;
  letter-spacing: -1.5px;
  font-size: var(--fs-700);
  position: relative;
  @media (max-width: 50em) {
    font-size: var(--fs-500);
        }
  
`;

const Information = styled.p`
    font-weight: 500;
    font-size: var(--fs-400);
    word-spacing: 2px;
    letter-spacing: 0.9px;
  line-height: 1.2;
  color: var(--bg-clr-greyish);
  margin-top: 2rem;
  max-width: 75ch;

  @media (max-width: 50em) {
    letter-spacing: .03rem;
    line-height: 1.25rem;
    margin-top: 1rem;
        }
`;


export default Parellell;
// //  &::after {
//     content: "";
//     position: absolute;
//     top: -7%;
//     right: 10px;
//     width: 298px;
//     height: 13%;
//     background: var(--bg-clr-yellow);

//     -webkit-mask-image: url(${titleMusk}); /* Use the imported variable */
//     -webkit-mask-size: cover;
//     -webkit-mask-repeat: repeat-x;
//     -webkit-mask-position: center;
//     mask-image: url(${titleMusk});
//     mask-size: cover;
//     mask-repeat: repeat-x;
//     mask-position: center;

//     animation: reveal 2s ease-out forwards;
//     z-index: 1;
//   }

//   @keyframes reveal {
//     from {
//       opacity: 0;
//       transform: translateY(10px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }