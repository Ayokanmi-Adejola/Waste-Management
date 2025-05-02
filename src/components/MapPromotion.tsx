import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MapPromotion = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                  alt="Map of Nigeria" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Interactive Nigeria Map</h3>
                    <p>Find waste collectors in your area with our interactive map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Find Waste Collectors <span className="text-primary">Near You</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our interactive map helps you locate the nearest waste management services across Nigeria. 
              Enable your location to see collectors in your area, filter by service type, and connect with them instantly.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/map">
                  <Button size="lg" className="w-full sm:w-auto">
                    Open Nigeria Map
                  </Button>
                </Link>
                <Link to="/collectors">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Browse All Collectors
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-500">
                Available in major cities across Nigeria including Lagos, Abuja, Port Harcourt, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary-100 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 -left-24 w-48 h-48 bg-accent opacity-20 rounded-full"></div>
    </section>
  );
};

export default MapPromotion;
