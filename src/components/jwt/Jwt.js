import React, {useState} from "react";

export const Jwt = ()=>{
    const [token, settoken] = useState(localStorage.getItem('token') || '');

    const handleLogin = async()=>{
        const responce = await fetch('https://example.com/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: 'user', password : 'password'}),
        });

        if(responce.ok){
            const data = await responce.json();
            const jwtToken = data.token;
            localStorage.setItem('token', jwtToken);
            settoken(jwtToken);
        }else{
            console.log('Login failed');
        }
    }

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        settoken('');
    };

    return(
        <div>
            {token? (
                <div>
                    <p>Welcome! You are logged in</p>
                    <button onClick={handleLogout}>LogOut</button>
                    </div> ):(
                        <div>
                            <p> Pls login to access the Content</p>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    )}
        </div>
    )
}