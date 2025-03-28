
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import imagecopy from './images/image.png';

const About = () => {
  return (
    <div className='h-auto w-full  flex flex-col justify-around '>
      
      <div className=' px-6 grid grid-cols-1 md:grid-cols-2 w-full justify-center place-content-center mt-10 gap-8'>
        <div className='place-self-center w-full md:w-1/2 text-start text-4xl md:text-6xl leading-relaxed'>
          <span className='home-head text-4xl md:text-6xl text-green-600 transition-all duration-300 hover:text-green-800 about-head font-extrabold'>Why</span> <br />
          Switchmap-NG
        </div>
        <div className='w-full md:w-1/1.5 place-self-center text-start text-lg md:text-xl about-head'>
          Switchmap-NG is a Python 3-powered network <br />
          inventory system that provides real-time <br />
          mapping, intelligent monitoring, and proactive <br />
          alerts for seamless network management.
        </div>
      </div>


      <div className='w-full flex justify-center items-center mt-10 px-3'>
        <div className='flex flex-wrap sm:flex-col md:flex-row justify-center items-center max-w-[1100px] w-full gap-8'>
          {[
            {
              title: "Real-Time Network Mapping & Topology Visualization",
              description: "SwitchMap-NG dynamically maps network-connected devices, providing a live view of your infrastructure. By analyzing OSI model data, it ensures accurate topology visualization, helping administrators detect changes instantly."
            },
            {
              title: "Intelligent Monitoring & Proactive Alerts",
              description: "Track crucial network metrics, including port status, VLAN configurations, ARP tables, and system health. With built-in monitoring and real-time alerts, SwitchMap-NG helps prevent failures before they occur, reducing downtime and improving network reliability."
            },
            {
              title: "Python 3-Powered Performance & Scalability",
              description: "Designed with efficiency in mind, SwitchMap-NG leverages Python 3 for high-performance data processing and seamless automation. It scales effortlessly across networks of all sizes, ensuring fast and accurate inventory tracking."
            },
            {
              title: "Optimized for Network Engineers & IT Professionals",
              description: "With an intuitive interface and deep insights into OSI model layers, SwitchMap-NG simplifies troubleshooting, network auditing, and security analysis. Whether you're a network administrator, cybersecurity analyst, or IT manager, this tool enhances decision-making and network control."
            }
          ].map((card, index) => (
            <div 
              key={index}
              className='w-full sm:w-[90%] md:w-[500px] h-[270px]  flex flex-col gap-3 p-3 rounded-xl about-boxes '
            >
              <div className='text-2xl md:text-3xl text-green-600 about-head'>{card.title}</div>
              <p className="text-base md:text-lg about-base ">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div 
        className="w-full flex flex-col justify-center items-center h-[100px] md:h-[130px] gap-2 mt-10 p-4  " 
        style={{ backgroundImage: `url(${imagecopy})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className='w-full text-xl md:text-3xl font-bold text-center text-white'>Start learning Switchmap-NG!!</div>
        <div className='flex justify-center items-center w-full'>
          <button className='p-3 md:p-2 rounded-xl flex items-center bg-black text-white text-lg md:text-xl gap-2 transition-all duration-600 hover:bg-white cursor-pointer hover:text-black '>
            Read from docs 
            <IoArrowForwardCircleSharp className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
