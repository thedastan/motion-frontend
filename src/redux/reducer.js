import {  configureStore } from '@reduxjs/toolkit';
import auth from './reducers/auth';
import admin from './reducers/admin';
import category from './reducers/category';






const makeStore = () => {
    const store = configureStore({
        reducer: {
            auth,
            admin,
            category
        },
    });
    return store;
}


export default makeStore();