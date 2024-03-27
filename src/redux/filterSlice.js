import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterValue: '',
  },
  reducers: {
    setFilter: {
      reducer: (state, action) => {
        state.filterValue = action.payload;
      },

      prepare: filterValue => {
        return {
          payload: filterValue,
        };
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
