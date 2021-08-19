import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allCategory: null,
    allCategoryLoaded: false,
    hasError: false
}

const category = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setAllCategory(state, action){
            state.allCategory = action.payload;
        },
        setAllCategoryLoaded(state, action){
            state.allCategoryLoaded = action.payload
        },
        setHasError(state, action){
            state.hasError = action.payload
        }
    },
})

export const {
    setAllCategory,
    setAllCategoryLoaded,
    setHasError
} = category.actions
export default category.reducer;