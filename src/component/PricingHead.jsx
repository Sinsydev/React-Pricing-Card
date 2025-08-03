 function PricingHead({ work }) {
  return (
    <div className="bg-green-500 text-white text-center p-8 mb-10 rounded-lg border border-white transition-all duration-500 hover:bg-[#011609] hover:capitalize cursor-pointer">
      <h2 className="text-3xl font-bold font-serif">{work}</h2>
    </div>
  );
}

export default PricingHead;
