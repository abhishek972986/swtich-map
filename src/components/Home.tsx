import grid from "./images/grid-1.jpg";
import { FaArrowRight, FaCheckCircle, FaMicrosoft, FaGithub } from "react-icons/fa";
import { SiPostman, SiZapier } from "react-icons/si";
import DeviceTable from "./DeviceTable";
import logo from './images/image copy.png';

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col border relative overflow-x-hidden">
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-white/78" />

      <div className="relative z-10 flex flex-col flex-grow justify-between items-center ">
        
        {/* Navbar */}
        <div className="w-full flex flex-wrap justify-between items-center px-4 md:px-8 py-3">
          <div className="text-lg md:text-3xl font-extrabold flex items-center">
            <img src={logo} className="h-8 md:h-12 lg:h-16 w-auto object-contain" alt="Logo" />
            <span className="ml-2">Switchmap-NG</span>
          </div>

          <div className="hidden md:flex justify-around items-center space-x-3 md:space-x-5">
            <div className="text-sm md:text-base font-normal">Demo</div>
            <div className="text-sm md:text-base">Testimonials</div>
            <div className="text-sm md:text-base">FAQs</div>
          </div>

          <div>
            <button className="p-1.5 md:p-2.5 rounded-lg md:rounded-xl text-white bg-green-700 text-xs md:text-lg font-bold flex justify-center items-center gap-2 hover:bg-green-600 transition-all duration-500 ease-in-out">
              Get Started
              <FaArrowRight className="text-xs md:text-lg text-white font-bold -rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center w-full px-4 sm:px-6 md:px-8 space-y-4 md:space-y-6 text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 px-2 py-1 bg-white/30 backdrop-blur-md rounded-lg shadow-lg shadow-white text-xs md:text-lg">
              <FaCheckCircle className="text-green-700" /> Real-time Network Insights
            </div>
            <div className="flex items-center gap-2 px-2 py-1 bg-white/30 backdrop-blur-md rounded-lg shadow-lg shadow-white text-xs md:text-lg">
              <FaCheckCircle className="text-green-700" /> Monitors OSI Layer 1-3 Data
            </div>
            <div className="flex items-center gap-2 px-2 py-1 bg-white/30 backdrop-blur-md rounded-lg shadow-lg shadow-white text-xs md:text-lg">
              <FaCheckCircle className="text-green-700" /> Real-time Device Mapping
            </div>
          </div>

          <div className="text-center text-3xl md:text-6xl tracking-wide font-extrabold leading-relaxed md:leading-relaxed home-head sm:my-5 md:my-6">
            The <span className="titled-bg text-white rounded-xl px-2 py-1">smartest</span> way to navigate <br className="hidden md:block" />
            & map efficiently - Switchmap - NG
          </div>

          <div className="text-center text-xs md:text-sm font-normal drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] max-w-[90%] md:max-w-2xl">
            Switchmap - NG is a Python 3-based inventory system that analyzes network-connected <br className="hidden md:block" />
            devices, reporting OSI model data including port status, VLANs, ARP details, and system <br className="hidden md:block" />
            health for efficient network management and monitoring.
          </div>
        </div>

        {/* Device Table */}
        <div className="w-full flex-grow flex justify-center items-end ">
          <div className="rounded-t-3xl w-full max-w-4xl shadow-[10px_-10px_150px_rgba(74,222,128,1)]">
            <DeviceTable />
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="page3 px-4 sm:px-6 md:px-8 py-4 md:py-6">
          <div className="card flex flex-wrap justify-center sm:flex-row items-center w-full gap-4">
            <div className="cards card1 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
              <FaMicrosoft className="text-white" />
              <h1 className="text-white moving-font">MICROSOFT</h1>
            </div>
            <div className="cards card2 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
              <SiZapier className="text-white" />
              <h1 className="moving-font text-white">Zapier</h1>
            </div>
            <div className="cards card3 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
              <FaGithub className="text-white" />
              <h1 className="moving-font text-white">GITHUB</h1>
            </div>
            <div className="cards card4 flex items-center gap-2 text-sm sm:text-lg md:text-2xl">
              <SiPostman className="text-white" />
              <h1 className="moving-font text-white">POSTMAN</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
