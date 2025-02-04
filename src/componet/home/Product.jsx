
import Items from "./Items";


function Product() {
   const data = [
      {
         id: 6,
         img: "https://media.gettyimages.com/id/1328201551/vector/sunglasses.jpg?s=612x612&w=0&k=20&c=j-iN6ehbCcZh28vODiNjHCE12lYUEJzn4_rIXfe7R2w=",
         name: "FrostFire Outerlayers",
         price: "398.00",
         discount: "24% Off",
      },
      {
         id: 7,
         img: "https://media.gettyimages.com/id/1295642979/photo/a-pair-of-sunglasses-against-a-yellow-background.jpg?s=612x612&w=0&k=20&c=iYGLExb-xpZpP_vCnNH-BdqQe5eIn3CoS-2ij1_59dI=",
         name: "DaintyDoll Dresses",
         price: "258.00",
         discount: "40% Off",
      },
      {
         id: 8,
         img: "https://media.gettyimages.com/id/1334481410/photo/blue-sunglasses-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=vlrMKpgFJHtlLdKzxlaE2GDO0hnVXj4fWB4M8MaQv54=",
         name: "TrendTraverse Bag",
         price: "104.00",
         discount: "35% Off",
      },
      

   ]
   
   return (
      <>
         <div className=" min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16">
            {/* heading section */}
            <div>
               <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
                  New Arrivals
               </h1>
            </div>

            {/* Cards section */}
            <div className=" flex flex-wrap justify-center gap-5 pt-8">
               {data.map((item) => (
                  <Items
                     key={item.id}
                     id={item.id}
                      img={item.img}
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

export default Product;
