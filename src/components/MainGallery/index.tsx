import { SwiperProps, SwiperSlide } from "swiper/react"
import marca from "../../assets/marcadagua.svg"
import vantagens from "../../assets/vantagens.svg"
import Slider from "../Slider"
import sliderLazer from "../../assets/sliderLazer.svg"
import sliderLocal from "../../assets/sliderLocal.svg"
import style from "../MainGallery/style.module.scss"

export function MainGallery() {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true
    },
  }
  
  return (
      <main className={style.mainContainer} id="gallery">
        <div className={style.marcaContainer}>
          <img src={marca} alt="" height={60} className={style.marca}/>
          <img src={vantagens} alt="" height={40}/>
        </div>
        <div className={style.sliderContainer}>
          <Slider settings={settings}>
            <SwiperSlide className={style.swiperSlide}>
              <img src={sliderLazer} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={sliderLocal} alt="" />
            </SwiperSlide>
          </Slider>
        </div>
      </main>
  )
}