import { RxCross1 } from "react-icons/rx";
import { useAppSelector } from "../../redux/hook";
import CartShopProduct from "./CartShopProduct";


// eslint-disable-next-line react/prop-types
function ShopCartItems({ setShowCart }) {

   const data = useAppSelector((state) => state.cart);
   


   const getTotal = () => {
      let total = 0;
      data?.forEach((item) => (total = total + item.price * item.quantity));
      return total;
   }
   return (
      <>
         <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
            <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
               <RxCross1
                  className=" absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
                  onClick={() => setShowCart(false)}
               />
               <h3 className="pt-6 text-lg font-medium text-DarkColor uppercase">You cart</h3>
               <div className=" mt-6 space-y-2">
                  {data?.map((item) => (
                     <CartShopProduct

                        key={item.id}
                        id={item.id}
                        photo={item.photo}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                     />
                  ))}

               </div>
               <div className="flex justify-between items-center font-medium text-xl py-4">
                  <p>Totle:</p>
                  <p>${getTotal()}.00</p>
               </div>

               <button className="bg-ExtraDarkColor text-white w-full py-2 font-medium">Proceed to By</button>
               <button className="border-2 border-DarkColor text-black w-full my-2 py-2">Go to cart</button>
            </div>

         </div>

      </>
   );
}

export default ShopCartItems;