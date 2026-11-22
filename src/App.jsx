import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return(
    <BrowserRouter> 
      <Routes>
        <Route element={<DashboardLayout />}>
         <Route path="/" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;