import style from "./style.module.scss"
import marca from "../../assets/marcadagua.svg"
import sobre from "../../assets/sobre.svg"
import { Check, FileSearch, Handshake, Info, ShoppingBag } from "phosphor-react"

export function About() {
  return (
    <>
      <div className={style.mainContainer} id="about">
        <img src={marca} alt="" height={60} className={style.marca}/>
        <div className={style.infoContainer}>
          <div></div>
          <img src={sobre} alt="" height={40}/>
          <div className={style.textAbout}>
            {/* <h2>Na melhor Praia de Itapoá SC! No início da Baía da Babilônia, lugar de águas claras com ondas calmas e areia branca!</h2> */}
            <h3> <Info/> Como será?</h3>
            <p>
            Frente mar serão até 50 apartamentos de luxo, onde em frente a Avenida teremos as salas comerciais. Ainda está indefinida a construtora, este edifício é apenas ilustrativo, e o padrão será bem melhor
            </p>
            <p>Por fim, os Lotes, que iniciarão a partir de R$ 99.000,00, e metragens variadas de 180, 360 e 1.400 é até 1900 m².</p>
          </div>
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
            <Handshake size={80}/> As vantagens do Pontal Concept
          </h2>
          <p>
            <Check/> Grande potencial de valorização após a execução dos empreendimentos e apartamentos.
          </p>
          <p>
            <Check/> Toda infraestrutura de paver nas ruas, o que trás mais comodidade, elegância e fluxo lento de veículos dentro do loteamento. Meio fio, calçada e iluminação.
          </p>
          <p>
            <Check/> Estação própria de tratamento de esgoto, inibindo o custo de construção de fossa filtro.
          </p>
          <p>
            <Check/> Lotes 100% secos, altos, sem vegetação, inibindo o custo alto de licença ambiental, aterro e limpeza.
          </p>
          <p>
            <Check/> Parceria com a empresa Inviolável de telemonitoramento, com mais de 40 câmeras de monitoramento de segurança, que poderá ser acompanhado por qualquer morador em tempo real 24hs.
          </p>
          </div>
        </div>
      </div>
    </>
    
  )
}