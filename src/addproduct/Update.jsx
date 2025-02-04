import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context";


function Update() {




   const { id } = useParams();
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();

   const [shart, setShart] = useState({});

   useEffect(() => {
      axios(`${import.meta.env.VITE_API_URL}/sharts/${id}`)
         .then((res) => {
            setShart(res.data)
         })
   }, [id]);



   const { name, price, photo, _id } = shart || {}



   const handlersubmite = async (e) => {

       if (!user) {
          navigate('/logine');
          return;
       } else {
          e.preventDefault();

          
          const formData = new FormData(e.target);
          const upddatas = Object.fromEntries(formData);
          
          try {
             // API কল
             const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/shart/${_id}`, upddatas);

             // রেসপন্স চেক
             if (data.modifiedCount > 0) {
                Swal.fire({
                   title: "Updated!",
                   text: "Your success has been updated.",
                   icon: "success"
                });
                e.target.reset();
                navigate(-1); 
             } else {
                Swal.fire({
                   title: "No changes",
                   text: "No changes were made to the file.",
                   icon: "info"
                });
             }
          } catch (error) {
             console.log(error);
             Swal.fire({
                title: "Error",
                text: "An error occurred while updating.",
                icon: "error"
             });
          }
       }

      



   };

   return (
      <>

         <div className="container mx-auto mt-4">
            <h3 className="text-4xl font-bold text-center">Update</h3>
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
                              defaultValue={name}
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
                              defaultValue={price}
                              type="number"
                              placeholder="Enter coffee details"
                           />
                        </li>
                     </ul>
                  </div>

                  <div className="p-5 mt-3">
                     <label htmlFor="Photo" className="block mb-2 font-semibold">
                        Photo
                     </label>
                     <input
                        className="w-full p-2 border border-gray-300 rounded"
                        name="photo"
                        id="photo"
                        defaultValue={photo}
                        type="text"
                        placeholder="Enter photo URL"
                     />

                     <button
                        type="submit"
                        className="mt-4 w-full p-2 font-semibold bg-[#D2B48C] border border-gray-300 rounded"
                     >
                        update shart
                     </button>
                  </div>
               </form>




            </div>

         </div>


      </>
   );
}

export default Update;