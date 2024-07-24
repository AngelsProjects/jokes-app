import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'

import { AppDispatch, AppStore, RootState } from './types'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = () => useStore<AppStore>()
