import { Box } from 'components/Box/Box.styled';
import {
    FriendStatus,
    FriendAvatarImg,
    FriendName,
} from './FriendListItem.styled';


export function FriendListItem({ friend: { avatar, name, isOnline, id } }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      mb={3}
      p={1}
      pl={3}
      borderRadius="5px"
      overflow="hidden"
      boxShadow="small"
      as="li"
    >
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatarImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Box>
  );
}