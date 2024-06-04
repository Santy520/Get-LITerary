import { Link } from 'react-router-dom';
function Header() {


    return (
        <header>
            <nav>
                <h1 className='left'>Book Club</h1>

                <ul className='right'>
                    <Link className='link' to="/">Login / </Link>
                    <Link className='link' to="/WelcomeScreen">Welcome Screen / </Link>
                    <Link className='link' to="/Discussion">Discussion Page </Link>

                </ul>


            </nav>
        </header>
    )
}

export default Header
