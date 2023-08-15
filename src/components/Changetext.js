const { useState } = require("react")

const ChangeText = ()=>{
    const [txt, setTxt] = useState('click me')
    return(
        <button onClick={()=>setTxt('clicked')}>{txt}</button>
    )
}

export default ChangeText;