const Usesalesmarketing = () => {
  return (
    <div className="bg-black text-white py-12 sm:py-16">
      <div className="text-center max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-2xl sm:text-4xl font-bold">
          Designed for Every Sales & Marketing Use Case
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-6 text-base sm:text-lg">
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">👥 Lead Generation</button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">📅 Book More Meetings</button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">📢 Promote Services</button>
        </div>

        <hr className="max-w-md mx-auto my-8 border-t border-gray-600" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          
          {/* Left Column */}
          <div className="p-6 rounded text-left">
            <div className="font-bold text-2xl sm:text-3xl">
              Find and Reach the Right Prospects
            </div>

            <div className="flex items-start gap-4 mt-6 text-base sm:text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-10 h-10 sm:w-14 sm:h-14 text-green-400" fill="currentColor">
                <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
              </svg>
              <div>Access 70M+ verified B2B contacts instantly.</div>
            </div>

            <div className="flex items-start gap-4 mt-6 text-base sm:text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-10 h-10 sm:w-14 sm:h-14 text-green-400" fill="currentColor">
                <path d="M9.375 233.4C3.375 239.4 0 247.5 0 256v128c0 8.5 3.375 16.62 9.375 22.62S23.5 416 32 416h32V224H32C23.5 224 15.38 227.4 9.375 233.4zM464 96H352V32c0-17.62-14.38-32-32-32S288 14.38 288 32v64H176C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296zM630.6 233.4C624.6 227.4 616.5 224 608 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S640 392.5 640 384V256C640 247.5 636.6 239.4 630.6 233.4z"></path>
              </svg>
              <div>AI-powered lead scoring & segmentation.</div>
            </div>

            <div className="flex items-start gap-4 mt-6 text-base sm:text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 h-10 sm:w-14 sm:h-14 text-green-400" fill="currentColor">
                <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"></path>
              </svg>
              <div>Automated cold outreach & follow-ups.</div>
            </div>

            <div className="mt-8">
              <button className="inline-block px-6 sm:px-8 py-3 bg-blue-500 text-white rounded-lg text-lg sm:text-xl shadow-md hover:bg-blue-600 transition w-full sm:w-auto">
                Get Started →
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center p-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-32 h-32 sm:w-40 sm:h-40 text-blue-600">
              <path fill="currentColor" d="M448 80V128C448 172.2 347.7 208 224 208C100.3 208 0 172.2 0 128V80C0 35.82 100.3 0 224 0C347.7 0 448 35.82 448 80zM393.2 214.7C413.1 207.3 433.1 197.8 448 186.1V288C448 332.2 347.7 368 224 368C100.3 368 0 332.2 0 288V186.1C14.93 197.8 34.02 207.3 54.85 214.7C99.66 230.7 159.5 240 224 240C288.5 240 348.3 230.7 393.2 214.7V214.7zM54.85 374.7C99.66 390.7 159.5 400 224 400C288.5 400 348.3 390.7 393.2 374.7C413.1 367.3 433.1 357.8 448 346.1V432C448 476.2 347.7 512 224 512C100.3 512 0 476.2 0 432V346.1C14.93 357.8 34.02 367.3 54.85 374.7z"></path>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Usesalesmarketing;
