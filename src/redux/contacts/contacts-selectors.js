// export const getContacts = store => store.contacts;

export const getFilteredContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }

  const normilizedFilter = filter.toLowerCase();

  const result = items.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normilizedFilter) ||
      number.toLowerCase().includes(normilizedFilter)
    );
  });
  console.log(result);
  return result;
};
