/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function ProductItem({ item, handlerdelete }) {

   const { name, price, photo, _id } = item


   const nagevate = useNavigate();
   return (
      <>
         <div
            className="h-[370px] 2xl:h-[420px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
         // key={id}
         >
            <div>
               <img
                  src={photo}
                  alt="img"
                  className=" h-56 2xl:h-64 rounded-t-xl w-full"
               />
            </div>
            <div className=" flex flex-col justify-center items-center">
               <h1 className=" font-semibold text-xl pt-4">{name}</h1>
               <div className=" flex gap-10 pt-2">
                  <h2 className=" font-medium text-lg ">${price}</h2>
                  <h2 className=" font-medium text-DarkColor">49%</h2>
               </div>

               <div className=" flex gap-8 pt-4">
                  <button
                     className=" bg-ExtraDarkColor text-white px-4 rounded-md  py-2 font-medium bg-red-600"
                     onClick={() => nagevate("/dasbord/shop")}
                  >
                     Add to Cart
                  </button>
                  <button
                     className=" bg-ExtraDarkColor text-white rounded-md  px-4 py-2 font-medium bg-red-600"
                     onClick={() => handlerdelete(_id)}
                  >
                     Delete
                  </button>

                  <Link to={`/dasbord/update/${item._id}`}>
                     <button className="bg-ExtraDarkColor text-white rounded-md px-4 py-2 font-medium bg-red-600">
                        Update
                     </button>
                  </Link>

                  <div className=" flex gap-1 items-center">
                     <h2>5.0</h2>
                     <FaStar className=" text-yellow-300" />
                  </div>
               </div>
            </div>
         </div>

      </>
   );
}

export default ProductItem;