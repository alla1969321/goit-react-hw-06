import { useContacts } from '../../hooks';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const getFilteredContacts = (contacts, filters) => {
  const normalizeSearch = filters.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeSearch)
  );
};

const ContactList = () => {
  const { contacts, filters } = useContacts();

  const filteredContacts = getFilteredContacts(contacts, filters);

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
      {filteredContacts.length === 0 && filters !== '' && (
        <p className={css.alterText}>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
