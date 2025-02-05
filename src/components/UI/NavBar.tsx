import { Link } from 'react-router-dom';
export const NavBar = () => {
    return <>
        <nav className="navbar">
            <div>
                <Link className="nav-item" to="/timers">Timers</Link>
                <Link className="nav-item" to="/context">Goals Context</Link>
                <Link className="nav-item" to="/redux">Goals Redux</Link>
            </div>
        </nav>
    </>
}