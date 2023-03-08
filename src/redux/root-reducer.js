import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import contactsReducer from './contacts/contacts-slice';
// import filterReducer from './filter/filter-slice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: 'filter',
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;
