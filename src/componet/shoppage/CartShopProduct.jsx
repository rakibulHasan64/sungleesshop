import { RxCross1 } from "react-icons/rx";
import { useAppDispatch } from "../../redux/hook";
import { removeFromCart } from "../../redux/futer/Cartslice";

// eslint-disable-next-line react/prop-types
function CartShopProduct({ id, photo, title, price, quantity }) {
   const dispacth = useAppDispatch();
   return (
      <>
         <div className="flex justify-between items-center">
            <div className="">
               <img src={photo} alt="" />
               <div className="">
                  <h3>{title}</h3>
                  <p>Qty: {quantity}</p>
                  <p>price: ${price}</p>
               </div>
            </div>
            <RxCross1
               className="cursor-pointer"
               onClick={() => dispacth(removeFromCart(id))}
            />

         </div>
         
      </>
   );
}

export default CartShopProduct;