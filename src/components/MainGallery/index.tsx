import { SwiperProps, SwiperSlide } from "swiper/react"
import marca from "../../assets/marcadagua.svg"
import vantagens from "../../assets/vantagens.svg"
import Slider from "../Slider"
import sliderLazer from "../../assets/sliderLazer.svg"
import sliderLocal from "../../assets/sliderLocal.svg"
import style from "../MainGallery/style.module.scss"
import slider1 from "../../assets/slider1.png"
import slider2 from "../../assets/slider2.png"
import slider3 from "../../assets/slider3.png"
import slider4 from "../../assets/slider4.png"
import slider5 from "../../assets/slider5.png"
import slider6 from "../../assets/slider6.png"
import slider7 from "../../assets/slider7.png"

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
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider3} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider4} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider5} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider6} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider7} alt="" />
            </SwiperSlide>
          </Slider>
        </div>
      </main>
  )
}