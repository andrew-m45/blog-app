import './Signup.css'

export default function Signup() {
  return (
    <div className="user-signup form-container">
    <div className="header">
		  <h2>Sign Up</h2>
	  </div>
	  <form className="form">
		  <div class="form-control">
			  <label>Username</label>
			  <input type="text" placeholder="Enter username" required/>
		  </div>
      <div class="form-control">
        <label>Email</label>
        <input type="email" placeholder="example@mail.com" required/>
      </div>
      <div class="form-control">
        <label>Password</label>
        <input type="password" placeholder="Password" required/>
      </div>
      <button>Sign up</button>
	  </form>
  </div>
  )
}
