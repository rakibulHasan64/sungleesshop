/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/futer/Cartslice";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

function ShopMenuCard({ id, photo, name, price, discount }) {
   
   const dispatch = useAppDispatch();
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();

   const addProductToCart = () => {
      if (!user) {
         navigate('/logine');
         return;
      }

      const payload = {
         id,
         photo,
         name,
         price: parseInt(price),
         quantity: 1,
      };

      dispatch(addToCart(payload));
      toast.success("Added to cart Successfully");
   };

   return (
      <div
         className="h-[370px] 2xl:h-[420px] text-black rounded-xl shadow-lg mb-4 cursor-pointer transition-transform transform hover:scale-105"
         key={id}
      >
         {/* Image Section */}
         <div>
            <img
               src={photo}
               alt={name}
               className="h-56 2xl:h-64 rounded-t-xl w-full object-cover"
            />
         </div>

         {/* Content Section */}
         <div className="flex flex-col justify-center items-center px-4">
            {/* Product Name */}
            <h1 className="font-semibold text-xl pt-4">{name}</h1>

            {/* Price and Discount */}
            <div className="flex gap-10 pt-2">
               <h2 className="font-medium text-lg">${price}</h2>
               <h2 className="font-medium text-red-500">
                  {discount ? `${discount}% Off` : "No Discount"}
               </h2>
            </div>

            {/* Button and Rating */}
            <div className="flex gap-8 pt-4">
               <button
                  onClick={addProductToCart}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 font-semibold rounded-lg shadow-lg transform transition active:scale-95"
               >
                  Add to Cart
               </button>

               <div className="flex gap-1 items-center">
                  <h2>5.0</h2>
                  <FaStar className="text-yellow-300" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default ShopMenuCard;
