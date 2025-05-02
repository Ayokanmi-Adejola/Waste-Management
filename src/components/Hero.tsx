
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 py-10 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6">
              <span className="text-primary">Clean Nigeria,</span> Waste Management Solution
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
              The premier platform connecting you with reliable waste collectors across Nigeria.
              Schedule pickups, track collections, and contribute to a cleaner environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link to="/schedule">
                <Button size="default" className="text-sm md:text-base px-6 md:px-8 py-2 md:py-3">
                  Schedule Pickup
                </Button>
              </Link>
              <Link to="/map">
                <Button size="default" variant="destructive" className="text-sm md:text-base px-6 md:px-8 py-2 md:py-3">
                  Find Nearby Collectors
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative block">
            <div className="bg-white p-3 md:p-4 rounded-lg shadow-xl mx-auto max-w-sm md:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1663706481629-b5a90449747a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuJTIwbmlnZXJpYXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Waste Collection in Lagos"
                className="w-full h-auto rounded"
              />
              <div className="absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 bg-accent p-4 md:p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <p className="font-bold text-xl md:text-2xl">500+</p>
                  <p className="text-xs md:text-sm">Local Collectors</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 md:-top-4 -left-3 md:-left-4 bg-primary-100 p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <p className="font-bold text-xl md:text-2xl">24/7</p>
                <p className="text-xs md:text-sm">Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary-100 rounded-full opacity-50"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-accent opacity-20 rounded-full"></div>
    </div>
  );
};

export default Hero;
