import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      //       [fetchContactsLoading]: store => {
      //         store.loading = true;
      //       },
      //       [fetchContactsSuccess]: (store, { payload }) => {
      //         store.loading = false;
      //         store.items = payload;
      //       },
      //       [fetchContactsError]: (store, { payload }) => {
      //         store.loading = false;
      //         store.error = payload;
      //       },

      .addCase(fetchAddContact.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })

      // [fetchAddContactLoading]: store => {
      //   store.loading = true;
      // },
      // [fetchAddContactSuccess]: (store, { payload }) => {
      //   store.loading = false;
      //   store.items.push(payload);
      // },
      // [fetchAddContactError]: (store, { payload }) => {
      //   store.loading = false;
      //   store.error = payload;
      // },

      .addCase(fetchDeleteContact.pending, store => {
        store.loading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
    //       [fetchDeleteContactLoading]: store => {
    //         store.loading = true;
    //       },
    //       [fetchDeleteContactSuccess]: (store, { payload }) => {
    //         store.loading = false;
    //         const index = store.items.findIndex(item => item.id === payload);
    //         store.items.splice(index, 1);
    //       },
    //       [fetchDeleteContactError]: (store, { payload }) => {
    //         store.loading = false;
    //         store.error = payload;
    //       },
  },
});
//     {
//       [fetchContactsLoading]: store => {
//         store.loading = true;
//       },
//       [fetchContactsSuccess]: (store, { payload }) => {
//         store.loading = false;
//         store.items = payload;
//       },
//       [fetchContactsError]: (store, { payload }) => {
//         store.loading = false;
//         store.error = payload;
//       },

//       [fetchAddContactLoading]: store => {
//         store.loading = true;
//       },
//       [fetchAddContactSuccess]: (store, { payload }) => {
//         store.loading = false;
//         store.items.push(payload);
//       },
//       [fetchAddContactError]: (store, { payload }) => {
//         store.loading = false;
//         store.error = payload;
//       },

//       [fetchDeleteContactLoading]: store => {
//         store.loading = true;
//       },
//       [fetchDeleteContactSuccess]: (store, { payload }) => {
//         store.loading = false;
//         const index = store.items.findIndex(item => item.id === payload);
//         store.items.splice(index, 1);
//       },
//       [fetchDeleteContactError]: (store, { payload }) => {
//         store.loading = false;
//         store.error = payload;
//       },
//     },
// });

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
