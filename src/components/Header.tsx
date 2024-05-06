import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { StyledHeaderContainer, StyledNavContainer, StyledLogo } from './HeaderStyles'

const Header = () => {
    return(
        <StyledHeaderContainer className="header">
            <StyledLogo to="/">υ´• ﻌ •`υ ?</StyledLogo>
            <StyledNavContainer>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/about">About</Link>
                </div>
            </StyledNavContainer>
        </StyledHeaderContainer>
    )
}

export default Header