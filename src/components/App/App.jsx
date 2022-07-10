import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Contacts } from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { Form } from '../Form/Form';
import { Container, Title } from './App.styled';
import defaultContacts from '../data/contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    console.log('componentDidMount');
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
      return;
    }
    this.setState({ contacts: defaultContacts });
  }

  componentDidUpdate(_, prevState) {
    console.log('componentDidUpdate');
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFormSubmit = data => {
    const { name, number } = data;
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [{ name, number, id: nanoid() }, ...this.state.contacts],
    });
    return true;
  };

  handlerDeleteButton = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <Container>
        React homework template
        <Form onSubmit={this.handleFormSubmit} />
        <Title>Find contacts by name</Title>
        <Filter
          value={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
        <Title>Contacts</Title>
        <Contacts
          contacts={this.getVisibleContacts()}
          onDelete={this.handlerDeleteButton}
        />
      </Container>
    );
  }
}
