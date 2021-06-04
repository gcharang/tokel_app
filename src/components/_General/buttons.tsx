import styled from '@emotion/styled';

import { Colors } from 'vars/defines';

type ButtonProps = {
  theme: string;
  customWidth?: string;
};

const getTheme = theme => {
  switch (theme) {
    case Colors.PURPLE:
      return `
        background: var(--gradient-purple-direct);
        border: none;
      `;
    case Colors.BLACK:
      return `
        background: var(--color-button-black-theme);
        border: 1px solid var(--color-lighterBlack);`;
    case Colors.TRANSPARENT:
      return `
        background: var(--color-almostBlack);
        border: 1px solid var(--color-lighterBlack);`;
    case Colors.PURPLEBORDER:
      return `
        background: var(--color-almostBlack);
        border: 1px solid var(--color-purple);
      `;
    default:
      // gray theme
      return `
        background: var(--gradient-gray);
        border: none;
      `;
  }
};

export const Button = styled.button<ButtonProps>`
  width: ${props => props.customWidth || '240px'};
  height: 40px;
  ${props => getTheme(props.theme)};
  border-radius: var(--border-radius);
  color: var(--color-white);
  font-size: 14px;
  font-weight: 400;
  &:focus {
    outline: none;
  }
  &:hover {
    background: var(--gradient-purple-direct);
  }
`;

export const ButtonSmall = styled.button`
  border-radius: var(--border-radius);
  color: var(--color-white);
  font-size: 14px;
  font-weight: 400;
  padding: 4px 12px;
  ${props => getTheme(props.theme)};
  &:focus {
    outline: none;
  }
`;
