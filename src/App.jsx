import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ScrollUp from "./Components/ScrollUp/ScrollUp.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Loading from "./Components/Loading/Loading.jsx";

// Lazy load pages
const Shop = lazy(() => import("./Pages/Shop.jsx"));
const Product = lazy(() => import("./Pages/Product"));
const ProductCategory = lazy(() => import("./Pages/ProductCategory"));
const ProductDetail = lazy(() =>
  import("./Components/ProductDetail/ProductDetail")
);
const Contact = lazy(() => import("./Pages/Contact"));
const LoginSignup = lazy(() => import("./Pages/LoginSignup"));
const Cart = lazy(() => import("./Pages/Cart"));
const About = lazy(() => import("./Pages/About"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage.jsx"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" errorElement={<ErrorPage />} element={<Shop />} />
          <Route
            path="/products"
            errorElement={<ErrorPage />}
            element={<Product />}
          >
            <Route
              path=":category"
              errorElement={<ErrorPage />}
              element={<ProductCategory />}
            />
          </Route>
          <Route
            path="/product/:productId"
            errorElement={<ErrorPage />}
            element={<ProductDetail />}
          />
          <Route
            path="/contact"
            errorElement={<ErrorPage />}
            element={<Contact />}
          />
          <Route
            path="/login"
            errorElement={<ErrorPage />}
            element={<LoginSignup />}
          />
          <Route path="/cart" errorElement={<ErrorPage />} element={<Cart />} />
          <Route
            path="/about"
            errorElement={<ErrorPage />}
            element={<About />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <ScrollUp />
    </BrowserRouter>
  );
}

export default App;
