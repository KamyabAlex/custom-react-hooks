import React from 'react'
import useToggle from '../hooks/useToggle'

function Toggle() {
    const [value,toggleValue] = useToggle(false)
    return (
        <>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
        </>
    )
}

export default Toggle
