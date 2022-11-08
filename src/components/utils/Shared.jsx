import { css } from "styled-components";

export const activeButton = ({ theme, isDelete }) => css`
  border: ${theme.borders.small};
  border-color: ${theme.colors.grey};
  cursor: pointer;
  transition: background-color ${theme.transitions.normal},
    color ${theme.transitions.normal};
  box-shadow: ${theme.shadows.small};
  &:focus,
  &:hover {
    outline: none;
    background-color: ${isDelete ? theme.colors.warning : theme.colors.accentPrimary};
    color: ${theme.colors.dark};
  }
`;

export const interactiveInput = ({ theme }) => css`
  display: block;
  border-style: solid;
  outline: none;
  box-shadow: ${theme.shadows.inputInset};
  transition: border-color ${theme.transitions.normal};
  &:focus,
  &:active {
    border-color: ${theme.colors.accentPrimary};
  }
`;