import { useState } from "react";

const ShoppingPage =()=>{
    const [item, setItem] = useState([]);
    const [name, setItemName] = useState('')
    const handleItem =(e)=>{
        e.preventDefault();
        let name=e.target.name;
        let value=e.target.value;
        setItem((prevItems) => {
            return [...prevItems ,name];
            });
            setItemName('');
    }
    return(
        <>
        <h1>Shopping Page</h1>
        <form>
            <input type="text" name="items" onChange={(e)=>setItemName(e.target.value)} />
            <button onClick={handleItem}>add item</button>
        </form>
        </>
    )
}