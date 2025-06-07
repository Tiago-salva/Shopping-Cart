import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Products from "./pages/Products";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <Products />,
  },
];

export default routes;
