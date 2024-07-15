import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Shorts from "./components/Shorts";
import Videosidebar from "./components/Videosidebar";





const appRouter=createBrowserRouter([
  {
   path:"/",
   element: <Body/>,
   children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    },
    {
      path:"Demo",
      element:<Demo/>
    },
    {
      path:"shorts",
      element:<Shorts/>
    },
    {
      path:"videos",
      element:<Videosidebar/>
    },
    
   
   ]
  }
])
function App() {
  return (
    <Provider store={Store}>
    <div>
     <Head/>
     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
