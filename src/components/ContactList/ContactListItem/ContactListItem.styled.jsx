import styled from 'styled-components';
import { activeButton } from 'components/utils/Shared'; 

export const ContactInfo = styled.div`
  font-size: 16px;
  font-weight: 500;
  display: block;
  max-width: 250px;
  margin-left: 5px;
  color: ${p => p.theme.colors.dark};
  text-align: left;
  word-break: break-all;
`;

export const DeleteButton = styled.button`
  ${activeButton};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radius.normal};
  box-shadow: ${p => p.theme.shadows.buttonInset};
`;