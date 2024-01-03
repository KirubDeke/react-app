import { configureStore } from '@reduxjs/toolkit';
import musicListsReducer from './reducers/musicListsReducer';

const store = configureStore({
  reducer: {
    musicLists: musicListsReducer,
    
  },
});

export default store;
