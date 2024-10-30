import style from "./SignUp.module.css"
import ConfirmMessage from './ConfirmMessage/ConfirmMessage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function SignUp(){
    const [inputName, setInputName] = useState('')
    const [email, setEmail] = useState('')
    const [isClicked, setIsClicked] = useState(false)

    function handleInputName(e){
        e.preventDefault()
        setInputName(e.target.value)
    }

    function handleInputEmail(e){
        e.preventDefault()
        setEmail(e.target.value)
    }

    function handleSubmit(){
        setIsClicked(true)
    }

    function handleClose(){
        setIsClicked(false)
    }


    return(
        <div className={style.signUpContainer}>
            <div className={style.signUpTitle}>
                <h1>Be one of the first to try HEART DRIVE</h1>
            </div>

            <p>Sign up now to receive updates, early access to join our community.</p>

            <div className={style.signUpForm}>
                <p>Name:</p>
                <input value={inputName} onChange={handleInputName} placeholder="Full Name" />
                <p>Email:</p>
                <input value={email} onChange={handleInputEmail} placeholder="youremail@example.com" />
            </div>

            <button className={style.submitBtn} onClick={handleSubmit}>Sign Up</button>

            {
                isClicked && 
                    <div className={style.confirmationMessage}>
                        <FontAwesomeIcon className={style.confirmMessageCloseIcon} icon={faXmark} onClick={handleClose}/>
                        <ConfirmMessage />
                    </div>
            }
        </div>
    )
}