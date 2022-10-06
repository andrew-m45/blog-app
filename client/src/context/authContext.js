import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  // holds user in session & checks local storage for user
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

  const login = async (user) => {
    const res = await axios.post('/auth/login', user)
    // set userDetails from API to user state
    setCurrentUser(res.data.userDetails)
  }

  const logout = (user) => {
    axios.post('/auth/logout', user)
    // clear user
    setCurrentUser(null)
  }

  // invoke when changes occur to current user state
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return <AuthContext.Provider value={{
    currentUser,
    login,
    logout
  }}>
    {children}
  </AuthContext.Provider>
}