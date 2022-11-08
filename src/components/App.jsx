import { Component } from 'react';
import { ThemeProvider } from 'styled-components'; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { theme } from './utils/Theme.styled';
import { Box } from './Box/Box.styled'; 
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      // {
      //   id: 'id-1',
      //   name: 'Rosie Simpson',
      //   number: '459-12-56'
      // },
      // {
      //   id: 'id-2',
      //   name: 'Hermione Kline',
      //   number: '443-89-12'
      // },
      // {
      //   id: 'id-3',
      //   name: 'Eden Clements',
      //   number: '645-17-79'
      // },
      // {
      //   id: 'id-4',
      //   name: 'Annie Copeland',
      //   number: '227-91-26'
      // },
    ],
    filter: '',
  };

  LS_KEY = 'contacts';

  componentDidMount() {
    let readFromLSContacts = null;

    try {
      readFromLSContacts = JSON.parse(localStorage.getItem(this.LS_KEY));
    } catch (error) {
      console.log(
        'There is occurred error while attempting to read data from local storage!'
      );
    }

    if (readFromLSContacts) this.setState({ contacts: readFromLSContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    let { contacts } = this.state;

    contacts !== prevState.contacts &&
      localStorage.setItem(this.LS_KEY, JSON.stringify(contacts));
  }

  onContactAdd = ({ name, number }) => {
    if (this.hasContactWithName(name)) {
      Notify.warning("Can't add already existing contact");
      return;
    }

    this.setState(prevState => {
      const normName = name.trim();
      const updatedContacts = [
        ...prevState.contacts,
        { name: normName, number, id: nanoid() },
      ];

      return {
        contacts: updatedContacts,
      };
    });
  };

  onRemoveContact = contactIdToRemove => {
    this.setState(prevState => {
      const updatedContacts = prevState.contacts.filter(
        ({ id }) => id !== contactIdToRemove
      );

      return {
        contacts: updatedContacts,
      };
    });
  };

  onContactsFiltering = filterValue => {
    this.setState({ filter: filterValue });
  };

  getFilteredContacts = filterString => {
    const { contacts } = this.state;
    const normalizedFilter = filterString.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  hasContactWithName = searchName => {
    const searchNameNormalized = searchName.trim().toLowerCase();

    return this.state.contacts.some(
      ({ name }) => name.toLowerCase() === searchNameNormalized
    );
  };

  render() {
    const {
      onContactAdd,
      onContactsFiltering,
      onRemoveContact,
      getFilteredContacts,
      state: { contacts, filter },
    } = this;

    const filteredContacts = filter ? getFilteredContacts(filter) : contacts;

    return (
      <ThemeProvider theme={theme}>
        <Box
          width="wide"
          m={[3]}
          p={[3]}
          textAlign="center"
          borderRadius="small"
          boxShadow="medium"
        >
          <Box margin="0 auto" color="textColor">
            <h1>Phonebook</h1>
            <ContactForm onSubmitCallback={onContactAdd} />

            <Box
              width={0.85}
              margin="0 auto"
              mt={[4]}
              borderColor="accentSecondary"
              color="textColorSecondary"
            >
              <h2>Contacts</h2>
              <Filter value={filter} onInputCallback={onContactsFiltering} />
              <ContactList
                contacts={filteredContacts}
                onContactRemoveCallback={onRemoveContact}
              />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
}