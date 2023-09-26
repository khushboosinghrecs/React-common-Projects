import * as React from 'react';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
{  {console.log('in mainnnn')}}
const formatCrumbText = (text) => {
    return text
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};
const queryName = "tf1%tf3%tf35%tf4";
const BreadCrumb = () => {
    // const location = useLocation();
    const [breadcrumbLinks, setBreadcrumbLinks] = useState(['pppp', 'lllll']);
    const [count, setCount] = useState(0);
    const [counts, setCounts] = useState(0);
    const [name, setName] = useState("ks");
    console.log('not in return')
    const fn = ()=>{
        const crumbs = queryName ? queryName.split("%").filter(crumb => crumb !== '') : [];
        let p = "jjj"
        setBreadcrumbLinks(crumb=> {
            console.log("crubs", crumb)
         
         return (
                    <React.Fragment key={crumb}>
                        {" / "}
                        <Link to={`/rules?name=${crumb}`}>
                            {crumb}
                        </Link>
                        {" "}
                    </React.Fragment>
                );
        
        console.log('in fnmmmmmm');
    } )
}

    useEffect(() => {
        // const queryName = new URLSearchParams(location.search).get("name");
        // queryName= queryName+`khushi${count}`;
       
        console.log('in useeffect');
        setName(prev => prev + count);
       
    }, [count, counts]);
//     useEffect(() => {
//         // const queryName = new URLSearchParams(location.search).get("name");
//         // queryName= queryName+`khushi${count}`;
       
//         console.log('in useeffect firsrt');
//         // setName(prev)
//         // fn();
       
// },[]);

    return (
        <div className="breadcrumbs">
            {console.log('in return')}
            {/* {console.log(breadcrumbLinks.length, 'length')} */}
            {console.log(breadcrumbLinks, count, counts, "hello")}
            {breadcrumbLinks}
            <h1>count:{count} </h1> <button onClick={()=>{fn();setCount(prev => prev+1)}}> +</button>
          <h1>  count2: {counts}</h1><button onClick={()=>setCounts(prev => prev+4)}> +</button>
        <h2>{  name }</h2>
        </div>
    );
}

export default BreadCrumb;
