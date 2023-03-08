import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6405fafd40597b65de46fa69.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
