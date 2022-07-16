import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';

export const PublicApp = () =>{
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    )
};