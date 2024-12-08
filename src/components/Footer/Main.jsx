import React from 'react'
import styled from 'styled-components';
import Logo from '../../assets/logo.avif';
import Alert from '../../assets/pegi18-white.avif';

const Main = () => {
    return (
        <Container>
            <FarCry>
                <img src={Logo} alt="" />
            </FarCry>

            <Sources>
                <ul>
                    <li>Studios</li>
                    <li>Ubisoft Toronto</li>
                </ul>
                <ul>
                    <li>Platforms</li>
                    <li>xbox series x|s</li>
                    <li>xbox one</li>
                    <li>playstation 5</li>
                    <li>playstation 4</li>
                    <li>ubisoft connect</li>
                    <li>amazon luna</li>
                </ul>
                <ul>
                    <li>Partners</li>
                    <li>amd</li>
                    <li>msi</li>
                    <li>corsair</li>
                    <li>tobi</li>
                    <li>geforcenow</li>
                </ul>
            </Sources>

            <Guide className='flow' style={{ "--flow-spacer": "1em" }}>
                <h5>For more information, check out the</h5>
                <span>UBISOFT PARENT GUIDE</span>
                <img src={Alert} alt="" />
            </Guide>


            <CopyRight>
                <p>© 2020 Ubisoft Entertainment. All Rights Reserved. Far Cry, Ubisoft and the Ubisoft logo are registered or unregistered trademarks of Ubisoft Entertainment in the U.S. and/or other countries.</p>
            </CopyRight>
        </Container>
    )
}

const Container = styled.div`
    padding: 3rem;
    letter-spacing: normal;
    display: flex;
    flex-direction: column;
    gap: 3rem;
   
    @media (max-width: 50em) {
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         gap: 3rem;
  }
`;


const Sources = styled.div`
    display: inline-flex;
    /* flex-wrap: wrap; */
    gap: 4rem;

     @media (min-width: 70em) {
        gap: 6rem;
    }

    @media (max-width: 50em) {
        display: inline-grid;
        margin-inline: auto;
        text-align: center;
        gap: 2rem;
    }

 & ul li {
   font-size: var(--fs-550);
 }

 & ul li:first-child {
   font-size: var(--fs-400);
   font-weight: 300;
   padding-bottom: 5px;
 }
`;

const Guide = styled.div`
    width: fit-content;
    font-size: var(--fs-200);
    text-align: center;

          @media (min-width: 50em) {
            margin-left: auto;
    }


    & span {
        font-weight: bold;
        text-decoration: underline;
    }

    & img {
        margin-inline: auto;
    }
`;


const CopyRight = styled.div`
    & p {
        font-size: var(--fs-200);
        font-weight: 400;
        margin-inline: auto;
        text-align: center;

    
    }

`;


const FarCry = styled.div`
    @media (max-width: 50em) {
    display: flex;
    justify-content: center;
    align-items: center;
    }
`;


export default Main
