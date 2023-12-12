import React, { useState,createContext } from 'react'


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({ loggedIn: false });

  return <AuthContext.Provider value={{user,setUser}} > {children} </AuthContext.Provider>
}

export default AuthContext
