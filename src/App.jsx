import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFounded } from "./pages/NotFounded";
import { Toaster } from "./components/ui/toaster";

function App() {
  

  return ( 
    <>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          // Define the routes for the application/
          <Route index element={<Home />} />
          // Define a route for the home page/
          <Route path="*" element={<NotFounded/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
