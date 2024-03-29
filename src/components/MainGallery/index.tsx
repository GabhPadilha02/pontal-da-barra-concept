import { SwiperProps, SwiperSlide } from "swiper/react"
import marca from "../../assets/marcadagua.svg"
import vantagens from "../../assets/vantagens.svg"
import Slider from "../Slider"
import style from "../MainGallery/style.module.scss"
import slider1 from "../../assets/slider1.jpeg"
import slider2 from "../../assets/slider2.jpeg"
import slider3 from "../../assets/slider3.jpeg"
import slider4 from "../../assets/slider4.jpeg"
import slider5 from "../../assets/slider5.jpeg"
import slider6 from "../../assets/slider6.jpeg"
import slider7 from "../../assets/slider7.jpeg"
import slider8 from "../../assets/slider8.jpeg"
import slider9 from "../../assets/slider9.jpeg"
import slider10 from "../../assets/slider10.jpeg"
import slider11 from "../../assets/slider11.jpeg"
import slider12 from "../../assets/slider12.jpeg"
import slider13 from "../../assets/slider13.jpeg"
import slider14 from "../../assets/slider14.jpeg"
import slider15 from "../../assets/slider15.jpeg"
import slider16 from "../../assets/slider16.jpeg"
import slider17 from "../../assets/slider17.jpeg"
import slider18 from "../../assets/slider18.jpeg"
import { Image, LockKey, Storefront, Tree, Waves, WifiHigh } from "phosphor-react"

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
          <h2>
            Galeria
            <Image size={30} weight="bold"/>
          </h2>
          <Slider settings={settings}>
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
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider8} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider9} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider10} alt="" />
            </SwiperSlide>
            {/* <SwiperSlide className={style.swiperSlide}>
              <img src={slider11} alt="" />
            </SwiperSlide> */}
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider12} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider13} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider14} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider15} alt="" />
            </SwiperSlide>
            {/* <SwiperSlide className={style.swiperSlide}>
              <img src={slider16} alt="" />
            </SwiperSlide> */}
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider17} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <img src={slider18} alt="" />
            </SwiperSlide>
          </Slider>
          <div className={style.infoDetails}>
            <div className={style.detailContainer}>
            <span>Na Beira do Mar</span>
            <Waves weight="bold" size={20}/>
            </div>
          </div>
          <div className={style.infoDetails}>
            <div className={style.detailContainer}>
            <span>Seguro</span>
            <LockKey weight="bold" size={20} />
            </div>
          </div>
          <div className={style.infoDetails}>
            <div className={style.detailContainer}>
            <span>Wifi</span>
            <WifiHigh weight="bold" size={20} />
            </div>
          </div>
          <div className={style.infoDetails}>
            <div className={style.detailContainer}>
            <span>Praças e Parques</span>
            <Tree weight="bold" size={20} />
            </div>
          </div>
          <div className={style.infoDetails}>
            <div className={style.detailContainer}>
            <span>Quiosques</span>
            <Storefront weight="bold" size={20} />
            </div>
          </div>
            
        </div>
      </main>
  )
}