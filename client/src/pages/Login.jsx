import './Login.css'


export default function Login() {
  return (
  <div className="user-login form-container">
    <div className="header">
		  <h2>Log In</h2>
	  </div>
	  <form className="form">
		  <div class="form-control">
			  <label>Username</label>
			  <input type="text" placeholder="Enter username"/>
		  </div>
      <div class="form-control">
        <label>Password</label>
        <input type="password" placeholder="Password"/>
      </div>
      <button>Login</button>
	  </form>
  </div>
  )
}
