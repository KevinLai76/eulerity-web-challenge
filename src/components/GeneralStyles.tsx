import styled from "styled-components";

const StyledName = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin 10px 0;
`;

const StyledDescription = styled.p`
    font-size: 16px;
    margin: 10px 0;
`;

const StyledButtonDownload = styled.button`
  background-color: lightblue;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 50px;
  cursor: pointer; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a90e2;
  }
`;

export const StyledButtonFilter = styled.button`
  width: 10%;
  background-color: white;
  border: 2px solid gainsboro;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;
  color: gray;
  border-radius: 50px;
  margin-right: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

export { StyledName, StyledDescription, StyledButtonDownload }