import { useState } from "react"

const ShoppingList = () => {
    const [item, setItem] = useState([]);
    const onDelete = (i) => {
        const newItems = item.filter((item) => {
            return item !== i;
        });
        setItem(newItems);
    }
 const  onSubmit = (e) => {
        e.preventDefault();
        let form = e.target;
        let input = form.item;
        const newItems = [...item, input.value];
        setItem(newItems);
        form.reset();
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="item"
                    placeholder="Add a new item"
                    required
                />
                <button>Add</button>
            </form>

            {item.map((item, index) => (
                <Item onRemoveItem={onDelete} key={item + index} item={item} />
            ))}
        </>
    )
}

const Item = ({ item, onRemoveItem }) => {
    return (
        <li>
            {item}
            <button className="delete" onClick={() => onRemoveItem(item)}>
                x
            </button>
        </li>
    )
}

export default ShoppingList;