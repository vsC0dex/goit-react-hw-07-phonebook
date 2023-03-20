import { useSelector } from 'react-redux';

import PhonebookList from 'components/PhonebookList/PhonebookList';
import PhonebookFilter from 'components/PhonebookFilter/PhonebookFilter';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';

import { Triangle } from 'react-loader-spinner';

import { isLoading, isError } from 'redux/contacts/contacts-selectors';
// import { getFilter } from 'redux/filter/filter-selectors';

// import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import styles from './phonebook.module.css';

const PhoneBook = () => {
  // const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(store => store.filter);
  const loading = useSelector(isLoading);
  const error = useSelector(isError);

  // const isFiltered = Boolean(filteredContacts.length);

  return (
    <div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Phonebook</h3>
        <div className={styles.block}>
          <PhonebookForm />
        </div>
        <h3 className={styles.title}>Contacts</h3>
        <div className={styles.block}>
          <PhonebookFilter value={filter} />
          <PhonebookList />
        </div>
      </div>
      {loading && !error && (
        <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          visible={true}
        />
      )}
    </div>
  );
};

export default PhoneBook;
