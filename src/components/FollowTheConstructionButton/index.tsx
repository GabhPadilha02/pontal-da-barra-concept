import { CaretRight } from "phosphor-react";
import style from './style.module.scss'

export function FollowTheConstructionButton() {
  return (
    <a href="/galeriasmensais">
      <button className={style.followTheConstructionButton}>
        ACOMPANHE A OBRA
        <CaretRight size={20} weight={"bold"} />
      </button>
    </a>
  )
}