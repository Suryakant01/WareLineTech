// components/HeroSection.jsx
import Image from "next/image";

const HeroSection2 = ({ 
  backgroundImage, 
  buttonGradient, 
  title, 
  description, 
  imageSrc 
}) => {
  return (
    <div
      className="relative min-h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-20">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <nav className="text-gray-500 text-sm mb-4">
            <span>Home &gt; Industries &gt; </span>
            <span className="text-black font-medium">Insurtech App Development Company</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            {description}
          </p>
          <button
            className={`py-3 px-8 text-white font-semibold text-lg rounded-md ${buttonGradient}`}
          >
            Get a Free Quote
          </button>
        </div>

        {/* Right Content */}
        <div className="mt-12 lg:mt-0 lg:ml-12 relative lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-96 h-96 lg:w-[30rem] lg:h-[30rem]">
            <Image
              src={imageSrc}
              alt="Hero Section Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute top-2 left-2 bg-green-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h11M9 21V3m4 18V3m5 18V3"
                />
              </svg>
            </div>
            <div className="absolute bottom-2 right-2 bg-yellow-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;