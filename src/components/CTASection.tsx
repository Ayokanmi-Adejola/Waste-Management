
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Manage Your Waste Efficiently?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
          Join thousands of Nigerians who have simplified their waste management.
          Schedule your first pickup today!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/schedule">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Schedule a Pickup
            </Button>
          </Link>
          <Link to="/collectors">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-600">
              Browse Collectors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
