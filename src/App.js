import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./CustomerRouters/CustomerRouters";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
