import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 Not Found</h2>

            <Link to="/practice-react-blog">Back to Homepage...</Link>
        </div>
     );
}
 
export default NotFound;