

function Collections() {
   return (
      <>
         <div className="h-screen lg:h-[70ch] flex flex-col justify-center gap-16 lg:flex-row items-center bg-purple-100 mt-14 lg:px-32 px-5">
            <div className="flex justify-center w-full lg:w-2/4 pt-6">
               <img src="https://media.gettyimages.com/id/1264527020/photo/dog-with-shirt-and-glasses.jpg?s=612x612&w=0&k=20&c=1YDqkeCQuAyj3hq-17TjoqQTsV3XLM_C5iE6KoB8Q9A=" alt="" />
            </div>
            <div className="w-full lg:w-2/4 space-y-4 pt-4 text-center lg:text-start">
               <h2 className="text-4xl font-semibold text-ExtraDarkColor">Best Summer callection</h2>

               <h3>Sale Get Up To 60% off</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet maiores reiciendis earum corporis velit vel tempore repudiandae sequi dignissimos laborum totam fugiat voluptatum?</p>

               <button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium bg-red-600">Shop Now</button>
            </div>
         </div>

      </>
   );
}

export default Collections;