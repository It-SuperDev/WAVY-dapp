import { createSlice } from '@reduxjs/toolkit';
import { CURRENCY, LANGUAGE } from 'config/constants/demo';

const initialState = {
    currency: CURRENCY[1],
    language: LANGUAGE[1],
    connect: null
};

export const networkSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        changeCurrency: (state, action) => {
            state.currency = action.payload;
        },
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
        changeConnect: (state, action) => {
            state.connect = action.payload;
        }
    }
});

export const { changeCurrency, changeConnect, changeLanguage } = networkSlice.actions;

export default networkSlice.reducer;
