import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gnc.com.mx/media/nextgenimages//Banner-HS-BOGO40.webp"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gnc.com.mx/media/nextgenimages//Banner-HS-home.webp"
          alt="Second slide"
          width="200" height="400"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gnc.com.mx/media/nextgenimages//Banner-50_Summer-sale-may.webp"
          alt="Third slide"
          width="200" height="400"
        />


      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;