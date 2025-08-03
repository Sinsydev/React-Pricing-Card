 import { FaQuoteLeft } from 'react-icons/fa';

function Footer() {
  return (
    <div className="mt-16 flex justify-center">
      <div
        className="max-w-xl bg-[#252525] rounded-xl p-10 relative shadow-md"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <FaQuoteLeft className="text-green-400 text-3xl opacity-30 absolute top-5 left-5" />
        <p className="text-base text-gray-300 pl-6 mb-6 leading-relaxed relative">
          Switching to this service was one of the best decisions we've made.
          The pricing is transparent and the features are exactly what we needed.
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-400 mr-4">
            <img
              src="card pricing.jpg"
              alt="Customer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold">Sinsy Frontend</h4>
            <p className="text-sm text-green-400">Marketing Director</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;


