import React, { useState } from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Footer from './Footer';

const Faq = () => {
  const faqs = [
    {
      title: "What is Webflow and why is it the best website builder?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "How does Webflow compare to other platforms?",
      description: "Webflow offers a unique visual development approach that combines the power of coding with the simplicity of a drag-and-drop interface."
    },
    {
      title: "Is Webflow suitable for beginners?",
      description: "Yes! Webflow has a learning curve, but with its tutorials and community, beginners can create professional websites without writing code."
    },
    {
      title: "Can I use Webflow for e-commerce?",
      description: "Absolutely! Webflow provides robust e-commerce features including product management, checkout customization, and secure payment processing."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-100 px-6 py-12 md:py-16 lg:py-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-green-600 mb-6 md:mb-8">Frequently Asked Questions</h2>

      <div className="max-w-3xl w-full space-y-4 md:space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`bg-white shadow-md rounded-lg p-4 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${openIndex === index ? 'border-green-500 border-2' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">{faq.title}</h3>
              <span className={`text-lg md:text-xl p-2 md:p-3 rounded-full transition-all duration-600 ease-out ${openIndex === index ? 'bg-green-600 text-white ' : 'bg-white text-purple-700 '}`}>
                <MdOutlineArrowForwardIos className={`transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-90 text-white' : 'text-purple-700'}`} />
              </span>
            </div>

           
            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openIndex === index ? 'max-h-60' : 'max-h-0'}`}>
              <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">{faq.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Faq;