// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../Slices/counterSlice'

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })

import { createContext, useState } from "react";
import { useContext } from "react";

export const BalanceContext = createContext(null);

export const useBalance = ()=>{
  const  bals = useContext(BalanceContext);
  return bals;
} 

export const ContextProvider =(props)=>{
  const [deposite,setDeposite] = useState(0)
  return(
  <BalanceContext.Provider value={{deposite,setDeposite}}>
    {props.children}
  </BalanceContext.Provider>
  )
}
