import { createContext } from 'react'

export const SectionContext = createContext(0)

// import React, { createContext, useContext, useState } from 'react'

// const DataContext = createContext()

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState('')

//   const sendDataToParent = (data) => {
//     setData(data)
//   }

//   return (
//     <DataContext.Provider value={{ data, sendDataToParent }}>
//       {children}
//     </DataContext.Provider>
//   )
// }

// export const useData = () => {
//   return useContext(DataContext)
// }
