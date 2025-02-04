import { Route, Routes } from "react-router-dom";
import ErrorPage from "./layout/ErrorPage";
import Naver from "./layout/Naver";
import Index from "./componet/home/Index";
import ShopMenu from "./componet/shoppage/ShopMenu";
import AddProduct from "./addproduct/AddProduct";
import Products from "./addproduct/Products";
import Update from "./addproduct/Update";
import Reghterss from "./page/Reghterss";
import Logines from "./page/Logines";
import Table from "./dasbord/Table";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    
      {/* <Route path="prt" element={<PrivateRoute />}> */}
      <Route path="/" element={<Naver />}>
        <Route path="reghter" element={<Reghterss />} />
        <Route path="/logine" element={<Logines />} />
        <Route index element={<Index />} />
        <Route path="dasbord/shop" element={<ShopMenu />} />
        <Route path="/dasbord/addproduct" element={ <AddProduct />} />
        <Route path="/dasbord/product" element={<Products />} />
        <Route path="dasbord/update/:id" element={<Update />} />

        <Route path="dasbor" element={<Table />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      {/* </Route> */}
    </Routes>
  );
}

export default App;





