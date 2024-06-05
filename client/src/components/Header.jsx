import { Link } from 'react-router-dom';
function Header() {


    return (
        <header>
            <nav>
                <h1 className='left'>Book Club</h1>

                <ul className='right'>
                    <Link className='link' to="/">Welcome Screen / </Link>
                    <Link className='link' to="/Discussion">Discussion Page / </Link>
                    <Link className='link' to="/Topic">Topic Page / </Link>
                    <Link className='link' to="/Login">Login</Link>

                </ul>


            </nav>
        </header>
    )
}

export default Header

