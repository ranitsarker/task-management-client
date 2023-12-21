import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:max-h-96 lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-green-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Empower Your Productivity Journey with TaskZen
            </h1>
  
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Discover seamless collaboration and efficient task management. TaskPilot provides a user-friendly platform to streamline your workflow and achieve your goals effortlessly.
            </p>
  
            <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/dashboard"
              className="block w-full rounded border border-green-600 bg-green-600 px-12 py-3 text-base font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Let’s Explore
            </Link>
          </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner;
  