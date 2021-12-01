import React,{useState} from 'react'
import usePrevious from '../hooks/usePrevious'

function Previous() {
    const [count, setCount] = useState(0);

    const prevCount = usePrevious(count)
    return (
        <div>
           <h1> Now: {count}, before: {prevCount} </h1> 
           <button onClick={()=>setCount(c=>c + 1)}>Increase Count</button>
        </div>
    )
}

export default Previous
