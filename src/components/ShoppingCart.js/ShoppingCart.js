import { useEffect } from "react"
import { ButtonGroup } from "react-bootstrap";

const ShoppingList =()=>{
    const [item , setItem] = useEffect([]);
    const handleItem =(e) =>{
        let itemName= e.target.value;
        if (itemName === "") return alert("Please enter an Item");
        else{
            setItem([...item, itemName]);
        }
    }
    return(
        <>
        <form>
            <input type="text" />
            <button onClick={handleItem} >Add Item</button>
         </form>
         <a href="./Cary/"></a>
         <button  >Go To Cart</button>
         </>
    )
}