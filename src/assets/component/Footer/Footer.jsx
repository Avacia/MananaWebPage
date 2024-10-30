import style from './Footer.module.css'

export default function Footer(){
    return(
        <div className={style.footerContainer}>
            <a href="https://www.manana.co.nz/">
                <h1>Powered By</h1>
                <img src='./FooterLogo.png' alt='Footer Logo' />
            </a>
        </div>
    )
}