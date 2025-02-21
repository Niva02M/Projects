import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import Layout from "./components/Layout";

function App() {
  // Define routes using the latest syntax
  const router = createBrowserRouter([
    {
      path: "/", // Root route
      element: <Layout />, // Wrapper layout component
      children: [
        {
          index: true, // Default child route for "/"
          element: <Dashboard />,
        },
        {
          path: "cart", // "/cart"
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
