import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <h1 className="logo">BOOK CLUB</h1>
                <ul className="nav-links">
                    <li><Link to="/WelcomeScreen">Welcome Screen</Link></li>
                </ul>
                <div className="auth-buttons">
                    <Link to="/" className="login-button">SIGN IN</Link>
                    <Link to="/Signup" className="signup-button">SIGN UP</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;
