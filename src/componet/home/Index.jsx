import Banner from "./Banner";
import Collections from "./Collections";
import Footer from "./Footer";
import Fueture from "./Fueture";
import Product from "./Product";
import Revues from "./Revues";
import Shop from "./Shop";


function Index() {
   return (
      <>
         <Banner />
         <Shop />
         <Collections />
         <Fueture />
         <Product />
         <Revues />
         <Footer />
      </>
   );
}

export default Index;