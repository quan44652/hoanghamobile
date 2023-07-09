import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Order from "./Pages/Order/Order";
import Account from "./Pages/Account/Account";
import YourOrderList from "./Pages/Account/OrderList";
import History from "./Pages/Account/History";
import Wishlist from "./Pages/Account/wishlist";
import Info from "./Pages/Account/Info";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/san-pham" element={<ProductListPage />} />
        <Route path="/san-pham/1" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        <Route path="/account" element={<Account />}>
          <Route path="order" element={<YourOrderList />} />
          <Route path="history" element={<History />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="info" element={<Info />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
