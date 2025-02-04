import axios from "axios";
import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context";


function AddProduct() {

   const navigate = useNavigate();

   const { user } = useContext(AuthContext)




   const handlersubmite = async (e) => {
      e.preventDefault();

      
       // navigate হুক ব্যবহার

      if (!user) {
         navigate('/logine'); 
         return; 
      } else {
         const formData = new FormData(e.target);
         const datas = Object.fromEntries(formData);
         console.log(datas);
         

         try {
            // ডেটা সার্ভারে পোস্ট করা
            const response = await axios.post(
               `${import.meta.env.VITE_API_URL}/shart`,
               datas
            );

            if (response.data.insertedId) {
               Swal.fire({
                  title: "Success!",
                  text: "Data has been successfully submitted.",
                  icon: "success",
                  draggable: true
               });
            }
            e.target.reset();
            navigate('/'); 

         } catch (error) {
            console.log(error);
            Swal.fire({
               title: "Error!",
               text: "Something went wrong. Please try again later.",
               icon: "error"
            });
         }
      }
   }   
   return (
      <>
         
         
         <div className="container mx-auto mt-4">
            <h3 className="text-4xl font-bold text-center">Product Add</h3>
            <div className="">

            
            

               <form onSubmit={handlersubmite} className="font-semibold">
                  <div className="p-5">
                     <ul className="flex space-x-4">
                        <li className="w-full sm:w-[48%]">
                           <label htmlFor="name" className="block mb-2 font-semibold">
                              Name
                           </label>
                           <input
                              className="w-full p-2 border border-gray-300 rounded"
                              name="name"
                              id="name"
                              type="text"
                              placeholder="Enter coffee name"
                           />
                        </li>
                        <li className="w-full sm:w-[48%]">
                           <label htmlFor="Chef" className="block mb-2 font-semibold">
                              Chef
                           </label>
                           <input
                              className="w-full p-2 border border-gray-300 rounded"
                              name="Chef"
                              id="Chef"
                              type="text"
                              placeholder="Enter coffee chef"
                           />
                        </li>
                     </ul>
                  </div>

                  <div className="p-5">
                     <ul className="flex space-x-4">
                        <li className="w-full sm:w-[48%]">
                           <label htmlFor="supplier" className="block mb-2 font-semibold">
                              Supplier
                           </label>
                           <input
                              className="w-full p-2 border border-gray-300 rounded"
                              name="supplier"
                              id="supplier"
                              type="text"
                              placeholder="Enter coffee supplier"
                           />
                        </li>
                        <li className="w-full sm:w-[48%]">
                           <label htmlFor="Taste" className="block mb-2 font-semibold">
                              Taste
                           </label>
                           <input
                              className="w-full p-2 border border-gray-300 rounded"
                              name="Taste"
                              id="Taste"
                              type="text"
                              placeholder="Enter coffee taste"
                           />
                        </li>
                     </ul>
                  </div>

                  <div className="p-5">
                     <ul className="flex space-x-4">
                        <li className="w-full sm:w-[48%]">
                           <label htmlFor="category" className="block mb-2 font-semibold">
                              Category
                           </label>
                           <input
                              className="w-full p-2 border border-gray-300 rounded"
                              name="category"
                              id="category"
                              type="text"
                              placeholder="Enter coffee category"
                           />
                        </li>
                        <li className="w-full sm:w-[48%]">
                           <label htmlFor="details" className="block mb-2 font-semibold">
                              Details
                           </label>
                           <input
                              className="w-full p-2 border border-gray-300 rounded"
                              name="details"
                              id="details"
                              type="text"
                              placeholder="Enter coffee details"
                           />
                        </li>
                        <li className="w-full sm:w-[48%]">
                           <label htmlFor="price" className="block mb-2 font-semibold">
                              Price
                           </label>
                           <input
                              className="w-full p-2 border border-gray-300 rounded"
                              name="price"
                              id="price"
                              type="number"
                              placeholder="Enter coffee details"
                           />
                        </li>
                     </ul>
                  </div>

                  <div className="p-5 mt-3">
                     <label htmlFor="photo" className="block mb-2 font-semibold">
                        Photo
                     </label>
                     <input
                        className="w-full p-2 border border-gray-300 rounded"
                        name="photo"
                        id="photo"
                        type="text"
                        placeholder="Enter photo URL"
                     />

                     <button
                        type="submit"
                        className="mt-4 w-full p-2 font-semibold text-white bg-red-700 border border-gray-300 rounded"
                     >
                        Add shart
                     </button>
                  </div>
               </form>




            </div>

         </div>
         
         
      </>
   );
}

export default AddProduct;



// function ServerFrom() {


//    const handlersubmite = (e) => {
//       e.preventDefault();


//       const formData = new FormData(e.target);


//       const datas = Object.fromEntries(formData);
//       console.log(datas);

//       fetch('http://localhost:3000/productss', {
//          method: "POST",
//          headers: {
//             'content-type': 'application/json'
//          },
//          body: JSON.stringify(datas)
//       })
//          .then((res) => res.json())
//          .then((data) => {
//             e.target.reset();
//             if (data.insertedId) {
//                Swal.fire({
//                   title: "Good job!",
//                   text: "You have Add!",
//                   icon: "success"
//                });
//             }

//          })
//    }
//    return (
//       <>
         

//       </>
//    );
// }

// export default ServerFrom;