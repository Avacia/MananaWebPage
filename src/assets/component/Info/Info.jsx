import style from './Info.module.css'

export default function Info(){
    return(
        <div className={style.infoContainer}>
            <div className={style.infoHeading}>
                <h1>EXHILARATING MEDITATION</h1>
            </div>

            <div className={style.infoContentContainer}>
                <h5>HEART DRIVE</h5>
                <p>
                    is an exhilarating, meditative game that builds your stress resilience. Unlike
                    typical meditation apps, it uses your real-time heart data from your wearable
                    and combines it with thrilling gameplay, to help train you stay calm and focused
                    when under pressure.
                </p>
            </div>

        </div>
    )
}