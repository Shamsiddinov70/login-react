import {Routes, Route} from 'react-router-dom';
import { Dashboard } from "./pages/dashboard/dashboard";

export const PrivateApp = () =>{
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<>Private logini</>}/>
        </Routes>
    )
};