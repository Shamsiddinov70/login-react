import {useNavigate} from 'react-router-dom';
import { useRef } from "react";
import { Input } from "../../components/input/input";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
    const navigate = useNavigate();
    const [, setToken] = useAuth();

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const subdomainRef = useRef(null);

    const handleLogin = async (e) => {
        e.preventDefault()

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Cookie", "PHPSESSID=sed8mdijad6vaimfurk1961nq8");

        var urlencoded = new URLSearchParams();
        urlencoded.append("_username", usernameRef.current.value);
        urlencoded.append("_password", passwordRef.current.value);
        urlencoded.append("_subdomain", subdomainRef.current.value);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        const res = await fetch("https://toko.ox-sys.com/security/auth_check", requestOptions)

        if (res.ok) {
            const data = await res.json();
            navigate('/')
            return setToken(data);
        }
        usernameRef.current.value = null;
        passwordRef.current.value = null;
        subdomainRef.current.value = null;

        usernameRef.current.className = 'form-control is-invalid text-center my-3';
        passwordRef.current.className = 'form-control is-invalid text-center my-3';
        subdomainRef.current.className = 'form-control is-invalid text-center my-3';
    }

    return (
        <div>
            <form onSubmit={handleLogin} className="w-25 mx-auto my-5 border p-5 shadow rounded">
                <Input ref={usernameRef} id="username" placeholder="username" type="text">Username</Input>
                <Input ref={passwordRef} id="password" placeholder="password" type="password">Password</Input>
                <Input ref={subdomainRef} id="subdomain" placeholder="subdomain" type="text">Subdomain</Input>

                <button type="submit" className="btn btn-success mt-4 w-100">Login</button>
            </form>
        </div>
    )
};