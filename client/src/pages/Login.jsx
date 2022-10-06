import './Login.css'
import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../context/authContext'

export default function Login() {
  // holds input field values
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  })
  // holds server response
  const [error, setError] = useState(null)
  // redirect
  const history = useHistory()

  // extract login function from conxtext
  const { login } = useContext(AuthContext)

  // update userDetails object on change
  const handleInputChange = (e) => {
    setUserDetails(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // send request to auth route
    try {
      await login(userDetails)
      // redirect to login page
      setTimeout(() => {
        history.push('/')
      }, 3000)
      setError(null);
    } catch (err) {
      setError(err.response.data.msg)
    }
  }

  return (
  <div className="user-login form-container">
    <div className="header">
		  <h2>Log In</h2>
	  </div>
	  <form className="form">
		  <div className="form-control">
			  <label>Username</label>
			  <input 
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleInputChange}
          required
        />
		  </div>
      <div className="form-control">
        <label>Password</label>
        <input 
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          required
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
      {error && <p style={{textAlign: "center", marginTop: "15px", color: "salmon"}}>{error}</p>}
	  </form>
  </div>
  )
}
