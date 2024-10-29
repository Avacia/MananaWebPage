import style from './Body.module.css'


export default function Body(){
    return(
        <div className={style.bodyContainer}>
            <div className={style.bodyInfoContainer}>
                <h1 className={style.bodyInfoHeading}>
                    HEART DRIVE
                </h1>

                <p> Train your resilience as you play.</p>

                <button className={style.bodyInfoBtn}>
                    Join the Waitlist
                </button>
            </div>

            <div className={style.imageContainer}>
                <img src='./deviceImage.png' alt="Device Image" />
            </div>
        </div>
    )
}