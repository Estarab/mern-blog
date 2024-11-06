import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import themeReducer from './theme/themeSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,  // User will not persist
  theme: themeReducer, // Theme will persist
});

// Persist config for theme (user state will not persist)
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['theme'],  // Only persist the theme slice
};

// Create persisted reducer (user state won't be persisted)
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Create persistor to manage the persistence logic
export const persistor = persistStore(store);



// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import userReducer from './user/userSlice';
// import themeReducer from './theme/themeSlice';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({
//   user: userReducer,
//   theme: themeReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   version: 1,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export const persistor = persistStore(store);