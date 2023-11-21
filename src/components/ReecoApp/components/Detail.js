import React, { useState } from 'react'
import { product } from '../utills/constant'
export const Detail = () => {
    const [status, setStatus] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const approveItem= (id)=>{
        console.log(id);
        // setStatus(!status);
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Status</th>
                </tr>
                {product.map(data => (<tr key ={data.productId}><td>{data.productName}</td>
                    <td>{data.productPrice}</td>
                    <td>{data.productDescription}</td>
                    <td>{quantity}</td>
                    <td>{status}</td>
                    <td onClick={()=>approveItem(data.productId)}>✅</td>
                    <td>❌</td>
                </tr>))}
            </table>
        </div>
    )
}
