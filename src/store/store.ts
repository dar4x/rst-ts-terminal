import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { branchesReducer } from './features/branchesSlice';

const store = configureStore({
  reducer: {
    branches: branchesReducer,
    // Другие редюсеры, если есть
  },
});

// Тип корневого состояния Redux
export type RootState = ReturnType<typeof store.getState>;

// Тип для действий (actions)
export type AppDispatch = typeof store.dispatch;

// Хук для useDispatch с типизацией действий
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Хук для useSelector с типизацией состояния
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
