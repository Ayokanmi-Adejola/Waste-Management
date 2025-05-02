
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScheduleForm from "@/components/ScheduleForm";

const SchedulePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Schedule a Waste Pickup</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to request a waste collection. 
              Local collectors in your area will receive your request and respond promptly.
            </p>
          </div>
          
          <ScheduleForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SchedulePage;
