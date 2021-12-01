import { useEffect } from 'react'
import useRafState from './useRafState'
const getPos = () => ({
  x: window.scrollX,
  y: window.scrollY,
})

const useWindowScroll = () => {
  const [pos, setPos] = useRafState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setPos(getPos())
    }

    window.addEventListener('scroll', handleScroll)

    setPos(getPos())

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return pos
}

export default useWindowScroll