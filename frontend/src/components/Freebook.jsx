import React from 'react';
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards'; // Make sure the path is correct for Cards

function Freebook() {
  // Make sure list is an array and the data has 'category' field
  const filterData = list.filter((data) => data.category === 'free');
  console.log(filterData); // Ensure this is logging the correct filtered data

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-bold text-2xl mb-2'>Free Courses Offered</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi error quidem exercitationem quaerat magnam adipisci harum omnis quibusdam nemo nobis!</p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} /> // Ensure each key is unique and valid
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
