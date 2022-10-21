import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <Link to="/practice-react-blog/">Home</Link>
                <Link to="/practice-react-blog/create">Create</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
