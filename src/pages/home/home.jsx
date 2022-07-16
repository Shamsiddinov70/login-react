import {Link} from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <h1 className='my-5 ms-5'>Welcome,Home page</h1>
            <Link className='link border rounded-3' to="/login">Sign in</Link>
        </div>
    )
};