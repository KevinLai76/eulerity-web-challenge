import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
    position: relative;
    width: calc(33.33% - 20px);
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5%;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const StyledCheckBox = styled.input`
    position: absolute;
    top: 5px;
    right: 5px;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
`;


export { StyledDiv, StyledCheckBox, StyledImg, StyledLink }