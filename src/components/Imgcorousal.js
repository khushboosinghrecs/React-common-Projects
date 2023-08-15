import { useState } from "react";

const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];

  const ImgCorousal = ()=>{
    const [current, setCurrent] = useState(0)
    const nextslice = ()=>{
        setCurrent(current == images.length -1 ? 0 : current+1);
    }
    const prevslice = ()=>{
        setCurrent(current ==0 ? images.length-1 : current-1);
    }
    return (
        <>
<button onClick={prevslice}>prev</button>
{images.map((img, i) =>{
    return current ==i && <img src={img} style={{width : 200, height: 200}} alt="images" />

}) }
<button onClick={nextslice}>next</button>
</>
    )
  }

  export default ImgCorousal;