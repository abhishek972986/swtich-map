import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiLocationArrowOutline } from "react-icons/ti";
import logo from './images/image copy.png';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-6">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[300px] mt-10">
        <div className="text-center md:text-left p-4">
          <div className="font-bold text-xl">Community</div>
          <div className="text-gray-600 italic tracking-wide">Stack</div>
          <div className="text-gray-600 italic tracking-wide">News</div>
          <div className="text-gray-600 italic tracking-wide">Contact Us</div>
        </div>

        <div className="text-center md:text-left p-4">
          <div className="font-bold text-xl">Social Media</div>
          <div className="text-gray-600 italic tracking-wide">FAQs</div>
          <div className="text-gray-600 italic tracking-wide">Blog</div>
          <div className="text-gray-600 italic tracking-wide">Support Us</div>
        </div>

        <div className="text-center md:text-left p-4">
          <div className="font-bold text-xl">Development</div>
          <div className="text-gray-600 italic tracking-wide">Github</div>
        </div>

        <div className="rounded-xl flex flex-col gap-5 p-6 bg-gray-200">
          <div className="font-bold text-xl text-center md:text-left">Subscribe</div>
          <div className="flex items-center w-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full rounded p-3 text-lg focus:border-0 focus:outline-0 border bg-white" 
            />
            <span className="p-4 bg-blue-600 rounded ml-2 cursor-pointer">
              <TiLocationArrowOutline className="text-2xl font-bold text-white" />
            </span>
          </div>
          <div className="text-gray-600 italic tracking-wide text-center md:text-left">
            Hello, we are Switchmap-NG. Our goal is to revolutionize how companies engage with their clients & teams.
          </div>
        </div>
      </div>

      <div className="text-center mt-10"><hr className="w-[85%] mx-auto" /></div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-6 mt-10 gap-6">
        <div className="text-lg md:text-3xl font-extrabold flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          Switchmap-NG
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-sm md:text-base">
          <div className="cursor-pointer">Terms</div>
          <div className="cursor-pointer">Privacy</div>
          <div className="cursor-pointer">Cookies</div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="p-2 rounded-full border text-center text-2xl cursor-pointer hover:bg-gray-300 transition-all">
            <FaLinkedin />
          </span>
          <span className="p-2 rounded-full border text-center text-2xl cursor-pointer hover:bg-gray-300 transition-all">
            <FaFacebookF />
          </span>
          <span className="p-2 rounded-full border text-center text-2xl cursor-pointer hover:bg-gray-300 transition-all">
            <FaTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
