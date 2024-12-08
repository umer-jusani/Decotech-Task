import React from 'react'
import styled from 'styled-components';
import FooterLogo from "../../assets/ubiSoftLogo.svg"
import Main from './Main';

const Footer = () => {
    return (
        <section>
            <Wrapper className='footer'>
                <div>
                    <div>
                        {/* Logo */}
                        <Logo>
                            <img src={FooterLogo} alt="Logo" />
                        </Logo>
                        <ul className="flow" style={{ "--flow-spacer": "3px" }} role='services&support'>
                            <li>Store</li>
                            <li>Ubisoft connect</li>
                            <li>company</li>
                            <li>news</li>
                            <li>support</li>
                        </ul>

                        <ul role='policies' className="flow" style={{ "--flow-spacer": "5px" }}>
                            <li>privacy</li>
                            <li>terms of use</li>
                            <li>legal info</li>
                            <li>set cookies</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <Main />
                </div>
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  color: var(--f-clr-white);
  letter-spacing: 1px;
   

  @media (max-width: 70em) {
      grid-template-columns: 1fr;
      & > div:nth-child(1) {
          order: 2;
      }
      & > div:nth-child(2) {
          order: 1;
      }
  }
`;

const Logo = styled.div`
    @media (max-width: 50em) {
        width: 12rem;
  } 

  & > img {
    width: 100%;
    height: auto;
  }
`;

export default Footer
