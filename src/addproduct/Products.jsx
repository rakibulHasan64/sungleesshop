import { MdDelete } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCard from "../redux/futer/useCard";

function Products() {
   const [sharts, refetch] = useCard();

   const handlerdelete = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
         if (result.isConfirmed) {
            const { data } = await axios.delete(
               `${import.meta.env.VITE_API_URL}/shart/${id}`
            );

            if (data.deletedCount > 0) {
               refetch();
               Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
               });
            }
         }
      });
   };

   return (
      <div className="container mx-auto mt-4">
         <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
               <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">No</th>
                  <th className="border px-4 py-2 text-left">Product Name</th>
                  <th className="border px-4 py-2 text-left">Price</th>
                  <th className="border px-4 py-2 text-left">Category</th>
                  <th className="border px-4 py-2 text-left">Actions</th>
               </tr>
            </thead>
            <tbody>
               {sharts?.map((item, index) => (
                  <tr key={item._id} className="odd:bg-gray-50 even:bg-white">
                     {/* ক্রমিক নম্বর */}
                     <td className="border px-4 py-2">{index + 1}</td>
                     {/* প্রোডাক্ট তথ্য */}
                     <td className="border px-4 py-2">{item.name}</td>
                     <td className="border px-4 py-2">{item.price}</td>
                     <td className="border px-4 py-2">{item.category}</td>
                     {/* Actions */}
                     <td className="border px-4 py-2">
                        <Link to={`/dasbord/update/${item._id}`}>
                           <button className="text-green-500 hover:text-red-700">
                              <FaEdit className="inline-block mr-2 text-2xl" />
                           </button>
                        </Link>
                        <button
                           className="text-red-500 hover:text-red-700"
                           onClick={() => handlerdelete(item._id)}
                        >
                           <MdDelete className="inline-block mr-2 text-2xl" />
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default Products;
