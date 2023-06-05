import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  variant: 'primary' | 'secondary'
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
