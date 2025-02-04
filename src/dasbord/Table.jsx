
function Table() {
   return (
      <>
         <div className="overflow-x-auto py-4">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
               <thead>
                  <tr>
                     <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">ID</th>
                     <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Name</th>
                     <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Age</th>
                     <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">Status</th>
                  </tr>
               </thead>
               <tbody>
            
                     <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300 text-sm">had</td>
                        <td className="px-4 py-2 border-b border-gray-300 text-sm">creat</td>
                        <td className="px-4 py-2 border-b border-gray-300 text-sm">name</td>
                        <td className="px-4 py-2 border-b border-gray-300 text-sm">price</td>
                     </tr>
               
               </tbody>
            </table>
         </div>
         
         
      </>
   );
}

export default Table;