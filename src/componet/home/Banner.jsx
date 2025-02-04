

function Banner() {
   return (
      <>
         <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-PrimaryColor">
            {/* content section  */}
            <div className=" space-y-4">
               <h1 className=" text-5xl font-semibold leading-tight text-ExtraDarkColor w-full lg:w-3/4">
                  Discovering and Defining Your Own Fashion!
               </h1>
               <p className=" w-full lg:w-3/4 text-DarkColor font-medium">
                  Each item is a carefully chosen masterpiece, promising not just
                  fashion but a reflection of your unique style.
               </p>

               <button className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium bg-red-600">
                  shop now
               </button>
            </div>

            {/* img section */}
            <div className=" bg-DarkColor p-5 rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl mt-10">
               <img className=" -ml-5 -mb-5" width={680} src="https://media.istockphoto.com/id/1838494239/photo/display-rack-full-of-various-sunglasses.jpg?s=612x612&w=0&k=20&c=cObLg84lK1lSiT6ocL11IRB2ZJyKmacLB40szXj5r5E=" alt="img" />
            </div>
         </div>

      </>
   );
}

export default Banner;