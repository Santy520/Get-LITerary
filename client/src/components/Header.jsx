import { Link } from 'react-router-dom';
function Header() {


    return (
        <header>
            <nav>
                <h1 className='left'>Santiago Palacio</h1>

                <ul className='right'>
                    <Link className='link' to="/">Welcome Screen / </Link>
                    <Link className='link' to="/Discussion">Discussion Page</Link>

                </ul>


            </nav>
        </header>
    )
}

export default Header
