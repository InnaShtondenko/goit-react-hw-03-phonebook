import { PropTypes } from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { ContactsList } from './ContactList.styled';


export function ContactList(props) {
  const { contacts, onContactRemoveCallback } = props;

  return (
    <ContactsList>
      {contacts.map(contactData => (
        <ContactListItem
          key={contactData.id}
          contactData={contactData}
          onContactRemoveCallback={onContactRemoveCallback}
        />
      ))}
    </ContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onContactRemoveCallback: PropTypes.func.isRequired,
};