import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {

  const Layout=()=>{
    return(
     <div className="app">
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
     </div>
    )
  }

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },{
          path:'/services',
          element:<Services></Services>
        },{
          path:'/about-us',
          element:<About></About>
        },{
          path:'/contacts',
          element:<Contact></Contact>
        },
      ]
    },
  ])

  return (
      <div>
         <RouterProvider router={router}></RouterProvider>
      </div>
     )
}

export default App;
