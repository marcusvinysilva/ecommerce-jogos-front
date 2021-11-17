import React, {createContext, useState, useEffect} from 'react';
import { api } from '../api';
import history from '../history';
const Context = createContext();

function Authprovider({children}){
    const [authenticated, setAuthenticated] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
     const token = localStorage.getItem('token')
    
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
        setAuthenticated(true);
    }

    setLoading(true);
    
    },[]);

    async function handleLogin(){
        const {data: {token}} = await api.post('/auth/signin')

        localStorage.setItem('token',JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true)
        history.push('/userpage');
    }

    async function handleLogout(){
        setAuthenticated(false)
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/')
        
    }
 return(
     <Context.Provider value={{ authenticated, handleLogin, handleLogout}}>
         {children}
     </Context.Provider>
 )
}


export {Context, Authprovider};