import styled, { css } from "styled-components";

interface ButtonContainerProps {
    variant: 'primary' | 'secondary'
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 50px;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    
    /* ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]}
        `
    }} */
`