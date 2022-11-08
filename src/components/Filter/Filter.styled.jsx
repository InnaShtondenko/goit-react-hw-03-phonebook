import styled from 'styled-components';
import { interactiveInput } from 'components/utils/Shared';

export const FilterLabel = styled.label`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  display: block;
  width: 75%;
  margin: 0 auto;
  margin-bottom: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radius.big};
  border-color: ${p => p.theme.colors.accentSecondary};
  transition: color ${p => p.theme.transitions.normal};

  &:focus-within {
    color: ${p => p.theme.colors.accentPrimary};
  }
`;

export const FilterInput = styled.input`
  ${interactiveInput};
  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.medium};
  width: ${p => p.theme.sizes.small};
  margin: 0 auto;
  margin-top: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radius.normal};
`;