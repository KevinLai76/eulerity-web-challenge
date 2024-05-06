import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
`;

const StyledCard = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
`;

export {
    StyledContainer,
    StyledCard,
    StyledImage,
    StyledLink
}
  