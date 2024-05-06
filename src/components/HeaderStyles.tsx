import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeaderContainer = styled.div`
    background-color: #333;
    color: #fff;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      height: auto; 
      flex-direction: column;
      align-items: flex-start;
      padding: 10px;
    }
`;

const StyledNavContainer = styled.nav`
      display: flex;
      align-items: center;

      div {
        margin-left: 20px;
      }

      a {
        color: #fff;
        text-decoration: none;
        transition: color 0.3s ease;
        font-size: 18px;

        &:hover {
          color: #4a90e2; 
        }
      }
`;

const StyledLogo = styled(Link)`
    font-size: 32px;
    margin: 0;
    padding: 10px;
    border-radius: 5px;
    color: white;
    transition: transform 0.5s ease;
    text-decoration: none;

    &:hover {
      transform: rotate(-10deg);
    }
`;

export { StyledHeaderContainer, StyledNavContainer, StyledLogo }