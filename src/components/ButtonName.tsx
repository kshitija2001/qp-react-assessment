//• Toggle button name to 'ON' and 'OFF' on button click.

import { useState } from "react"

const ButtonName = () =>{
const [disabled,setDisabled] = useState(false)
const handleButtonClick = () =>{
setDisabled(!disabled)
}
    return(
        <div>
            <button onClick={()=>{handleButtonClick()}} >{disabled ? "OFF" : "ON"}</button>
        </div>
    )
}

export default ButtonName