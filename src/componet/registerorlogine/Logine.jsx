// import { yupResolver } from "@hookform/resolvers/yup";
// import { loginValidation } from "../../vadition/vadition";
// import { useForm } from "react-hook-form";

// import { toast } from "react-toastify";
// import { getProfile } from "../../database/firebaseConfig";
// import { logineUser } from "../../database/firevaseulites";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setLogineReduxData } from "../../database/AuthSlice";


// function Logine() {


//    const despach = useDispatch();
//    const navegate = useNavigate();



//    const {
//       register,
//       handleSubmit,
//       reset,
//       formState: { errors },
//    } = useForm({
//       resolver: yupResolver(loginValidation),
//    });




   
      

//       const res = await logineUser(data);

//       if (res.error) {
//          toast.error(res.code);
//       } else {
//          // logine user
//          let userProfile = await getProfile(res.id);


//          const logineUderInfo = {
//             id: res.id,
//             email: res.email,
//             name: userProfile.name,
//             role: userProfile.role,
//          };

//          despach(setLogineReduxData(logineUderInfo));
//          reset();
//          navegate("/dasbord")
      
//       }
      
//     }
   
//    return (
//       <>
//          <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

//                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
//                   <div>
//                      <label
//                         htmlFor="email"
//                         className="block text-sm font-medium text-gray-700"
//                      >
//                         Email Address
//                      </label>
//                      <input
//                         type="email"
//                         id="email"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         placeholder="Enter your email"
//                         {...register("email")}
//                      />

//                      {errors.email && (
//                         <span className="text-red-400">
//                            {errors.email?.message}
//                         </span>
//                      )}
//                   </div>

//                   <div>
//                      <label
//                         htmlFor="password"
//                         className="block text-sm font-medium text-gray-700"
//                      >
//                         Password
//                      </label>
//                      <input
//                         type="password"
//                         id="password"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         placeholder="Enter your password"
//                         {...register("password")}
//                      />

//                      {errors.password && (
//                         <span className="text-red-400">
//                            {errors.password?.message}
//                         </span>
//                      )}
//                   </div>

//                   <button
//                      type="submit"
//                      className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   >
//                      Login
//                   </button>
//                </form>

//                <div className="mt-6 flex items-center justify-between">
//                   <hr className="w-full border-gray-300" />
//                   <span className="px-2 text-sm text-gray-500">OR</span>
//                   <hr className="w-full border-gray-300" />
//                </div>

//                <button
         
//                   className="mt-4 w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//                >
//                   Login with Google
//                </button>

//                <p className="mt-4 text-center text-sm text-gray-600">
//                   {` Don't have an account? `}
//                   <a
//                      href="/register"
//                      className="text-indigo-600 hover:underline"
//                   >
//                      Register here
//                   </a>
//                </p>
//             </div>
//          </div>
         
//       </>
//    );
// }

// export default Logine;