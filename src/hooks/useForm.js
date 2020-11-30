import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [state, setstate] = useState(initialState)
    
    const handleChange = e => {
        setstate({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const resetForm = (newState = initialState) => {
        setstate(newState)
    }
    return (
        {state, handleChange, resetForm}
    )
}