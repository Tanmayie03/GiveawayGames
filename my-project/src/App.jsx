import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AllGames from "../components/AllGames";
import Contact from "../components/Contact";
import FirstSection from "../components/FirstSection";
import Navbar from "../components/Navbar";
const Layout = () => (
  <Sidebar>
    <Navbar />
    <Outlet />
  </Sidebar>
);
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <FirstSection /> },
        { path: "/allGames", element: <AllGames /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <div className="w-full h-screen ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
