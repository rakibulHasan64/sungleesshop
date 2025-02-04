import FuterCard from '../home/FuterCard'

function Fueture() {
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
      {
         id: 9,
         img: "https://media.gettyimages.com/id/173552297/photo/sunglasses.jpg?s=612x612&w=0&k=20&c=NWWKxuHZ2cWB5PTkhpk54LEx6hp_fbRUvVVnQEUJ3dE=",
         name: "Fitness Footgear",
         price: "299.00",
         discount: "40% Off",
      },
      {
         id: 10,
         img: "https://media.gettyimages.com/id/1321034188/photo/pattern-of-pink-heart-shaped-retro-sunglasses-against-pastel-pink-background.jpg?s=612x612&w=0&k=20&c=gVRTL4AfB24bRiASPvOSWpc5FM3n1vEazyfs8WZauYc=",
         name: "UrbanBelle Hoodies",
         price: "129.00",
         discount: "28% Off",
      },
      {
         id: 11,
         img: "https://media.gettyimages.com/id/114328381/photo/heart-shaped-sunglasses-on-white-background.jpg?s=612x612&w=0&k=20&c=XGJgY58ozjSKALTCF2FFD1TGrocTN_f7PYYDjwCHESs=",
         name: "Elite Handbags",
         price: "189.00",
         discount: "30% Off",
      },

   ]
   return (
      <>
         <div className=" min-h-screen flex flex-col justify-center pt-24">
            {/* heading section */}
            <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
               Exclusive Products
            </h1>

            {/* card section */}
            <div className="flex flex-wrap justify-center gap-5 pt-8">
               {data.map((item) => (
                  <div key={item.id} className="md:w-2/4 lg:w-1/4">
                     <FuterCard
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        discount={item.discount}
                     />
                  </div>
               ))}
            </div>
            

         </div>
         
         
      </>
   );
}

export default Fueture;