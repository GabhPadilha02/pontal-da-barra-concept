import mdaFindUs from "../../assets/encontrenos.svg"
import style from "./style.module.scss"
import marca from "../../assets/marcadagua.svg"
import map from "../../assets/map.svg"
import logo from "../../assets/Logo.svg"
import { MapPin } from "phosphor-react"

export function FindUs() {
  return (
    <div className={style.findUsContainer} id="findUs">
      <div className={style.designPage}>
        <img src={marca} alt="" height={60} className={style.marca}/>
        <img src={mdaFindUs} className={style.mdaFindUs} alt="Marca D'Água" height={40}/>
        
      </div>
      <div className={style.centralize}>
        <a href="https://goo.gl/maps/QkN7yvMpCh9nfiay8" target="_blank"><img src={map} alt="Mapa" className={style.map}/></a>
        <div className={style.line}></div>
        <img src={logo} alt="Logo" className={style.logo}/>
        <div className={style.textLocation}>
          <MapPin size={30} weight={"thin"}/>
          <span>Rua Jacarezinho, 2437- Itapoá/SC</span>
        </div>  
      </div>
      
    </div>
  )
}