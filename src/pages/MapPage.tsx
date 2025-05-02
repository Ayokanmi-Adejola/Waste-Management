import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NigeriaMap from "@/components/NigeriaMap";

const MapPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Waste Management Map</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Find waste collectors near you across Nigeria
            </p>
          </div>
        </div>
        <NigeriaMap />
      </main>
      <Footer />
    </div>
  );
};

export default MapPage;
