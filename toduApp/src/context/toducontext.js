import { createContext, useContext } from "react";
  export const ToduContext = createContext({})

  export const useTodu = () =>{
    return useContext(ToduContext)
  }

  export const Toduprovider = ToduContext.Provider