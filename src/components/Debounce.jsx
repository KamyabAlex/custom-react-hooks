import React,{useState} from 'react'
import useDebounce from "../hooks/useDebounce"
import useForm from '../hooks/useForm'
function Debounce() {
    const [values, handleChange] = useForm()
    useDebounce(() => 
        alert('Fetch a keyword from API'),
        500, 
        [values]
    )
    return (
        <div>
            <input 
                 value={values.search || ''}
                 name="search"
                 onChange={handleChange}
                 type="search" 
                 placeholder="Search Something" />
        </div>
    )
}

export default Debounce
