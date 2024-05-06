import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 60px 0;
  text-align: center;
`;

const Footer = () => {
    return(
        <FooterContainer className="footer">
            &copy; PetsPets. All rights reserved.
        </FooterContainer>
    )
}

export default Footer