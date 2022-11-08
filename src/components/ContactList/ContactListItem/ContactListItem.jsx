import { PropTypes } from 'prop-types';
import { Box } from 'components/Box/Box.styled';
import { theme } from 'components/utils/Theme.styled';

import { ContactInfo, DeleteButton } from './ContactListItem.styled';

export function ContactListItem(props) {
  const {
    contactData: { name, number, id },
    onContactRemoveCallback,
  } = props;

  return (
    <Box
      mb={[2]}
      p={[2]}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border="small"
      borderRadius="big"
      borderColor="#00000039"
      style={{
        boxShadow: theme.shadows.inputInset,
      }}
      transition="box-shadow normal"
      as="li"
    >
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteButton onClick={() => onContactRemoveCallback(id)} isDelete={true}>
        Delete
      </DeleteButton>
    </Box>
  );
}

ContactListItem.propTypes = {
  contactData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onContactRemoveCallback: PropTypes.func.isRequired,
};