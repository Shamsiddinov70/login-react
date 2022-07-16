import {Link} from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <h1>Home page me</h1>
            <Link to="/login">Sign in</Link>
        </div>
    )
};