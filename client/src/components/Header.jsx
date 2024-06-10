import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../utils/auth';

function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const isLoggedIn = await AuthService.loggedIn();
                setLoggedIn(isLoggedIn);
            } catch (error) {
                console.error('Error checking login status:', error.message);
                setLoggedIn(false);
            }
        };
        checkLoggedIn();
    }, []);

    const handleLogout = () => {
        AuthService.logout();
        setLoggedIn(false);
        navigate('/'); // Redirect to sign-in page
    };

    return (
        <header>
              <nav className="navbar">
                <div className="logo">GetLITerary</div> 
                <ul className="nav-links">
                    {/* <li><Link to="/WelcomeScreen">Welcome Screen</Link></li> */}
                </ul>
                <div className="auth-buttons">
                    {loggedIn ? (
                        <button onClick={handleLogout} className="logout-button">SIGN OUT</button>
                    ) : (
                        <>
                            <Link to="/" className="login-button">SIGN IN</Link>
                            <Link to="/Signup" className="signup-button">SIGN UP</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;

