import { Link } from "react-router-dom";


function ErrorPage() {
   return (
      <>
         
         <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-2xl mt-4">Page Not Found</p>
            <p className="mt-2">The page you are looking for does not exist.</p>
            <Link
               to={-1}
               className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
               Go Back Home
            </Link>
         </div>
         
      </>
   );
}

export default ErrorPage;