import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const musicListsSlice = createSlice({
  name: 'musicLists',
  initialState,
  reducers: {
    addMusicList: (state, action) => {
      return [...state, action.payload];
    },
    updateMusicList: (state, action) => {
      const { id, updatedArtist, updatedTitle, updatedDuration } = action.payload;
      const updatedState = state.map((item) =>
        item.id === id
          ? { ...item, artist: updatedArtist, title: updatedTitle, duration: updatedDuration }
          : item
      );
      return updatedState;
    },
    deleteMusicList: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addMusicList, updateMusicList, deleteMusicList } = musicListsSlice.actions;

export default musicListsSlice.reducer;

