const Subscription = () => {
  return (
    <div className="bg-gray-100 py-16 sm:py-24 text-center px-4 sm:px-8">
      {/* Heading */}
      <div className="text-2xl sm:text-3xl font-bold text-gray-800">
        🚀 Get Started with AI-Powered Outreach!
      </div>

      {/* Subtext */}
      <div className="leading-relaxed mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base">
        <p>
          Join 10,000+ professionals automating their cold emails. No credit
          card required.
        </p>
      </div>

      {/* Form */}
      <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
        <div className="relative w-full sm:w-80">
          <span
            className="absolute left-4 top-3 text-gray-400"
            aria-hidden="true"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 512 512"
              className="w-5 h-5"
            >
              <path
                fill="currentColor"
                d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"
              />
            </svg>
          </span>
          <input
            id="email"
            type="email"
            placeholder="Enter your business email"
            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
          />
        </div>
        <button
          type="submit"
          className="px-5 sm:px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 text-sm sm:text-base w-full sm:w-auto"
        >
          🚀 Join Free Now
        </button>
      </form>

      {/* Features */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-3 sm:gap-6 text-gray-600 text-xs sm:text-sm">
        <div className="flex items-center gap-2 sm:gap-3">
          <div>📅</div>
          <div>7-day free trial</div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div>💳</div>
          <div>No credit card required</div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div>🔒</div>
          <div>Secure & encrypted</div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
