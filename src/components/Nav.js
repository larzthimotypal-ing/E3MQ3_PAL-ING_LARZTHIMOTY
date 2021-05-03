import {Link} from 'react-router-dom'

const Nav = ({user}) => {

    const showAlert = () => (alert(`Hello! ${user}`))
    return (
        <nav>
            <ul className="nav-links">
                <Link to='/' className='link'>
                    <li>Home</li>
                </Link>
                <Link to='/about' className='link'>
                    <li>About</li>
                </Link>
                <li className="user" onClick={showAlert}>
                    Hello! <span>{user}</span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
