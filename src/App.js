import SideBarPage from "./pages/SideBarPage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <SideBarPage />
      <Routes>
        <Route path="/items" element = {<ProductPage />} exact/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
