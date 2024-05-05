import styled from "styled-components";

const StyledBodyContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const StyledFiltersContainer = styled.div`
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledPetContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StyledSearchBar = styled.input`
    width: 100%;
    padding: 5px 10px;
    border: 2px solid gainsboro;
    border-radius: 20px;
    font-size: 14px;
    margin-top: 10px;
`;

const StyledCheckout = styled.p`
    font-size: 12px;
    text-align: end;
    margin-right: 5px;
    margin-top: 10px;

    @media (max-width: 768px) {
        font-size: 12px
    }
`;

const StyledDropDown = styled.select`
    padding: 5px;
    border: 2px solid gainsboro;
    border-radius: 20px;
    font-size: 12px;
    color: gray;
    margin-left: 5px;
    margin-top: 10px;
    
    &:hover {
        border-color: #999;
      }    
`;

export { StyledBodyContainer, StyledFiltersContainer, StyledPetContainer, StyledSearchBar, StyledCheckout, StyledDropDown }