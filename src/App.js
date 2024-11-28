import './App.css';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';


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
        },
      ]
    }
  ])

  return (
      <div>
         <RouterProvider router={router}></RouterProvider>
      </div>
     )
}

export default App;
