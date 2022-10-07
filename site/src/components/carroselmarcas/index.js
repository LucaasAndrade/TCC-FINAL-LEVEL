import './index.scss'

import  Carousel  from  "react-multi-carousel" ; 
import  "react-multi-carousel/lib/styles.css" ; 


export default function Carrossel() {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
    };

    return (
        <section className='carrosel-destaques'>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    //showDots={true}
                    //customTransition="all .5"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                    //dotListClass="custom-dot-list-style"
                    //itemClass="carousel-item-padding-40-px"
                    >   
                    <div><img src='/images/adidas.png' alt='dest' /></div>
                    <div><img src='/images/nike.png' alt='dest' /></div>
                    <div><img src='/images/fila.png' alt='dest' /></div>
                    <div><img src='/images/puma.png' alt='dest' /></div>
                    <div><img src='/images/kings.png' alt='dest' /></div>
                    <div><img src='/images/vans.png' alt='dest' /></div>
                    <div><img src='/images/jordan.png' alt='dest' style={{width: 100}}/></div>
                    <div><img src='/images/newbalance.png' alt='dest' /></div>
                    <div><img src='/images/mizuno.png' alt='dest' /></div>
                    <div><img src='/images/champion.png' alt='dest' /></div>
                    <div><img src='/images/lacoste.png' alt='dest' /></div>
                    <div><img src='/images/converse.png' alt='dest' /></div>
                </Carousel>
        </section>
    )
}