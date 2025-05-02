
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Collector {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  area: string;
  services: string[];
  description: string;
}

const collectors: Collector[] = [
  {
    id: 1,
    name: "Lagos Waste Solutions",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=200&h=200",
    rating: 4.8,
    reviews: 124,
    area: "Lagos Island",
    services: ["Household", "Recycling"],
    description: "We specialize in efficient household waste collection and recycling services in Lagos Island."
  },
  {
    id: 2,
    name: "Abuja Clean Initiative",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=200&h=200",
    rating: 4.6,
    reviews: 98,
    area: "Central Abuja",
    services: ["Commercial", "Bulk Waste"],
    description: "Leading commercial waste management service in Abuja, specializing in bulk waste removal."
  },
  {
    id: 3,
    name: "Eco Warriors Port Harcourt",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=200&h=200",
    rating: 4.9,
    reviews: 156,
    area: "Port Harcourt",
    services: ["Recycling", "Household"],
    description: "Eco-friendly waste collection with a focus on recycling and sustainable disposal methods."
  },
  {
    id: 4,
    name: "Kano Waste Management",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=200&h=200",
    rating: 4.7,
    reviews: 89,
    area: "Kano City",
    services: ["Household", "Business"],
    description: "Reliable waste collection services for both residential and commercial clients in Kano."
  },
  {
    id: 5,
    name: "Green Enugu Solutions",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=200&h=200",
    rating: 4.5,
    reviews: 76,
    area: "Enugu",
    services: ["Recycling", "Bulk Waste"],
    description: "Environmentally conscious waste management focusing on proper recycling and bulk waste removal."
  },
  {
    id: 6,
    name: "Ibadan Waste Collectors",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=200&h=200",
    rating: 4.4,
    reviews: 62,
    area: "Ibadan",
    services: ["Household", "Commercial"],
    description: "Serving Ibadan with timely and efficient waste collection for homes and businesses."
  }
];

const CollectorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [areaFilter, setAreaFilter] = useState("all");

  const filteredCollectors = collectors.filter(collector => {
    const matchesSearch = collector.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collector.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesService = serviceFilter === "all" ||
                         collector.services.some(service => service.toLowerCase() === serviceFilter.toLowerCase());

    const matchesArea = areaFilter === "all" ||
                      collector.area.toLowerCase().includes(areaFilter.toLowerCase());

    return matchesSearch && matchesService && matchesArea;
  });

  const areas = [...new Set(collectors.map(collector => collector.area))];
  const services = [...new Set(collectors.flatMap(collector => collector.services))];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Waste Collectors in Nigeria</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our network of verified waste collectors. Filter by location or service type to find the perfect match for your needs.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Search</label>
                <Input
                  placeholder="Search by name or description"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Filter by Service</label>
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    {services.map((service, index) => (
                      <SelectItem key={index} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Filter by Location</label>
                <Select value={areaFilter} onValueChange={setAreaFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {areas.map((area, index) => (
                      <SelectItem key={index} value={area}>{area}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollectors.map((collector) => (
              <Card key={collector.id} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={collector.image}
                    alt={collector.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground rounded-full px-3 py-1 text-sm font-medium">
                    ★ {collector.rating}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{collector.name}</h3>

                  <div className="mb-4 text-gray-500 text-sm flex items-center justify-between">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{collector.area}</span>
                    </div>
                    <span>{collector.reviews} reviews</span>
                  </div>

                  <p className="text-gray-700 mb-4">{collector.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {collector.services.map((service, i) => (
                      <span
                        key={i}
                        className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Link to={`/collectors/${collector.id}`}>
                      <Button variant="outline">View Profile</Button>
                    </Link>
                    <Link to={`/schedule?collector=${collector.id}`}>
                      <Button>Request Pickup</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCollectors.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No collectors found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search term</p>
              <Button onClick={() => {
                setSearchTerm("");
                setServiceFilter("");
                setAreaFilter("");
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CollectorsPage;
