import style from './ConfirmMessage.module.css'


export default function ConfirmMessage(){
    return(
        <div className={style.confirmMessageContainer}>
            <h3>Thank you!</h3>
            <p>Once you're successfully signed up to our newsletter, a confirmation email will be sent to your inbox.</p>
            <img src="./check.png" alt="Check Sign" />
        </div>
    )
}