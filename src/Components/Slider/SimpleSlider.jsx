// import React from 'react'
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./slick.css";
// import kahve from '../../Assets/kahve-001.jpg'
// import mocha from '../../Assets/mocha-001.jpg'
// import Jagoba from '../../Assets/Jojoba Yagi_10x4,3_30ml-03.jpg'

// function Arrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "flex", background: "none" }}
//       onClick={onClick}
//     />
//   );
// }

//  function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     nextArrow: <Arrow />,
//     prevArrow: <Arrow />,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1
//         }
//       }
      
//     ]
//   };
//   return (
//     <div className="slick-Container">
// <Slider {...settings}>
//       <div className='slideCard'>
//         <img src={kahve} alt="" className='w-100'/>
//         <div className="slideBody">
//           <h3>NutriAla Diyet Hindiba Kahvesi</h3>
//         </div>
//         <div className="slideFiyat">
//           <p>400,00 TL</p>
//         </div>
          
//       </div>
//       <div className='slideCard'>
//         <img src={mocha} alt="" className='w-100'/>
//         <div className="slideBody">
//           <h3>NutriAla Diyet Hindiba Kahvesi  Hindiba KahvesiHindiba Kahvesi </h3>
//         </div>
//         <div className="slideFiyat">
//           <p>400,00 TL</p>
//         </div>
          
//       </div>
//       <div className='slideCard'>
//         <img src={Jagoba} alt="" className='w-100'/>
//         <div className="slideBody">
//           <h3>NutriAla Diyet Hindiba Kahvesi</h3>
//         </div>
//         <div className="slideFiyat">
//           <p>400,00 TL</p>
//         </div>
          
//       </div>
//       <div className='slideCard'>
//         <img src={kahve} alt="" className='w-100'/>
//         <div className="slideBody">
//           <h3>NutriAla Diyet Hindiba Kahvesi</h3>
//         </div>
//         <div className="slideFiyat">
//           <p>400,00 TL</p>
//         </div>
          
//       </div>
//       <div className='slideCard'>
//         <img src={mocha} alt="" className='w-100'/>
//         <div className="slideBody">
//           <h3>NutriAla Diyet Hindiba Kahvesi</h3>
//         </div>
//         <div className="slideFiyat">
//           <p>400,00 TL</p>
//         </div>
          
//       </div>
//       <div className='slideCard'>
//         <img src={Jagoba} alt="" className='w-100'/>
//         <div className="slideBody">
//           <h3>NutriAla Diyet Hindiba Kahvesi</h3>
//         </div>
//         <div className="slideFiyat">
//           <p>400,00 TL</p>
//         </div>
          
//       </div>
//     </Slider>
//     </div>
      
    
    
//   );
// }
// export default SimpleSlider;
