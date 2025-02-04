import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        user: ''
    },
    reducers: {},
    extraReducers: {}
});

export default authReducer.reducer;
