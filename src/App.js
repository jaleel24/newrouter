import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/error";
import ProductDetailPage from "./pages/ProductDetails";
//1st (Newer )method of definitions of the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      {path: "/products/:id" , element:<ProductDetailPage />}
    ],
  }
]);

// //2nd approach to defines routes as per previous version
// // import route, createRoutesFromElements  and simply create routeDefinites as follows

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />}/>
//     <Route path='/products' element={ <Products />}/>
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions)
function App() {
  return <RouterProvider router={router} />;
}

export default App;
