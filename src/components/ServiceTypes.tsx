
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceTypes = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <polyline points="3 7 12 12 21 7" />
          <path d="M12 12v9" />
          <path d="M3 7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
        </svg>
      ),
      title: "Household Waste",
      description: "Regular collection of general household waste and garbage.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <polyline points="4 14 10 14 10 20" />
          <polyline points="20 10 14 10 14 4" />
          <path d="M10.7 21A10 10 0 0 1 3.4 13.4L13.2 3.6a10 10 0 0 1 7.3 7.3L10.7 21z" />
        </svg>
      ),
      title: "Recyclable Materials",
      description: "Collection of paper, plastic, glass and metal for recycling.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M15 9h.01" />
          <path d="M9 15h.01" />
          <circle cx="15" cy="15" r="1" />
          <circle cx="9" cy="9" r="1" />
        </svg>
      ),
      title: "Bulk Waste",
      description: "Removal of large items like furniture and appliances.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M8 4h8" />
          <rect width="14" height="10" x="5" y="10" rx="1" ry="1" />
          <path d="M6 18h12a1 1 0 0 0 1-1v-5h-5a2 2 0 0 0-1.46.6L12 13l-1.54-1.4A2 2 0 0 0 9 11H4v6a1 1 0 0 0 1 1z" />
        </svg>
      ),
      title: "Business Waste",
      description: "Commercial waste management for offices and retail.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We connect you with local collectors who can handle various types of waste
            management needs across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow border">
              <CardHeader>
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTypes;
