import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import {
  fetchContacts,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';
// import { deleteContact } from 'redux/contacts/contacts-slice';

import styles from './phonebook-list.module.css';

const PhonebookList = () => {
  // const contacts = useSelector(store => store.contacts);
  // const filter = useSelector(store => store.filter);

  const contacts = useSelector(store => store.contacts.items);
  // const visibleContacts = useSelector(getFilterContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    // const action = deleteContact(id);
    // dispatch(action);
    dispatch(fetchDeleteContact(id));
  };

  // const filterContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const listContactsByFilter = filterContacts();

  const contact = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button onClick={() => handleDeleteContact(id)} className={styles.btn}>
        Delete
      </button>
    </li>
  ));
  return <ol className={styles.list}>{contact}</ol>;
};

export default PhonebookList;
