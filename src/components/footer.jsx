import img1 from "../assets/img1.png";

const Footer = () => {
    return (
        <div className="bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 pt-8">
                
                
                <div>
                    <img src={img1} className="h-13 w-auto" alt="logo" />
                    <div className="text-gray-600 text-sm mt-4">
                        <p>Streamline your outreach with AI-powered</p>
                        <p>automation. Find leads, send personalized</p>
                        <p>emails, and close more deals effortlessly.</p>
                    </div>
                    <div className="mt-4">
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                            Try AutoReach360 Free
                        </button>
                    </div>
                </div>

                
                <div>
                    <div className="text-black text-lg font-bold">Product</div>
                    <div className="text-gray-600 flex flex-col">
                        {["Pricing", "Lead Finder", "Cold Emailing", "Email Personalization", "Unified Inbox"].map((item, idx) => (
                            <button key={idx} className="mt-3 text-left hover:text-blue-500 transition duration-300">{item}</button>
                        ))}
                    </div>
                </div>

                
                <div>
                    <div className="text-black text-lg font-bold">Resources</div>
                    <div className="text-gray-600 flex flex-col">
                        {["Blog", "Case Studies", "Cold Email Masterclass", "Wall of Love", "Product Updates"].map((item, idx) => (
                            <button key={idx} className="mt-4 text-left hover:text-blue-500 transition duration-300">{item}</button>
                        ))}
                    </div>
                </div>

                
                <div>
                    <div className="text-black text-lg font-bold">Support</div>
                    <div className="text-gray-600 flex flex-col">
                        {["FAQs - Email Sequence", "FAQs - Email Tracking", "SMTP Settings"].map((item, idx) => (
                            <button key={idx} className="mt-4 text-left hover:text-blue-500 transition duration-300">{item}</button>
                        ))}
                    </div>
                    <div className="mt-6">
                        <button className="px-5 py-2 border border-blue-500 text-blue-500 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition">
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="text-gray-600 p-6 text-left text-sm border-t mt-8">
                © 2025 AutoReach360. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
