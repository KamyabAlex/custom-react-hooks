import React,{useRef} from 'react'
import useEventListener from '../hooks/useEventListener'

function EventListner() {
    const elementRef = useRef()
    useEventListener('click',event=>{
        if(event.defaultPrevented){
            return
        }
        if (!elementRef?.current?.contains(event.target)) {
            alert('Click Outside Button')
        }
    },window);

    return (
        <div>
            <button onClick={()=>alert('click On Button')} ref={elementRef}>Click Here</button>
        </div>
    )
}

export default EventListner
