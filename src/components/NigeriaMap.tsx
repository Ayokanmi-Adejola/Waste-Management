import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icon
const customIcon = (color: string) => new L.Icon({
  iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Define waste collector data with coordinates
const wasteCollectors = [
  {
    id: 1,
    name: "Lagos Waste Solutions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTO8Gsb-_XZbq8vJeryKjEsMvHrhpZdLwWA&s",
    rating: 4.8,
    reviews: 124,
    area: "Lagos Island",
    services: ["Household", "Recycling"],
    coordinates: [6.4550, 3.4044], // Lagos
    color: "green"
  },
  {
    id: 2,
    name: "Abuja Clean Initiative",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Y3rkhaEX6zTdEADxKAaZVDrzSBKoXrVF-w&s",
    rating: 4.6,
    reviews: 98,
    area: "Central Abuja",
    services: ["Commercial", "Bulk Waste"],
    coordinates: [9.0765, 7.3986], // Abuja
    color: "blue"
  },
  {
    id: 3,
    name: "Eco Warriors Port Harcourt",
    image: "https://images.unsplash.com/photo-1591461712364-5c8a11d8b8c3?auto=format&fit=crop&w=200&h=200",
    rating: 4.9,
    reviews: 156,
    area: "Port Harcourt",
    services: ["Recycling", "Household"],
    coordinates: [4.8156, 7.0498], // Port Harcourt
    color: "red"
  },
  {
    id: 4,
    name: "Kano Recyclers",
    image: "https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&w=200&h=200",
    rating: 4.5,
    reviews: 87,
    area: "Kano",
    services: ["Recycling", "Commercial"],
    coordinates: [12.0022, 8.5920], // Kano
    color: "orange"
  },
  {
    id: 5,
    name: "Ibadan Waste Management",
    image: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=200&h=200",
    rating: 4.3,
    reviews: 112,
    area: "Ibadan",
    services: ["Household", "Bulk Waste"],
    coordinates: [7.3775, 3.9470], // Ibadan
    color: "yellow"
  },
  {
    id: 6,
    name: "Enugu Green Solutions",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=200&h=200",
    rating: 4.7,
    reviews: 93,
    area: "Enugu",
    services: ["Household", "Recycling"],
    coordinates: [6.4584, 7.5464], // Enugu
    color: "green"
  },
  {
    id: 7,
    name: "Benin City Collectors",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=200&h=200",
    rating: 4.4,
    reviews: 76,
    area: "Benin City",
    services: ["Commercial", "Household"],
    coordinates: [6.3350, 5.6037], // Benin City
    color: "blue"
  },
  {
    id: 8,
    name: "Calabar Waste Solutions",
    image: "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?auto=format&fit=crop&w=200&h=200",
    rating: 4.6,
    reviews: 82,
    area: "Calabar",
    services: ["Recycling", "Bulk Waste"],
    coordinates: [4.9757, 8.3417], // Calabar
    color: "red"
  }
];

// Component to handle user's location
const LocationMarker = ({ setUserLocation }: { setUserLocation: (position: [number, number]) => void }) => {
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setUserLocation([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map, setUserLocation]);

  return null;
};

// Calculate distance between two coordinates in kilometers
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

const NigeriaMap = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [nearestCollectors, setNearestCollectors] = useState(wasteCollectors);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Center of Nigeria
  const nigeriaCenter: [number, number] = [9.0820, 8.6753];

  useEffect(() => {
    if (userLocation) {
      // Sort collectors by distance from user
      const sortedCollectors = [...wasteCollectors]
        .map(collector => ({
          ...collector,
          distance: calculateDistance(
            userLocation[0],
            userLocation[1],
            collector.coordinates[0],
            collector.coordinates[1]
          )
        }))
        .sort((a, b) => a.distance - b.distance);

      // Filter by selected service if any
      const filteredCollectors = selectedService
        ? sortedCollectors.filter(collector => 
            collector.services.includes(selectedService)
          )
        : sortedCollectors;

      setNearestCollectors(filteredCollectors);
    } else {
      // If no user location, just filter by service
      const filteredCollectors = selectedService
        ? wasteCollectors.filter(collector => 
            collector.services.includes(selectedService)
          )
        : wasteCollectors;

      setNearestCollectors(filteredCollectors);
    }
  }, [userLocation, selectedService]);

  // Get all unique services
  const allServices = Array.from(
    new Set(wasteCollectors.flatMap(collector => collector.services))
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Waste Collectors Near You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use the map to locate waste collectors across Nigeria. 
            Enable location services to find the nearest collectors to your current location.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2 justify-center">
          <Button 
            variant={selectedService === null ? "default" : "outline"}
            onClick={() => setSelectedService(null)}
          >
            All Services
          </Button>
          {allServices.map(service => (
            <Button
              key={service}
              variant={selectedService === service ? "default" : "outline"}
              onClick={() => setSelectedService(service)}
            >
              {service}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-[500px] w-full">
                  {typeof window !== 'undefined' && (
                    <MapContainer 
                      center={nigeriaCenter} 
                      zoom={6} 
                      style={{ height: '100%', width: '100%' }}
                      whenReady={() => setMapLoaded(true)}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      
                      {/* User location marker */}
                      <LocationMarker setUserLocation={setUserLocation} />
                      {userLocation && (
                        <Marker 
                          position={userLocation}
                          icon={new L.Icon({
                            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
                            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowSize: [41, 41]
                          })}
                        >
                          <Popup>
                            <div className="text-center">
                              <strong>Your Location</strong>
                            </div>
                          </Popup>
                        </Marker>
                      )}
                      
                      {/* Waste collector markers */}
                      {nearestCollectors.map(collector => (
                        <Marker 
                          key={collector.id}
                          position={collector.coordinates}
                          icon={customIcon(collector.color)}
                        >
                          <Popup>
                            <div className="text-center">
                              <h3 className="font-bold">{collector.name}</h3>
                              <p className="text-sm">{collector.area}</p>
                              <div className="flex justify-center gap-1 my-1">
                                {collector.services.map((service, i) => (
                                  <span 
                                    key={i}
                                    className="bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full text-xs font-medium"
                                  >
                                    {service}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-2">
                                <Link to={`/schedule?collector=${collector.id}`}>
                                  <Button size="sm" className="w-full">Request Pickup</Button>
                                </Link>
                              </div>
                            </div>
                          </Popup>
                        </Marker>
                      ))}
                    </MapContainer>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  {userLocation ? 'Nearest Collectors' : 'Available Collectors'}
                </h3>
                
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {nearestCollectors.length > 0 ? (
                    nearestCollectors.map(collector => (
                      <div key={collector.id} className="border rounded-lg p-3 hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={collector.image} 
                              alt={collector.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium">{collector.name}</h4>
                            <div className="flex items-center text-sm text-gray-500">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              <span>{collector.area}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-amber-500 font-medium">
                              <span>★ {collector.rating}</span>
                            </div>
                            {'distance' in collector && (
                              <div className="text-xs text-gray-500">
                                {(collector as any).distance.toFixed(1)} km
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {collector.services.map((service, i) => (
                            <span 
                              key={i}
                              className="bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full text-xs font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 flex justify-end">
                          <Link to={`/schedule?collector=${collector.id}`}>
                            <Button size="sm">Request Pickup</Button>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No collectors found for the selected service.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NigeriaMap;
