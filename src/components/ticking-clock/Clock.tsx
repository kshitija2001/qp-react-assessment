import { useEffect, useState } from "react"

const Clock =() =>{
const [time,setTime] = useState(new Date().toLocaleTimeString())
let interval = setInterval(()=>{

    clearInterval(interval)
    updateClock()
},1000)

useEffect(()=>{

    updateClock()
},[])
const updateClock = () =>{
    setTime(new Date().toLocaleTimeString())
}
    return(
        <div className="Time">
     <p> {time}</p>
</div>
)    
}

export default Clock 