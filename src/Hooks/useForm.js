import { useState } from 'react'

export const useForm = (initialState ={}) => {

    const [values, setFormState] = useState(initialState)
    
    const reset = ()=>{
        setFormState(initialState)
    }

    const handleInputChange = ({target})=>{
      
        setFormState({
            ...values,
            [target.name]:target.value
        });
      
    }

      
    return [values,handleInputChange,reset];
}


