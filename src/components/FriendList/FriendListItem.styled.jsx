import styled from 'styled-components';
// import { theme } from 'components/utils/Theme.styled';

export const FriendStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radius.round};
  background-color: ${p =>
    p.isOnline
      ? p.theme.colors.statusCode.green
      : p.theme.colors.statusCode.red};
`;

export const FriendAvatarImg = styled.img`
  display: block;
  margin-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radius.normal};
  background-color: ${p => p.theme.colors.backgroundAccent};
`;

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
`;