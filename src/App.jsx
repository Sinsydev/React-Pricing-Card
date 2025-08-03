 import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Your components
import PricingHead from './component/PricingHead'
import Pricingcard1 from './component/Pricingcard1';
import Pricingcard2 from './component/Pricingcard2';
import Pricingcard3 from './component/Pricingcard3';
import Footer from './component/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-3xl text-center mb-10">Pricing Section</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <PricingHead work="Choose your plan" />
        <Pricingcard1 />
        <Pricingcard2 />
        <Pricingcard3 />
      </div>

      <Footer />
    </div>
  );
}

export default App;


