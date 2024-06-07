import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <Link to="/WelcomeScreen" className="logo">BOOK CLUB</Link>
                <ul className="nav-links">
                    {/* <li><Link to="/WelcomeScreen">Welcome Screen</Link></li> */}
                </ul>
                <div className="auth-buttons">
                    <Link to="/" className="login-button">SIGN IN</Link>
                    <Link to="/Signup" className="signup-button">SIGN UP</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
