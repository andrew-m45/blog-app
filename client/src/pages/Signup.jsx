import './Signup.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
  // holds input field values
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  // holds server response
  const [error, setError] = useState(null)
  // redirect
  const history = useHistory()

  // update userDetails object on change
  const handleInputChange = (e) => {
    setUserDetails(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // send request to auth route
    try {
      await axios.post('/auth/signup', userDetails)
      // redirect to login page
      setTimeout(() => {
        history.push('/login')
      }, 3000)
      setError(null);
    } catch (err) {
      console.log(err)
      setError(err.response.data.msg)
    }
  }

  return (
    <div className="user-signup form-container">
    <div className="header">
		  <h2>Sign Up</h2>
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
        <label>Email</label>
        <input 
          type="email" 
          name="email"
          placeholder="example@mail.com"
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
      <button onClick={handleSubmit}>Sign up</button>
      {error && <p style={{textAlign: "center", marginTop: "15px", color: "salmon"}}>{error}</p>}
	  </form>
  </div>
  )
}
