import {useRef,useEffect} from 'react'
const useRenderCount = ()=>{
    const count = useRef(1)
    useEffect(() => count.current++)
    return count.current
}

export default useRenderCount