import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import TrackOrder from "./pages/TrackOrder";
import AdminLogin from "./pages/AdminLogin";

import { CartProvider } from "./context/CartContext";

function App() {

  return (

    <CartProvider>

      <BrowserRouter>

        <Routes>

          {/* Default Route */}
          <Route
            path="/"
            element={<Navigate to="/menu" replace />}
          />

          {/* Customer Menu */}
          <Route
            path="/menu"
            element={<Menu />}
          />

          {/* Cart */}
          <Route
            path="/cart"
            element={<Cart />}
          />

          {/* Live Order Tracking */}
          <Route
            path="/track/:id"
            element={<TrackOrder />}
          />

          <Route
  path="/admin-login"
  element={<AdminLogin />}
/>

          {/* Kitchen Dashboard */}
          <Route
            path="/admin"
            element={<Admin />}
          />

          {/* If user opens wrong URL */}
          <Route
            path="*"
            element={<Navigate to="/menu" replace />}
          />

        </Routes>

      </BrowserRouter>

    </CartProvider>

  );

}

export default App;