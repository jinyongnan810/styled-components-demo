import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
    
    // nested styles
    h1 {
        color: goldenrod;
    }
    &:hover {
        background-color: #ebfeee;
    }
`