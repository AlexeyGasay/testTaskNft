import catalogSlice from './reducers/catalogSlice';
import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  catalogReucer: catalogSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];