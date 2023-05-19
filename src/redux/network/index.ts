import { createSlice } from '@reduxjs/toolkit';
import { NETWORK } from 'config/constants/demo';

const initialState = NETWORK[0];

export const networkSlice = createSlice({
    name: 'network',
    initialState,
    reducers: {
        changeNet: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeNet } = networkSlice.actions;

export default networkSlice.reducer;
