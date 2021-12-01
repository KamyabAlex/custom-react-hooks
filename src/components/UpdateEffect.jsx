import React,{useState,useEffect} from 'react'
import useUpdateEffect from '../hooks/useUpdateEffect'
function UpdateEffect() {
    const [count,setCount] = useState(0)
    useUpdateEffect(()=>alert(count),[count])
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>{setCount(c => c + 1)}}>Incrament</button>
        </div>
    )
}

export default UpdateEffect
