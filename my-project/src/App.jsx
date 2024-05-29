import FirstSection from "../components/FirstSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <>
      <div className="flex justify-between w-full h-screen">
        <Sidebar />
        <div className="flex flex-col w-4/5 ">
          <Navbar />
          <div className="bg-gray-900 h-[94%] content">
            <FirstSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
