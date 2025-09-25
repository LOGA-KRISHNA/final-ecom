import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

const items = [
  {
    title: 'Womens Top',
    imageurl:
      'https://thumbs.dreamstime.com/b/striped-dress-studio-dummy-front-hanger-comic-cartoon-style-pop-art-vector-retro-illustration-91708509.jpg',
  },
  {
    title: 'Mens Shirts',
    imageurl:
      'https://i.pinimg.com/236x/3e/c9/cd/3ec9cdaad8d23fa33d9303cea9931bd0.jpg',
  },
  {
    title: 'Mens Shirts',
    imageurl:
      'https://i.pinimg.com/236x/3e/c9/cd/3ec9cdaad8d23fa33d9303cea9931bd0.jpg',
  },
  {
    title: 'Mens Shirts',
    imageurl:
      'https://i.pinimg.com/236x/3e/c9/cd/3ec9cdaad8d23fa33d9303cea9931bd0.jpg',
  },
  {
    title: 'Mens Shirts',
    imageurl:
      'https://i.pinimg.com/236x/3e/c9/cd/3ec9cdaad8d23fa33d9303cea9931bd0.jpg',
  },
]

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title="New Arrivals" />
      <div className="px-[20px]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4} // number of visible cards
          navigation
          
          loop={true}
          
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <Card title={item.title} imageurl={item.imageurl} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default NewArrivals
