import { useSelector } from 'react-redux';
import { selectContacts, selectFilters } from '../redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);

  return {
    contacts,
    filters,
  };
};
