import { PencilSimpleLine } from "phosphor-react"
import style from "../SignUpButton/style.module.scss"

export function SignUpButton() {
  return (
    <a href="/registro" className={style.redirectButton}>
      <span className={style.textButton}>CADASTRE-SE</span>
      <PencilSimpleLine size={25}/>
    </a>
  )
}