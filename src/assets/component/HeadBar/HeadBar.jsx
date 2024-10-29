import style from './HeadBar.module.css'

export default function HeadBar(){
    return(
        <div className={style.headBarContainer}>
            <div className={style.logoContainer}>
                <img src="./Logo.png" alt="Manana Logo" />
            </div>

            <div className={style.headBarBtnContainer}>
                <a href="https://www.manana.co.nz/">Contact Us</a>
                <button className={style.headBarSignUpBtn}>Sign Up</button>
            </div>
        </div>
    )
}