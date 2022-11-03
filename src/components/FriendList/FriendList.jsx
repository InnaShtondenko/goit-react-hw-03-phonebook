import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box.styled';
import { FriendListItem } from './FriendListItem';

export function FriendList({ friends }) {
  return (
    <Box mr="auto" ml="auto" mt={4} mb={-3} pl={3} width="cardSmall" as="ul">
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id}></FriendListItem>
      ))}
    </Box>
  );
}



FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};