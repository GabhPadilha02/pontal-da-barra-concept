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
            <Check/> Localizado na Baía da Babitonga, local de águas calmas, claras e com ótima faixa de areia.
            </p>
            <p> <Check/> O empreendimento baseia-se em grandes conceitos, trazendo grande potencial de valorização dos terrenos, em formato exclusivo, o qual contemplará cerca de quase 400 lotes entre residenciais, com metragens variadas entre 180,00m² á 1900m² cada (Estes, excelentes para pousadas, hotéis e chácaras).</p>
            <p> <Check/> Também terá cerca de 250 apartamentos privativos com muitas unidades frente mar, de grandes e renomadas construtoras do mercado imobiliário.</p>
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