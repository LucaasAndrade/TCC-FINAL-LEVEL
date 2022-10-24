import './index.scss'

import  Carousel  from  "react-multi-carousel" ; 
import  "react-multi-carousel/lib/styles.css" ; 


export default function CarrosselProduto() {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
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
                    <div>
                        <div>
                            <img src='/images/produtoteste2.png' alt='dest' />
                            <img src='/images/produtoteste3.png' alt='dest' />
                            <img src='/images/produtoteste4.png' alt='dest' />
                            <img src='/images/produtoteste5.png' alt='dest' />
                        </div>
                        <div>
                            <img src='/images/produtoteste.png' alt='produto' style={{width: 200}}/>
                        </div>
                        
                    </div>
                </Carousel>
        </section>
    )
}