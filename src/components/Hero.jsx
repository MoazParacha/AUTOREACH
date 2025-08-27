const Hero = () => {
  return (
    <div className="text-center py-12 sm:py-16 bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
      
      {/* Tagline */}
      <div className="inline-block px-5 sm:px-9 py-2 bg-white text-indigo-600 rounded-full text-xs sm:text-sm font-semibold shadow-md">
        ✨ Supercharge Your Outreach with AI-Powered Emails
      </div>

      {/* Heading */}
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-6 leading-snug sm:leading-tight">
        <div>Effortless Email Outreach,</div>
        <div>More Replies, More Deals!</div>
      </div>

      {/* Subtext */}
      <div className="text-sm sm:text-lg leading-relaxed mt-6 px-4 sm:px-0">
        <p>Connect, engage, and convert leads effortlessly with our AI-driven cold email automation.</p>
        <p className="mt-2.5">Simplify follow-ups and boost response rates today!</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6 px-4 sm:px-0">
        <button className="px-6 sm:px-7 py-3 sm:py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-500">
          🚀 Get Started Free
        </button>
        <button className="px-6 sm:px-7 py-3 sm:py-4 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300">
          📅 Book a Demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
