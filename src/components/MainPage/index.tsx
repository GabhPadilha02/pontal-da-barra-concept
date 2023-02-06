import style from "./style.module.scss"
import TitleHome from "../../assets/titlehome.svg"
import { FollowTheConstructionButton } from "../FollowTheConstructionButton"
import { Header } from "../Header"


export function MainPage() {
  return (
    <div className={style.container}>
      <Header/>
      <div className={style.infoContainer}>
        <FollowTheConstructionButton />
      </div>
    </div>
  )
}