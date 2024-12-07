import React from 'react'
import styled from 'styled-components'
import Characters from "../assets/Characters.avif"
import GearUp from "../assets/fc6_backpacks_gameplay.avif"
import Friend from "../assets/Friend.png"
import Trailer from "../assets/Trailer.avif"
import Background from "../assets/bg-gameplay-overview.jpeg"

const GameOverView = () => {
    return (
        <Section className='Overview'>
            <div className='container' style={{ "--container-Align": "0 auto 0 auto", "--max-width": "1500px" }}>
                <Wrapper>
                    <h2 className='subSection_title'>GAMEPLAY OVERVIEW</h2>

                    <CardContainer>
                    </CardContainer>
                </Wrapper>
            </div>
        </Section>
    )
}


const Section = styled.section`
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
`

const Wrapper = styled.div`
    gap: 2rem;
`

const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
`

export default GameOverView
