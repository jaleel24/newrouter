import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
//1st (Newer )method of definitions of the routes
const router = createBrowserRouter(
  [
    {path:'/', element:<Home />},
    {path:'/products', element:<Products />}
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
  return <RouterProvider router={router}/>
}

export default App;
