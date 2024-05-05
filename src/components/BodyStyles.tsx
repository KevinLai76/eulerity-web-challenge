import styled from "styled-components";

const StyledBodyContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`

const StyledFiltersContainer = styled.div`
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const StyledPetContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export { StyledBodyContainer, StyledFiltersContainer, StyledPetContainer }