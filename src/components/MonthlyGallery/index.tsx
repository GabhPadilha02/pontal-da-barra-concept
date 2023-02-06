import { Calendar, ClockClockwise, X } from "phosphor-react"
import { useState } from "react"
import { useGetGallerysQuery } from "../../graphql/generated"
import { Header } from "../Header"
import './style.css'
import mdaMonthlyGallerys from "../../assets/acompanhe.svg"
import marca from "../../assets/marcadagua.svg"

export function MonthlGallery() {
    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState("")

    const { data } = useGetGallerysQuery()
    const getImg = (url: string) => {
        setTempImgSrc(url)
        setModel(true)
    }

    return (
        <div className="container">
            <div className={"mdaContainer"}>
                <img src={mdaMonthlyGallerys} className="mdaMonthlyGallerys" alt="Marca D'Água" height={40} />
            </div>
            
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="Model" />
                <X onClick={() => setModel(false)} />
            </div>
            <div className={"gallery"}>
                {data?.galeriasMensais.map((e) => (
                    <div className={"galleryDisplay"}>
                        <h1>
                            <Calendar />
                            {e.mesTitulo}
                        </h1>
                        <div className={"galleryContainer"}>
                            {e.fotos.map((item, index) => (
                                <>
                                    <div className={"pics"} key={index} onClick={() => getImg(item.url)}>
                                        <img src={item.url} alt="Fotos das atualizações mensais da obra do Ocean Castle" style={{ width: "200px", height: "150px" }} />
                                    </div>
                                </>
                            ))}
                        </div>
                        {e.atualizacoesDoMes ?
                            <div className="updateTextContainer">
                                <ClockClockwise size={24} />
                                <span className="updateText">{e.atualizacoesDoMes}</span>
                            </div> :
                            <></>
                        }
                    </div>
                ))}
            </div>
        </div>

    )
}



