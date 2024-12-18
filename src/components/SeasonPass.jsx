import React from 'react'
import styled from 'styled-components';
import Background from "../assets/FC6_SeasonPass_Keyart_desktop.avif"

const SeasonPass = () => {
    return (
        <>
            <Section>
                <Container className="container | padding-block-500 | flow" style={{ "--container-Align": "0 auto 0 auto", "--max-width": "1600px" }}>
                    <Content className="flow" style={{ "--flow-spacer": "2rem" }} data-device="desktop">
                        <h2 className='subSection_title'>Season Pass</h2>
                        <p>Embrace the Far Cry legacy and play as the villains with the FAR CRY® 6 Season Pass. In three separate DLC episodes, take control of Vaas Montenegro, Pagan Min and Joseph Seed (all played by the original cast) and fight to escape their twisted minds. In a second offering, travel back to the distant future of 2007 with the critically acclaimed FAR CRY® 3: Blood Dragon, now also on the newest generations of platforms.</p>
                        <button className='primary-button'>Learn More</button>
                    </Content>
                </Container>
            </Section>
            <Content className='flow' style={{ "--flow-spacer": "1rem" }} data-device="mobile">
                <h2 className='subSection_title'>Season Pass</h2>
                <p>Embrace the Far Cry legacy and play as the villains with the FAR CRY® 6 Season Pass. In three separate DLC episodes, take control of Vaas Montenegro, Pagan Min and Joseph Seed (all played by the original cast) and fight to escape their twisted minds. In a second offering, travel back to the distant future of 2007 with the critically acclaimed FAR CRY® 3: Blood Dragon, now also on the newest generations of platforms.</p>
                <button className='primary-button'>Learn More</button>
            </Content>
        </>
    )
}

const Section = styled.section`
position: relative;
background-image: url(${Background});
background-repeat: no-repeat;

    @media (min-width: 50em) {
        background-position: top;
    background-size: cover;
}

    @media (max-width: 50em) {
        padding-block: 10%;
        background-position: center;
        background-size: cover;
}
`;

const Container = styled.div`
`;

const Content = styled.div`
    padding: 2rem;
    background-color: var(--bg-lightBlack);

    & p {
        line-height: 1.4;
        letter-spacing: 1;
    }

    &[data-device="desktop"] p {
        font-weight: bolder;
    }

    @media (min-width: 50em) {
        display: inline-block;
        border-radius: 5px;

        & p {
        font-size: var(--fs-500);
        width: 40ch;
        line-height: 1.4;
        font-weight: bolder;
        letter-spacing: 1;
    }
    &[data-device="mobile"] {
            display: none;
        }

  }

    @media (max-width: 50em) {
        &[data-device="desktop"] {
            display: none;
        }
    }

`;

export default SeasonPass
