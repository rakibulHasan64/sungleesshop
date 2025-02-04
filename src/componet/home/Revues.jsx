import RevueCard from "../../layout/RevueCard";


function Revues() {
   return (
      <>
         <div className=" mt-9 justify-center lg:px-32 px-5 ">
            <h1 className="font-semibold text-center text-ExtraDarkColor text-4xl lg:mt-14 mt-24">Feedvack Corner</h1>
         </div>

         <div className="flex flex-col items-center xl:flex-row gap-5 justify-center py-4  mx-auto container p-2">
            <RevueCard name="Enily Davis" />
            <RevueCard name="Masison Mitchell" />
            <RevueCard name="Aubrey Carter" />
            


         </div>
         
      </>
   );
}

export default Revues;
