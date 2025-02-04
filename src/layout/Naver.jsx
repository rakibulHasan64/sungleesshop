import { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import ShopCartItems from "../componet/shoppage/ShopCartItems";
import { useAppSelector } from "../redux/hook";
import { AuthContext } from "../context";
import { auth } from "../database/firevaseauth";



function Naver() {


   const { user } = useContext(AuthContext)
   const { signOutUser } = useContext(AuthContext)
   const [showCart, setShowCart] = useState(false);


   const [menu, setMenu] = useState(false);

   const handleChange = () => {
      setMenu(!menu);
   };

   const closeMenu = () => {
      setMenu(false);
   };

   const handlesignout = () => {
      signOutUser(auth)
         .then(() => {
            console.log("User is logged out");
         })
         .catch((err) => {
            console.error("Error during sign out:", err);
         });
   };



   const cartCount = useAppSelector((state) => state.cart?.length);



   return (
      <>
         {showCart && <ShopCartItems setShowCart={setShowCart} />}
         <header className=" fixed w-full z-10">
            <section>
               {/* desktop menu section  */}
               <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-PrimaryColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                  <div>
                     <Link>
                        <h1 className=" text-2xl font-semibold text-ExtraDarkColor cursor-pointer">
                           StyleNestle
                        </h1>
                     </Link>
                  </div>

                  {/* nav elements */}
                  <nav className=" hidden lg:flex flex-row items-center text-lg font-semibold gap-8 text-ExtraDarkColor">
                     <Link
                        to={"/"}

                        className=" hover:text-black "
                     >
                        Home
                     </Link>
                     <Link
                        to={"dasbord/shop"}

                        className=" hover:text-black "
                     >
                        Shop
                     </Link>
            
                     
                         <Link
                           to="/dasbord/addproduct" // এখানে PrivateRoute এর মাধ্যমে AddProduct পেজে যাওয়া হবে
                           className="hover:text-black transition duration-300 ease-in-out cursor-pointer"
                        >
                           Addproduct
                        </Link>
                     
                     
                     
                     {/* <Link
                        to="/dasbor"

                        className=" hover:text-black "
                     >
                        Products
                     </Link> */}


                     <Link
                        to="dasbord/product"

                        className=" hover:text-black "
                     >
                        Products
                     </Link>


                     {
                        user ? (
                           <>
                              <span>{user?.email}</span>
                              <button onClick={handlesignout} className="bg-red-500 text-white px-4 py-2 rounded">
                                 Log Out
                              </button>


                           </>
                        ) : (
                           <Link
                              to="logine"

                              className=" hover:text-black px-3 py-2 bg-red-600 rounded-md"
                           >
                              login
                           </Link>

                        )
                     }

                  </nav>

                  {/* nav icons */}
                  <div className="flex items-center gap-5">
                     <Link to={"/reghter"}><FaUser size={25} className=" text-DarkColor" /></Link>
                     <div className=" text-DarkColor relative">
                        <FaShoppingCart
                           size={25}
                           className=" cursor-pointer"
                           onClick={() => setShowCart(true)}
                        />
                        <div className=" absolute top-[-15px] right-[-10px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center">
                           {cartCount}
                        </div>
                     </div>
                  </div>

                  {/* menu icon */}
                  <div className=" lg:hidden flex items-center">
                     {menu ? (
                        <AiOutlineClose size={28} onClick={handleChange} />
                     ) : (
                        <RiMenu2Line size={28} onClick={handleChange} />
                     )}
                  </div>
               </div>

               {/* mobile menu section */}
               <div
                  className={`${menu ? "translate-x-0" : "-translate-x-full"
                     } lg:hidden flex flex-col absolute bg-SecondaryColor text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit`}
               >
                  <Link
                     to={"/"}

                     className=" hover:text-DarkColor transition duration-300 ease-in-out cursor-pointer"
                     onClick={closeMenu}
                  >
                     Home
                  </Link>
                  <Link
                     to={"dasbord/shop"}

                     className=" hover:text-black "
                  >
                     Shop
                  </Link>
                  <Link
                     to="/dasbord/addproduct" // এখানে PrivateRoute এর মাধ্যমে AddProduct পেজে যাওয়া হবে
                     className="hover:text-black transition duration-300 ease-in-out cursor-pointer"
                  >
                     Addproduct
                  </Link>
                  {
                     user && <Link
                        to="dasbord/product"

                        className=" hover:text-black "
                     >
                        Products
                     </Link>
                  }
                  <Link
                     to="review"

                     className=" hover:text-red-500 "
                     onClick={closeMenu}
                  >
                     Review
                  </Link>
               </div>
            </section>
         </header>
         <div className="py-24">
            <Outlet />
         </div>




      </>
   );
}

export default Naver;
