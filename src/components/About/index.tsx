import style from "./style.module.scss"
import marca from "../../assets/marcadagua.svg"
import sobre from "../../assets/sobre.svg"
import { ShoppingBag } from "phosphor-react"

export function About() {
  return (
    <>
      <div className={style.mainContainer} id="about">
        <img src={marca} alt="" height={60} className={style.marca}/>
        <div className={style.infoContainer}>
          <div></div>
          <img src={sobre} alt="" height={40}/>
          <p>
            O Pontal da Barra Concept está localizado na região do Pontal, a área mais bonita da orla de Itapoá, próximo a um dos portos que mais cresce no país. Nosso projeto irá integrar natureza e infraestrutura de forma inédita na região, proporcionando espaços de uso coletivo com conceitos urbanísticos modernos e funcionais para incentivar o senso de comunidade e possibilitar experiências inesquecíveis aos moradores.
          </p>
        </div>
      </div>
      <div className={style.dividingLine}/>
      <div className={style.mainContainerTwo}>
        <img src={marca} alt="" height={60} className={style.marca}/>
        <div className={style.infoContainerTwo}>
          <div></div>
          <img src={sobre} alt="" height={40}/>
          <div className={style.textContainer}>
          <h2>
            <ShoppingBag weight="bold"/> open shopping
          </h2>
          <p>
          O Pontal da Barra Open Shopping terá duas linhas de prédios, nas quadras 02 e 03, com área entre eles aberta em forma de um maravilhoso e aconchegante boulevard, onde os moradores poderão interagir e aproveitar a melhor estrutura da região com entretenimento, gastronomia, serviços e comércios disponíveis.
          </p>
          </div>
        </div>
      </div>
    </>
    
  )
}