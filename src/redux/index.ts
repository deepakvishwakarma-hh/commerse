
import cart from "./cart"
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers } from "@reduxjs/toolkit"
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage: storage,
}


export const rootReducers = combineReducers({ cart, })

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer: persistedReducer, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
//hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector