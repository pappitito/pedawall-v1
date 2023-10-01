
import { RootState, AppDispatch } from '@/redux/store'
import React from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const useToolkit = () => {
  
    const useAppdispatch = () => useDispatch<AppDispatch>();
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
    const dispatch = useAppdispatch()
    return {
      dispatch,
      useAppSelector  
  }
}

export default useToolkit