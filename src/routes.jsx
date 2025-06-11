import Layout from "./pages/Layout";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <App /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
];

export default routes;
