import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledHeaderContainer = styled.div`
  background-color: #333;
  color: #fff;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 768px) {
    height: auto; 
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;


const Header = () => {
    return(
        <StyledHeaderContainer className="header">
            <nav>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </StyledHeaderContainer>
    )
}

export default Header