import SideBarPage from "./pages/SideBarPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Error from "./components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SideBarPage />
      <Routes>
        <Route path="/items" element = {<ProductPage />} exact/>
        <Route path="/Error" element = {<Error />} exact/>
        <Route path="/items/:id" element = {<ProductDetailPage />} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
