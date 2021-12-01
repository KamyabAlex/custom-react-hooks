import { useState, useCallback, useRef, useEffect } from 'react'

const useRafState = (initialState) => {
  
    const [state, setState] = useState(initialState)
    const requestId = useRef(0)

  const setRafState = useCallback((value) => {
    cancelAnimationFrame(requestId.current)

    requestId.current = requestAnimationFrame(() => {
      setState(value)
    })
  }, [])

  
  useEffect(() => {
    return () => cancelAnimationFrame(requestId.current)
  })

  return [state, setRafState]
}
export default useRafState