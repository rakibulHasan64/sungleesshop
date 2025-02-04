

function AllData() {
   return (
      <>
         <div className="container mx-auto py-20 bg-amber-100">
            <div className="w-1/2 mx-auto">
               <div className="flex justify-center items-center min-h-screen bg-gray-100">
                  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                     <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
                     <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-4">
                           <label htmlFor="name" className="block text-gray-700">Name</label>
                           <input
                              type="text"
                              id="name"
                              name="name"
                              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter your name"
                           />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                           <label htmlFor="email" className="block text-gray-700">Email</label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter your email"
                           />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                           <label htmlFor="password" className="block text-gray-700">Password</label>
                           <input
                              type="password"
                              id="password"
                              name="password"
                              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter your password"
                           />
                        </div>

                        {/* Photo URL Field */}
                        <div className="mb-6">
                           <label htmlFor="photoUrl" className="block text-gray-700">Photo URL</label>
                           <input
                              type="url"
                              id="photoUrl"
                              name="photoUrl"
                              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter your photo URL"
                           />
                           <a href="/login" className="mt-3 underline">Login Page</a>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full py-3 rounded-xl shadow-2xl shadow-red-600 text-white bg-red-600">
                           Register
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         
      </>
   );
}

export default AllData;