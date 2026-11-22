import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import DashboardLayout from "./layouts/DashboardLayout";
import ProductsPage from "./pages/ProductsPage";
import AddProductpage from "./pages/AddProductPage";

function App() {
  return(
    <BrowserRouter> 
      <Routes>
        <Route element={<DashboardLayout />}>
         <Route path="/" element={<DashboardPage />} />
         <Route path="/products" element={<ProductsPage />} />
         <Route path="/add-product" element={<AddProductpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;