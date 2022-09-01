import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/Reducers/userSlice';
import appReducer from '../components/Reducers/appSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
