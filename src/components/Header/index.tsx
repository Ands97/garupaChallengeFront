import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './header.css';
export const Header = ()=>{
    const api = useContext(AuthContext);

    const [name, setName] = useState(api.user?.name)

    const handleSignOut = () => {
        api.signout()
    }

    return (
        <header className='header'>
            <h1>Hi, {name}!</h1>
            <nav className='menu'>
                <div onClick={handleSignOut}>Logout</div>
            </nav>
        </header>
    )
}