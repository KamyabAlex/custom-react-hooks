import React from 'react'
import useFroms from '../hooks/useForm'

function Form() {
    const [values,handleChange] = useFroms()

    const login = (e)=>{
        e.preventDefault()
    }
    return (
        <div>
            {JSON.stringify(values)}
            <form method="post" onSubmit={login}>
                <input 
                 value={values.email || ''}
                 name="email"
                 onChange={handleChange}
                 type="email" 
                 placeholder="Enter your email" />

                <input 
                 value={values.password || ''}
                 name="password"
                 onChange={handleChange}
                 placeholder="Enter your Password" />

                <input
                    type="checkbox" 
                    value={values.remember || false}
                    name="remember"
                    onChange={handleChange}
                    id="remember"
                />
                <label htmlFor="remember">Remember Me</label>
                <button type="submit"> Login </button>
            </form>
        </div>
    )
}

export default Form
