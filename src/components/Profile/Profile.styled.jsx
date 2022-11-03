import styled from 'styled-components';
import { css } from 'styled-components';


const primaryText = p => css`
  font-size: ${p.theme.fontSizes[3]}px;
  font-weight: ${p.theme.fontWeights.bold};

  color: ${p.theme.colors.dark};
`;
const secondText = p => css`
  font-size: ${p.theme.fontSizes[2]}px;
  font-weight: ${p.theme.fontWeights.medium};

  color: ${p.theme.colors.grey};
`;

export const AvatarUser = styled.img`
  display: block;
  margin: 0 auto;
  width: 50%;
  border-radius: ${p => p.theme.radius.round}; 
  
  background-color: ${p => p.theme.colors.backgroundAccent};
  `;

export const UserName = styled.p`
  ${primaryText};
  `;

export const UserLocation = styled.p`
  ${secondText};

  &:last-child {
    margin: 0 0 ${p => p.theme.space[4]}px;
  }
`;
export const UserTag  = styled.p`
  ${secondText};

  &:last-child {
     margin: 0 0 ${p => p.theme.space[4]}px;
  }
`;

export const StatsItem = styled.li`
  flex-shrink: 1;
  width: ${100 / 3}%;
  padding: ${p => p.theme.space[3]}px 0;
  list-style: none;

  background-color: ${p => p.theme.colors.backgroundLight};
  border-top: ${p => p.theme.borders.small};

  &:nth-of-type(2) {
    border-left: ${p => p.theme.borders.small};
    border-right: ${p => p.theme.borders.small};
  }
`;

export const StatsLabel = styled.span`
  ${secondText};
  display: block;
  margin: 0 0 ${p => p.theme.space[1]}px;
`;

export const StatsQuantity = styled.span`
  ${primaryText};
  display: block;
`;
