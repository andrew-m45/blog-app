import './Navbar.css'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div className="navbar">
        <Link to="/" className='navbar-title'><h2>MMA<span className='title-secondary'>FEED</span></h2></Link>
      <div className="action-links">
        <div className='dropdown'>
          <button className='dropdown-btn'>
            <span className='user-action'>
              User <MdOutlineKeyboardArrowDown className='icon'/>
            </span>
            <div className="dropdown-content">
                <Link to="/signup">Sign up</Link>
                <Link to="/login">Log in</Link>
            </div>
          </button>
        </div>
        <button>Logout</button>
        <Link to="/create"><button>Create Post</button></Link>
      </div>
      </div>
    </div>
  )
}
