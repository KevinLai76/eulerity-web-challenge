import styled from "styled-components";

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

export {
    StyledContainer,
    StyledCard,
    StyledImage,
}
  