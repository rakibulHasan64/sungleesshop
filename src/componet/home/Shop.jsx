import ShopCard from "../../layout/ShopCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCard from "../../redux/futer/useCard";

function Shop() {

   // const ShopData = [
   //    {
   //       id: 0,
   //       img: "https://media.gettyimages.com/id/1287973084/photo/colorful-summer-blue-and-pink-trendy-sunglasses-over-diagonal-paper-background-top-view.jpg?s=612x612&w=0&k=20&c=LwdfuqzJVnrjr2Vt0D7MTCuxzMNM01cGJSAWpBL_JTY=",
   //       name: "Nike Air",
   //       price: "198.00",
   //       discount: "20% Off",
   //    },
   //    {
   //       id: 1,
   //       img: "https://media.gettyimages.com/id/1267913773/photo/white-sunglasses-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=kpvF9R1iU4bfSkClAluIMwupF35Jm2InGqbzxcKpo-s=",
   //       name: "Sportswear Futura",
   //       price: "208.00",
   //       discount: "40% Off",
   //    },
   //    {
   //       id: 2,
   //       img: "https://media.gettyimages.com/id/147879486/photo/retro-sunglasses.jpg?s=612x612&w=0&k=20&c=dDtQiDd9AJLCPqYIsYh4ibOcmN3it3DHfApc-wGs1d8=",
   //       name: "Royal Collection",
   //       price: "104.00",
   //       discount: "35% Off",
   //    },
   //    {
   //       id: 3,
   //       img: "https://media.gettyimages.com/id/182181509/photo/sunglasses-series.jpg?s=612x612&w=0&k=20&c=UdxRYxS5jNeWIDSZm0lMBSIFeaJLC_6stT4hOzdFziY=",
   //       name: "t-shirt combo pack",
   //       price: "299.00",
   //       discount: "40% Off",
   //    },
   //    {
   //       id: 4,
   //       img: "https://media.gettyimages.com/id/1267913774/photo/white-sunglasses-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=zpJfAYA-MSUE5JKdATX54A_Rt-DGMQyizJ-yQSAeq-c=",
   //       name: "CozyCraze Hoodies",
   //       price: "159.00",
   //       discount: "23% Off",
   //    },
   //    {
   //       id: 5,
   //       img: "https://media.gettyimages.com/id/88853331/photo/pink-sunglasses.jpg?s=612x612&w=0&k=20&c=PTYqt-etxvOPGwWEj0gonYcvhgrnNG5Lj_nHlefHSjg=",
   //       name: "LuxeLoom Purses",
   //       price: "189.00",
   //       discount: "30% Off",
   //    },
   // ];
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: false,
      responsive: [
         {
            breakpoint: 1023,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2,
            },
         },
      ],
   };

   const [sharts] = useCard();



   return (
      <>
         <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
            {/* heading section */}
            <div>
               <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
                  Best sellers
               </h1>
            </div>

            {/* carousel section */}
            <div className=" mt-8">
               <Slider {...settings}>
                  {sharts.map((item) => (
                     <ShopCard
                        key={item.id}
                        id={item.id}
                        photo={item.photo}
                        name={item.name}
                        price={item.price}
                        discount={item.discount}
                     />
                  ))}
               </Slider>
            </div>
         </div>
         

         
         
         
      </>
   );
}

export default Shop;