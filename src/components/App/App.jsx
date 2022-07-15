import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { Form } from '../Form/Form';
import { Container, Title } from './App.styled';
import defaultContacts from '../data/contacts';
import useLocalStorage from 'components/customHooks/useLocalStorage';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  function handleFormSubmit(data) {
    const { name, number } = data;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts([{ name, number, id: nanoid() }, ...contacts]);
    return true;
  }

  function handlerDeleteButton(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  function getVisibleContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <Container>
      React homework template
      <Form onSubmit={handleFormSubmit} />
      <Title>Find contacts by name</Title>
      <Filter value={filter} onFilterChange={handleFilterChange} />
      <Title>Contacts</Title>
      <Contacts
        contacts={getVisibleContacts()}
        onDelete={handlerDeleteButton}
      />
    </Container>
  );
}
