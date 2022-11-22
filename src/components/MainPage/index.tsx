import style from "./style.module.scss"
import TitleHome from "../../assets/titlehome.svg"
import { FollowTheConstructionButton } from "../FollowTheConstructionButton"


export function MainPage() {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <img src={TitleHome} alt="Marca D'Água" width={250} />
        <FollowTheConstructionButton />
      </div>
    </div>
  )
}