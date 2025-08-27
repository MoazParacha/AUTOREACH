import img2 from "../assets/img2.png";

const Prospecting = () => {
    
    return (
        <div className="text-center py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">

            <div className="relative overflow-hidden flex justify-center">
                <div className="animate-slide-bounce">
                    <p className="text-2xl font-bold text-gray-900 flex items-center">
                      🚀 Built & Powered by 
                       <img  src={img2} className="inline-block h-12 ml-3 hover:scale-110 transition-transform duration-300" alt="logo" />
                    </p>
                </div>
            </div>

            
            {/* Heading */}
            <div className="mt-6 sm:mt-9 font-extrabold text-2xl sm:text-4xl text-gray-900">
                <div>AI-Driven Prospecting & Outreach at Scale</div>
            </div>

            {/* Subtext */}
            <div className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 px-4 sm:px-0">
                <p>Automate lead generation, nurture prospects, and close more deals effortlessly.</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 px-4 sm:px-0">
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition w-full sm:w-auto">
                    🚀 Start Prospecting
                </button>
                <button className="px-6 py-3 border border-gray-400 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition w-full sm:w-auto">
                    Learn More →
                </button>
            </div>
        </div>
    )
}

export default Prospecting;
