import React, { Dispatch, SetStateAction } from 'react'

interface ValidatorProps {
    text: string
    validateSetter: Dispatch<SetStateAction<boolean>>
}

const Validator = ({text, validateSetter}: ValidatorProps) => {
    const checkStrength = ()=>{
        if(text.length >= 6 && /[A-Z]/.test(text) && /[0-9]/.test(text) && /[!@#$%^&*()]/.test(text)){
            validateSetter(true)
            return <div className='text-[#24a136]'>Strong password</div>
        }
        else if(text.length >= 6 && /[A-Z]/.test(text) && /[0-9]/.test(text) ){
            validateSetter(true)
            return <div className='text-[#b9ec2d]'>Almost there</div>
        }
        else if(text.length >= 6 && /[0-9]/.test(text) ){
            validateSetter(true)
            return <div className='text-[#f1a428]'>Fair password</div>
        }
        else {
            validateSetter(false)
            return <div className='text-[#E50914]'>Weak paswword</div>
        }
    }
  return (
    <div className='text-[0.9rem] w-full text-left'>{checkStrength()}</div>
  )
}

export default Validator