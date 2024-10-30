import style from './HeadBar.module.css'

export default function HeadBar(){

    function handleScrollPosition(){
        window.scrollTo({
            top:1650,
            behavior: "smooth"
        })
    }

    return(
        <div className={style.headBarContainer}>
            <div className={style.logoContainer}>
                <a href="https://www.manana.co.nz/"><img src="./Logo.png" alt="Manana Logo" /></a>
            </div>

            <div className={style.headBarBtnContainer}>
                <a href="https://www.manana.co.nz/">Contact Us</a>
                <button className={style.headBarSignUpBtn} onClick={handleScrollPosition}>Sign Up</button>
            </div>
        </div>
    )
}