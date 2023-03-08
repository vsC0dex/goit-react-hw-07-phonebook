import * as api from '../../shared/services/contacts-api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.messege);
    }
  }
);

// export const fetchContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchContactsLoading());

//       const data = await api.getContacts();

//       dispatch(actions.fetchContactsSuccess(data));
//     } catch ({ response }) {
//       dispatch(actions.fetchContactsError(response.data.messege));
//     }
//   };
//   return func;
// };

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.messege);
    }
  }
);

// export const fetchAddContact = data => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchAddContactLoading());
//       const result = await api.addContact(data);
//       dispatch(actions.fetchAddContactSuccess(result));
//     } catch ({ response }) {
//       dispatch(actions.fetchAddContactError(response.data.messege));
//     }
//   };
//   return func;
// };

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.messege);
    }
  }
);

// export const fetchDeleteContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchDeleteContactLoading());
//       await api.deleteContact(id);
//       dispatch(actions.fetchDeleteContactSuccess(id));
//     } catch ({ response }) {
//       dispatch(actions.fetchDeleteContactError(response.data.messege));
//     }
//   };
//   return func;
// };
