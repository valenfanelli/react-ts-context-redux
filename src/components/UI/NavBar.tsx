import { Link, useLocation } from 'react-router-dom';
export const NavBar = () => {
    const location = useLocation(); // Gets the current route
    return <>
        <nav className="navbar">
            <div>
                {location.pathname !== "/" && <Link className="nav-item" to="/">Home</Link>}
                <Link className="nav-item" to="/timers">Timers</Link>
                <Link className="nav-item" to="/context">Goals Context</Link>
                <Link className="nav-item" to="/redux">Goals Redux</Link>
            </div>
        </nav>
    </>
}