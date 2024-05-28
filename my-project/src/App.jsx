import FirstSection from "../components/FirstSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <>
      <div className="flex justify-between w-full h-screen">
        <Sidebar />
        <div className="flex flex-col w-4/5 bg-red-400 ">
          <Navbar />
          <div className="overflow-y-hidden content">
            <FirstSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
