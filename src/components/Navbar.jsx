import { Link } from 'react-router-dom'
// Icons
import { FaPlus, FaBookOpen } from 'react-icons/fa';
// CSS
import './css/navbar.css'

export const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-section">
                    <h1>E-Books</h1>
                    <div className="links">
                        <Link to='/books' className='link link-1'><FaBookOpen />Books</Link>
                        <Link to='/' className='link link-2'><FaPlus / >Add Book</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}