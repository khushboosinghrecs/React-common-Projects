import { useGlobalContext } from "./Context";

const Stories = ()=>{
    const [hits, isLoading, removePost] = useGlobalContext();
    if(isLoading){
        return(
            <h1>Loading....</h1>
        )
    }
    return(
        <div className="stories-div">
            {hits.map((curele)=>{
                const {title, author, objectID, url, num_comments} = curele;
                return(
                    <div>
                        <h2>
                            {title}
                        </h2>
                        <p> By <span>{author}</span> <span>{num_comments}</span>
                        comments</p>
                        <div className="card-button">
                            <a href={url} target='_blank'>Read More</a>
                        </div>
                        <a href="#" onClick={()=>removePost(objectID)}>
                        </a>
                    </div>
                )
            })}

        </div>
        )
}

export default Stories;