import banner from '../../../assets/banner.jpeg'

const HeroSection = () => {
    return (
        <div>
             <section className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Smart Library Management
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Organize, track, and manage your library books and members easily. Built for schools, universities, and public libraries.
          </p>
          <a
            href="/books"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow transition"
          >
            Get Started
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
          src={banner}
            // src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
            // alt="Library"
            className="w-full h-[300px] rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
        </div>
    );
};

export default HeroSection;