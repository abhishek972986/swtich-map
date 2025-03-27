
import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiLocationArrowOutline } from "react-icons/ti";
import logo from './images/image copy.png';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-6">
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[300px] mt-10'>
        <div className="text-center p-6">
          <div className='font-bold text-xl'>Community</div>
          <div className='text-gray-600 italic tracking-wide'>Stack</div>
          <div className='text-gray-600 italic tracking-wide'>News</div>
          <div className='text-gray-600 italic tracking-wide'>Contact Us</div>
        </div>

        <div className="text-center p-6">
          <div className='font-bold text-xl'>Social Media</div>
          <div className='text-gray-600 italic tracking-wide'>FAQs</div>
          <div className='text-gray-600 italic tracking-wide'>Blog</div>
          <div className='text-gray-600 italic tracking-wide'>Support Us</div>
        </div>

        <div className="text-center p-6">
          <div className='font-bold text-xl'>Development</div>
          <div className='text-gray-600 italic tracking-wide'>Github</div>
        </div>

        <div className="rounded-xl flex flex-col gap-5 p-6 bg-gray-200">
          <div className='font-bold text-xl'>Subscribe</div>
          <div className='flex items-center'>
            <input type="email" placeholder='Enter the email' className='w-full sm:w-auto flex-grow rounded p-3 text-xl focus:border-0 focus:outline-0 border bg-white' />
            <span className='p-4 bg-blue-600 rounded ml-2'>
              <TiLocationArrowOutline className='text-2xl font-bold text-white' />
            </span>
          </div>
          <div className='text-gray-600 italic tracking-wide'>Hello, we are Switchmap-NG. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</div>
        </div>
      </div>

      <div className='text-center mt-10 flex justify-center'><hr className='w-[85%]' /></div>
      
      <div className="w-full flex flex-wrap justify-between items-center px-4 md:px-8 py-4 mt-10">
        <div className="text-lg md:text-3xl font-extrabold flex items-center">
          <img src={logo} alt="" className="w-10 h-10 mr-2" />Switchmap-NG
        </div>
        <div className="flex flex-wrap justify-around items-center space-x-3 md:space-x-5 text-sm md:text-base mt-4 md:mt-0">
          <div className="cursor-pointer">Terms</div>
          <div className="cursor-pointer">Privacy</div>
          <div className="cursor-pointer">Cookies</div>
        </div>
        <div className='flex items-center justify-center gap-3 mt-4 md:mt-0'>
          <span className="p-2 rounded-full border text-center text-2xl font-bold cursor-pointer hover:bg-gray-300 transition-all"><FaLinkedin /></span>
          <span className="p-2 rounded-full border text-center text-2xl font-bold cursor-pointer hover:bg-gray-300 transition-all"><FaFacebookF /></span>
          <span className="p-2 rounded-full border text-center text-2xl font-bold cursor-pointer hover:bg-gray-300 transition-all"><FaTwitter /></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
