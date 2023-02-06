import { FacebookLogo, InstagramLogo } from "phosphor-react";
import Logo from "../../assets/Logo.svg"
import style from "./styles.module.scss"
import { List, WhatsappLogo } from "phosphor-react";


export function Header() {
  return (
    <header className={style.container}>
      <nav className={style.headerContainer}>
        <input type="checkbox" id="check" className={style.check} />
        <label htmlFor="check" className={style.checkbtn}>
          <List color="white" />
        </label>
        <a href="/"><img alt="Logo" src={Logo} className={style.logo}/></a>
        <ul className={style.linksContainer}>
          <li><a href="/">INÍCIO</a></li>
          <li><a href="#about">SOBRE</a></li>
          <li><a href="#gallery">GALERIA</a></li>
          <li><a href="#findUs">ENCONTRE-NOS</a></li>
          {/* <li><a href="/progresso">PROGRESSÃO DA OBRA</a></li> */}
        </ul>
        <ul className={style.iconsLinks}>
           <li><a href="https://www.instagram.com/pontal_da_barra_itapoa/" target="_blank"><InstagramLogo size={24} weight={"regular"} /></a></li>
           {/* <li><a href="https://wa.me/554734424541" target="_blank"><WhatsappLogo size={24} weight={"regular"} /></a></li> */}
           <li><a href="https://www.facebook.com/profile.php?id=100088218352562" target="_blank"><FacebookLogo size={24} weight={"regular"} /></a></li>
         </ul>
      </nav>
    </header>
  )
}
 