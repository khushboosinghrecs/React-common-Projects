import { useGlobalContext } from "./Context";

const Search = ()=>{
const [query, SearchPost] = useGlobalContext();
return(
    <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder="search here" value={query} onChange={(e)=>SearchPost(e.target.value)} />
    </form>
)
}

export default Search;