import style from "./SignUp.module.css"
import ConfirmMessage from './ConfirmMessage/ConfirmMessage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useMutation } from 'react-query'

export default function SignUp(){
    const googleSheetURL = process.env.REACT_APP_GOOGLE_SHEET_URL
    const [isClicked, setIsClicked] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        device: '',
        hearFromUs: '',
    })
    

    function handleUserInput(e){
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!formData.firstName || !formData.lastName || !formData.email || !formData.device || !formData.hearFromUs){
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
        return fetch(googleSheetURL, {
            method: 'POST',
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData)
        })
        .then((response => response.json()))
    },
    {
        onSuccess: (data) => {
            setIsClicked(true)
            console.log("Success", data)
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                device: "",
                hearFromUs: ""
            })
        },
        onError: (error) => {
            alert("Failed to send message.")
            console.log("Error", error)
        }
    }
    )

    console.log("First Name: ", formData.firstName, "Last Name: " , formData.lastName, "Email: ", formData.email, "Device: ", formData.device, "Hear From Us: ", formData.hearFromUs)

    return(
        <div className={style.signUpContainer}>
            <div className={`${style.signUpContent} ${isClicked ? style.blurred : ""}`}>
                <div className={style.signUpTitle}>
                    <h1>Be one of the first to try HEART DRIVE</h1>
                </div>

                <p>Sign up now to receive updates, early access to join our community.</p>

                <div className={style.signUpForm} >
                    <form className={style.signUpFormData} onSubmit={handleSubmit}>
                        <div className={style.formInfoName}>
                            <label htmlFor="name">Name:</label>
                            <div className={style.formInput}>
                                <input 
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName} 
                                    onChange={handleUserInput} 
                                    required
                                    placeholder="First Name" 
                                />
                                <input 
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName} 
                                    onChange={handleUserInput} 
                                    required
                                    placeholder="Last Name" 
                                />
                            </div>
                        </div>
                        
                        <div className={style.formInfo}>
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="text"
                                name="email"
                                value={formData.email}    
                                onChange={handleUserInput}
                                required
                                placeholder="youremail@example.com" 
                            />
                        </div>
                        
                        <div className={style.formInfo}>
                            <label htmlFor="device">What kind of device do you own?</label>
                            <select
                                name="device"
                                value={formData.device}
                                onChange={handleUserInput}
                                required
                            >
                                <option value='' disabled>Select a device</option>
                                <option value="Laptop">Android</option>
                                <option value="Desktop">IOS</option>
                                <option value="Android Phone">Windows</option>
                                <option value="IPhone">Don't know</option>
                            </select>
                        </div>

                        <div className={style.formInfo}>
                            <label htmlFor="hearFromUs">Where did you hear about us from?</label>
                            <select
                                name="hearFromUs"
                                value={formData.hearFromUs}
                                onChange={handleUserInput}
                                required
                            >
                                <option value='' disabled>Select an option</option>
                                <option value='LinkedIn'>LinkedIn</option>
                                <option value='Conference'>Conference</option>
                                <option value="None">None of above</option>
                            </select>
                        </div>

                        {!isLoading && !isClicked && <button className={style.submitBtn} onClick={handleSubmit}>Sign Up</button>}
                        {isLoading && <button className={style.submitBtn} disabled>Submitting</button>}
                    </form>
                </div>

            </div>
            {
                isClicked && 
                    <div className={style.confirmationMessage}>
                        <FontAwesomeIcon 
                            className={style.confirmMessageCloseIcon} 
                            icon={faXmark} 
                            onClick={handleClose}/>
                        <ConfirmMessage />
                    </div>
            }
        </div>
    )
}