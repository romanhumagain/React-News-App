import { createContext, useContext, useState } from "react";

const searchContext = createContext()

export const useSearch = ()=>{
  return useContext(searchContext)
}

export const SearchProvider = ({children})=>{
  const[searchText, setSearchText] = useState("")

  const context_data = {
    searchText:searchText,
    setSearchText:setSearchText
    }

  return(
    <searchContext.Provider value = {context_data}>
      {children}
    </searchContext.Provider>
  )
}