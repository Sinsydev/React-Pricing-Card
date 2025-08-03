 
 import { FaStar, FaCheck, FaTimes } from 'react-icons/fa';

function Pricingcard2() {
  return (
    <div
      className="bg-[#252525] rounded-xl shadow-md hover:shadow-lg hover:bg-[#2e2e2e] transition-all duration-300 h-full relative"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* Optional "Most Popular" badge */}
      <div className="absolute top-4 right-4 bg-green-400 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
        Most Popular
      </div>

      <div className="p-8 text-center border-b border-white/10">
        <div className="w-[70px] h-[70px] bg-gradient-to-br from-green-400/20 to-green-400/5 rounded-full flex items-center justify-center mx-auto mb-5">
          <FaStar className="text-green-400 text-2xl" />
        </div>
        <h3 className="text-2xl font-semibold mb-3">Professional</h3>
        <div className="mb-4">
          <span className="text-green-400 text-xl align-top">$</span>
          <span className="text-4xl font-bold text-green-400">29</span>
          <span className="text-sm text-gray-400">/month</span>
        </div>
        <p className="text-sm text-gray-400">Ideal for startups and growing teams</p>
      </div>

      <div className="p-8">
        <ul className="space-y-4 text-sm">
          <li className="flex items-center">
            <FaCheck className="text-green-400 mr-2" /> 10 Projects
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-400 mr-2" /> 50GB Storage
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-400 mr-2" /> Priority Support
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-400 mr-2" /> Email & SMS Alerts
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-400 mr-2" /> Advanced Analytics
          </li>
          <li className="flex items-center opacity-70 text-gray-400">
            <FaTimes className="text-red-500 mr-2" /> Custom Domain
          </li>
        </ul>
      </div>

      <div className="p-6 pt-0">
        <button className="w-full py-3 font-semibold text-white border border-white/10 rounded-xl hover:border-green-400 hover:bg-green-400/10 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Pricingcard2;

