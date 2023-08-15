import { useState } from "react"
const API_URL = "https://api.github.com";
const GithubUser = ()=>{
    const [githubuser, setGithubuser] = useState('');
    const [user, setuser] = useState([]);
    const searchUser = async (e)=>{
        e.preventDefault();
        const response = await fetch(`${API_URL}/search/users?q=${githubuser}`);
        const res= await response.json();
        setuser(res.items);
        console.log(githubuser);
        console.log(res);
        setGithubuser('')
    }
    return(
        <>
        <form onSubmit={searchUser}>
        <input type="text" value={githubuser} onChange={(e)=>setGithubuser(e.target.value)}></input>
        <button >Search</button>
        </form>
        {user.map(ele=> <p>{ele.login}</p>)}
        </>
    )
}

export default GithubUser;