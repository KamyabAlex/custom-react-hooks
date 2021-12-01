import {useState} from 'react'

const useFroms = ()=>{
    const [state,setState] = useState({})

    const handleChange = evt =>{
            evt.persist()
            const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
            
            setState(state => ({...state,[evt.target.name]:value}) )
    }
    return [state,handleChange]
}

export default useFroms;