import { createBrowserRouter } from "react-router-dom";

import FirstSection from "../components/FirstSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function App() {
  const router = createBrowserRouter([{}, {}]);
  return (
    <>
      <div className="flex justify-between w-full h-screen">
        <Sidebar />
        <div className="flex flex-col w-4/5 ">
          <Navbar />
          <div className="bg-stone-900  h-[91%] content">
            <FirstSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
