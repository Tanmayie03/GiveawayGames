import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AllGames from "../components/AllGames";
import Contact from "../components/Contact";
import FirstSection from "../components/FirstSection";
import Navbar from "../components/Navbar";
import "./index.css";
import CardId from "../components/CardId";
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
        { path: "/cardId/:id", element: <CardId /> },
      ],
    },
  ]);

  return (
    <div className="w-full h-screen no-scrollbar bg-stone-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
