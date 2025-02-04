import useCard from "../../redux/futer/useCard";
import ShopMenuCard from "./ShopMenuCard";


function ShopMenu() {

   // const ShopData = [
   //    {
   //       id: 0,
   //       img: "https://media.gettyimages.com/id/1183829971/photo/black-safety-glasses-personal-protective-equipment-on-white-background.jpg?s=612x612&w=0&k=20&c=01O43JYZt0FaGyrz1JvJf3yqWsjjoY7Vywhktf7F5TE=",
   //       name: "Nike Air",
   //       price: "198.00",
   //       discount: "20% Off",
   //    },
   //    {
   //       id: 1,
   //       img: "https://media.istockphoto.com/id/1360360896/photo/sun-glasses.jpg?b=1&s=612x612&w=0&k=20&c=HA8eLeelEl_Xo5cdNVubP-TXnwFD0DEZiOfMa9-rM-E=",
   //       name: "Sportswear Futura",
   //       price: "208.00",
   //       discount: "40% Off",
   //    },
   //    {
   //       id: 2,
   //       img: "https://media.istockphoto.com/id/1018004206/photo/black-sunglasses-isolated.jpg?b=1&s=612x612&w=0&k=20&c=PemU1FxUMzRUSjSWA1TCpxJ-QpZ1lEFV3uYDJvpZBgQ=",
   //       name: "Royal Collection",
   //       price: "104.00",
   //       discount: "35% Off",
   //    },
   //    {
   //       id: 3,
   //       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTSbD3EVLf3-ZESsX9YbUIknHrUKG2jc8sA&s",
   //       name: "T-Shirt Combo Pack",
   //       price: "299.00",
   //       discount: "40% Off",
   //    },
   //    {
   //       id: 4,
   //       img: "https://media.istockphoto.com/id/477953204/photo/sunglasses.jpg?b=1&s=612x612&w=0&k=20&c=-AnIPgaKI9dhfjJao3WLYn6nT6w7lXId-UDxKyEiQro=",
   //       name: "CozyCraze Hoodies",
   //       price: "159.00",
   //       discount: "23% Off",
   //    },
   //    {
   //       id: 5,
   //       img: "https://media.istockphoto.com/id/477953204/photo/sunglasses.jpg?b=1&s=612x612&w=0&k=20&c=-AnIPgaKI9dhfjJao3WLYn6nT6w7lXId-UDxKyEiQro=",
   //       name: "LuxeLoom Purses",
   //       price: "189.00",
   //       discount: "30% Off",
   //    },
   //    {
   //       id: 6,
   //       img: "https://media.istockphoto.com/id/1417602445/photo/sunglasses-in-golden-bright-color-in-transparent-plastic-eyewear-top-view-with-shadow-trendy.jpg?b=1&s=612x612&w=0&k=20&c=NjibHYOTXa7BtL1QdHw_T76KkIhDpO7GqJ6KQyYNkP0=",
   //       name: "Urban Edge Sneakers",
   //       price: "220.00",
   //       discount: "15% Off",
   //    },
   //    {
   //       id: 7,
   //       img: "https://media.istockphoto.com/id/1081398784/photo/sunglass-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=9ha9nKMiMM3yGGfILlvf4Mu24DJaV2FVcbK4SFV91hY=",
   //       name: "Essential Everyday Shoes",
   //       price: "120.00",
   //       discount: "10% Off",
   //    },
   //    {
   //       id: 8,
   //       img: "https://media.istockphoto.com/id/1081398784/photo/sunglass-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=9ha9nKMiMM3yGGfILlvf4Mu24DJaV2FVcbK4SFV91hY=",
   //       name: "Modern Jacket",
   //       price: "320.00",
   //       discount: "25% Off",
   //    },
   //    {
   //       id: 9,
   //       img: "https://media.istockphoto.com/id/1200116143/photo/orange-sunglasses-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=gj-j8luYJV34AqUFTmT6ybY2z0aRCAe_vU4xAtf7jWI=",
   //       name: "Winter Cozy Gloves",
   //       price: "59.00",
   //       discount: "12% Off",
   //    },
   //    {
   //       id: 10,
   //       img: "https://media.istockphoto.com/id/1417602445/photo/sunglasses-in-golden-bright-color-in-transparent-plastic-eyewear-top-view-with-shadow-trendy.jpg?s=612x612&w=0&k=20&c=Y4yhFCE_tBZfM9qzQ7A7s8prDbEXnVrTa1xcmIHo1Co=",
   //       name: "Classic Sunglasses",
   //       price: "75.00",
   //       discount: "20% Off",
   //    },
   //    {
   //       id: 11,
   //       img: "https://media.gettyimages.com/id/639498175/photo/modern-sunglasses.jpg?s=612x612&w=0&k=20&c=lQju5EMDZ0Bi4BiU-CigY0G5xnslptix4cJf2MeOFH4=",
   //       name: "Bold Belt Set",
   //       price: "99.00",
   //       discount: "18% Off",
   //    },
   //    {
   //       id: 12,
   //       img: "https://media.gettyimages.com/id/1295642979/photo/a-pair-of-sunglasses-against-a-yellow-background.jpg?s=612x612&w=0&k=20&c=iYGLExb-xpZpP_vCnNH-BdqQe5eIn3CoS-2ij1_59dI=",
   //       name: "Luxury Watch",
   //       price: "499.00",
   //       discount: "30% Off",
   //    },
   //    {
   //       id: 13,
   //       img: "https://media.gettyimages.com/id/154768893/photo/pair-of-red-sunglasses.jpg?s=612x612&w=0&k=20&c=cH1f7CJKYNKmpeMujKqCj2gmjGoc4jeOXS9xGbLp7_0=",
   //       name: "Chic Necklace",
   //       price: "89.00",
   //       discount: "25% Off",
   //    },
   //    {
   //       id: 14,
   //       img: "https://media.gettyimages.com/id/958874602/photo/black-sunglasses-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=JJnsb-CY1Wsspt07uRzWMtpSzdOvqcpmcFcDBCOEU6A=",
   //       name: "Trendy Backpack",
   //       price: "210.00",
   //       discount: "20% Off",
   //    },
   //    {
   //       id: 15,
   //       img: "https://media.gettyimages.com/id/147879485/photo/pink-retro-sunglasses.jpg?s=612x612&w=0&k=20&c=M1arrbhWxauJge26XqnGZJgJ30H2dF7J9sVMFgRKdzY=",
   //       name: "Explorer Duffel",
   //       price: "180.00",
   //       discount: "15% Off",
   //    },
   //    {
   //       id: 16,
   //       img: "https://media.gettyimages.com/id/1334481410/photo/blue-sunglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=vlrMKpgFJHtlLdKzxlaE2GDO0hnVXj4fWB4M8MaQv54=",
   //       name: "Street Style",
   //       price: "45.00",
   //       discount: "10% Off",
   //    },
   //    {
   //       id: 17,
   //       img: "https://media.gettyimages.com/id/950923576/vector/sunglasses-at-sunset.jpg?s=612x612&w=0&k=20&c=63l7Cz36xYQPyJ5cLwoonk9qjDzGc0YALPikUJ1fxgs=",
   //       name: "Casual Sungllase",
   //       price: "130.00",
   //       discount: "22% Off",
   //    },
   //    {
   //       id: 18,
   //       img: "https://media.gettyimages.com/id/157379679/photo/vintage-heart-shaped-sunglasses.jpg?s=612x612&w=0&k=20&c=SA51XOjtrlg2i5ba1OPJSDOhPAFgYEhQEdSeTiX56nM=",
   //       name: "Elegant Earrings",
   //       price: "70.00",
   //       discount: "28% Off",
   //    },
   //    {
   //       id: 19,
   //       img: "https://media.gettyimages.com/id/1262928250/photo/sunglasses.jpg?s=612x612&w=0&k=20&c=Z0EQQbiNvDDjYgiJqlyacSM5aAWfNue7stpIkQy6zF0=",
   //       name: "Designer Wallet",
   //       price: "150.00",
   //       discount: "35% Off",
   //    },
   // ];

   const [sharts] = useCard();


   return (
      <>
         <div className="min-h-screen flex flex-col justify-center px-5 pt-14 lg:px-32">
            {/* heading section */}
            <div>
               <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
                  Best Sellers
               </h1>
            </div>

            {/* carousel section */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {sharts.map((item) => (
                  <ShopMenuCard
                     key={item._id} 
                     id={item._id}  
                     photo={item.photo}
                     name={item.name}
                     price={item.price}
                     discount={item.discount}
                  />
               ))}
            </div>

         </div>



      </>
   );
}

export default ShopMenu;