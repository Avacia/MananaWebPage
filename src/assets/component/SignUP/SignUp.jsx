import style from "./SignUp.module.css"
import ConfirmMessage from './ConfirmMessage/ConfirmMessage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useMutation } from 'react-query'

export default function SignUp(){
    const [isClicked, setIsClicked] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })
    

    function handleUserInput(e){
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(){
        if(!formData.name || !formData.email){
            alert("All fields are required!")
            return
        }

        if(!validateEmail(formData.email)){
            alert("Please enter a valid email address!")
            return
        }
        mutate()
    }

    function validateEmail(email){
        const isApproveEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return isApproveEmail.test(String(email.toLowerCase()))
    }

    function handleClose(){
        setIsClicked(false)
    }

    const { mutate, isLoading } = useMutation(() => {
        return fetch(`URL`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response => response.json()))
    },
    {
        onSuccess: (data) => {
            setIsClicked(true)
            console.log("Success", data)
            setFormData({
                name: "",
                email: ""
            })
        },
        onError: (error) => {
            alert("Failed to send message.")
            console.log("Error", error)
        }
    }
    )

    return(
        <div className={style.signUpContainer}>
            <div className={style.signUpTitle}>
                <h1>Be one of the first to try HEART DRIVE</h1>
            </div>

            <p>Sign up now to receive updates, early access to join our community.</p>

            <div className={style.signUpForm} onSubmit={handleSubmit}>
                <form className={style.signUpFormData}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name} 
                        onChange={handleUserInput} 
                        required
                        placeholder="Full Name" 
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="text"
                        name="email"
                        value={formData.email}    
                        onChange={handleUserInput}
                        required
                        placeholder="youremail@example.com" 
                    />

                    <button className={style.submitBtn} onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>

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