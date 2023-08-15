import { useEffect, useState } from "react";

const BmiCalc= ()=>{
    const [bmival, setbmival] = useState(0);
    const [height, setHeight] = useState(10);
    const [width, setwidth] = useState(20)
    useEffect(()=>{
    setbmival(Number(height)+ Number(width))
    }, [height, width])
    return(
    <>
    <input type="range" value={height} onChange={(e)=>setHeight(e.target.value)}/>
    <input  type="range" value={width} onChange={(e)=>{setwidth(e.target.value)
    }}/>
    <p>your Bmi iis</p>
    {bmival}
    </>
    )
}
export default BmiCalc;
