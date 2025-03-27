
import grid from "./images/grid-1.jpg";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import DeviceTable from "./DeviceTable";
import logo from './images/image copy.png'
import MovingBar from "./MovingBar";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col border relative">
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-white/50" />

      <div className="relative z-10 flex flex-col flex-grow justify-between items-center p-4">
        <div className="w-full flex flex-wrap justify-between items-center px-4 md:px-8 py-1">
        <div className="text-lg md:text-3xl font-extrabold flex items-center"><img src={logo} className='' alt="" />Switchmap-NG</div>
          <div className="hidden md:flex justify-around items-center space-x-3 md:space-x-5">
            <div className="text-sm md:text-base font-normal">Demo</div>
            <div className="text-sm md:text-base">Testimonials</div>
            <div className="text-sm md:text-base">FAQs</div>
          </div>
          <div>
            <button className="p-2 md:p-2.5 rounded-lg md:rounded-xl text-white bg-green-700 text-xs md:text-lg font-bold flex justify-center items-center gap-2 hover:bg-green-600 cursor-pointer group transition-all duration-500 ease-in-out">
              Get Started
              <FaArrowRight className="text-xs md:text-lg text-white font-bold -rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-center items-center space-y-4 md:space-y-6">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 px-2 py-1 bg-white/30 backdrop-blur-md rounded-lg shadow-lg shadow-white">
              <FaCheckCircle className="text-green-700 text-xs md:text-lg" /> Real-time Network Insights
            </div>
            <div className="flex items-center gap-2 px-2 py-1 bg-white/30 backdrop-blur-md rounded-lg shadow-lg shadow-white">
              <FaCheckCircle className="text-green-700 text-xs md:text-lg" /> Monitors OSI Layer 1-3 Data
            </div>
            <div className="flex items-center gap-2 px-2 py-1 bg-white/30 backdrop-blur-md rounded-lg shadow-lg shadow-white">
              <FaCheckCircle className="text-green-700 text-xs md:text-lg" /> Real-time Device Mapping
            </div>
          </div>

          <div className="text-center text-2xl md:text-5xl tracking-wide font-extrabold leading-relaxed md:leading-relaxed home-head">
            The <span className="titled-bg text-white rounded-xl">smartest</span> way to navigate <br className="hidden md:block" />
            & map efficiently - Switchmap - NG
          </div>

          <div className="text-center text-xs md:text-sm font-normal drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
            Switchmap - NG is a Python 3-based inventory system that analyzes network-connected <br className="hidden md:block" />
            devices, reporting OSI model data including port status, VLANs, ARP details, and system <br className="hidden md:block" />
            health for efficient network management and monitoring.
          </div>
        </div>

        <div className="w-full flex-grow flex justify-center items-end ">
        <div className="rounded-t-3xl w-full max-w-4xl shadow-green-400 shadow-2xl   transition-all duration-600 ease-in hover:shadow-[10px_-10px_150px_rgba(74,222,128,1)]">
            <DeviceTable />
          </div>
        </div>

        <MovingBar/>
      </div>
    </div>
  );
};

export default Home;
