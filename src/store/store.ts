import { configureStore } from '@reduxjs/toolkit';
import { BranchesSlice } from './features/branchesSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
    reducer: {
        branches: BranchesSlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;