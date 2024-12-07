import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import BgOne from "../assets/banner-webasset.avif";
import LightBgOne from "../assets/banner-background_alt.avif";
import BgTwo from "../assets/newspaper-background.avif";
import LightBgTwo from "../assets/newspaper-background_alt.avif";
import BgThree from "../assets/FC6_Comeback_HiRez_Dani_Female_Final.avif";
import LightBgThree from "../assets/FC6_Comeback_HiRez_Dani_Male_Final.avif";

const Sample = () => {
    return (
        <>
            <Parallax bgImage={BgOne} strength={0}>
                <Section>
                    <Content>
                        <Title data-musk="appear">Trust your leader</Title>
                        <Information>As the leaders of Yara, my son Diego and I will restore this nation back to its former glory</Information>
                    </Content>
                </Section>
            </Parallax>

            <Parallax bgImage={LightBgOne} strength={500} >
                <Section>
                    <Content>
                        <Title data-musk="appear">Beware of the dictator</Title>
                        <Information>Anton will even sacrifice his own people to forge his paradise. DO NOT TRUST HIM.</Information>
                    </Content>
                </Section>
            </Parallax>

            <Parallax bgImage={BgTwo} strength={500}>
                <Section>
                    <Content>
                        <Title data-musk="appear">GUERRILLA FIGHTERS DESTROY CAPITOL</Title>
                        <Information>Dani Rojas and his band of guerillas are traitors to our great country</Information>
                    </Content>
                </Section>
            </Parallax>

            <Parallax bgImage={LightBgTwo} strength={500}>
                <Section>
                    <Content>
                        <Title data-musk="appear">GUERRILLA FIGHTERS DEFEND FREEDOM</Title>
                        <Information>We fight to liberate our nation from the oppression of a ruthless tyrant.</Information>
                    </Content>
                </Section>
            </Parallax>

            <Parallax bgImage={BgThree} strength={500}>
                <Section>
                    <Content>
                        <Title data-musk="appear">MEET DANI ROJAS</Title>
                        <Information>Growing up in Yara, Dani has experienced the brutality of Antón's rule firsthand. After barely escaping the regime forces with her life, she joins forces with Libertad, a rag tag group of guerrilla fighters, to liberate her home from Antón's grip and corrupt regime..</Information>
                    </Content>
                </Section>
            </Parallax>

            <Parallax bgImage={LightBgThree} strength={500}>
                <Section>
                    <Content>
                        <Title data-musk="appear">MEET DANI ROJAS</Title>
                        <Information>Growing up in Yara, Dani has experienced the brutality of Antón's rule firsthand. After barely escaping the regime forces with his life, he joins forces with Libertad, a rag tag group of guerrilla fighters, to liberate his home from Antón's grip and corrupt regime.</Information>
                    </Content>
                </Section>
            </Parallax>
        </>
    );
};

const Section = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 50em) {
        height: 100vh;
    }
`;

const Content = styled.div`
    position: absolute;
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
        letter-spacing: 0.03rem;
        line-height: 1.25rem;
        margin-top: 1rem;
    }
`;

export default Sample;
