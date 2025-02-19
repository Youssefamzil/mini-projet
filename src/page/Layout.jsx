import { Link, Outlet } from "react-router-dom";
export default function Layout(){
    return ( 
        <>
    <nav>
    <ul className="nav justify-content-center bg-primary">
        <li className="nav-item">
            <Link to='/' className="nav-link text-light">Home</Link>
        
        </li>
        <li className="nav-item">
            <Link to='/Blog' className="nav-link text-light">Blog</Link>
        </li>
        <li className="nav-item">
            <Link to='/Contact' className="nav-link text-light">Contact</Link>
        </li>
    </ul>
    </nav>
    <div className="container-fluid w-75 mx-auto">
        <Outlet/>
    </div>
        </>
    );
}