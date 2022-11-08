import { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
    AddContactButton,
    AddContactForm,
    InputInfoLabel,
    ContactInput,
} from './Form.styled'; 

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmitCallback: PropTypes.func.isRequired,
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmitCallback(this.state);

    e.currentTarget.reset();
  };

  onInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const {
      onInput,
      onSubmit,
      state: { name, number },
    } = this;

    return (
      <AddContactForm onSubmit={onSubmit}>
        <InputInfoLabel>
          Name
          <ContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoFocus
            onInput={onInput}
            value={name}
          ></ContactInput>
        </InputInfoLabel>
        <InputInfoLabel>
          Number
          <ContactInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onInput}
            value={number}
          ></ContactInput>
        </InputInfoLabel>
        <AddContactButton type="submit" cursor="cross">
          Add contact
        </AddContactButton>
      </AddContactForm>
    );
  }
}