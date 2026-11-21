import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return(
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;