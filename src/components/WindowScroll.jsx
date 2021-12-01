import React from 'react'
import useWindowScroll from '../hooks/useWindowScroll'
function WindowScroll() {
    const { x, y } = useWindowScroll()
    return (
        <div>
            Position: ({x}, {y})
        </div>
    )
}

export default WindowScroll
