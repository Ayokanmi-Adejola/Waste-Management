import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const services = [
    {
      id: "household",
      title: "Household Waste",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <polyline points="3 7 12 12 21 7" />
          <path d="M12 12v9" />
          <path d="M3 7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
        </svg>
      ),
      shortDescription: "Regular collection of general household waste and garbage.",
      longDescription: "Our household waste collection service provides reliable, scheduled pickup of your everyday waste. We ensure proper disposal and offer flexible scheduling options to meet your needs.",
      benefits: [
        "Regular weekly or bi-weekly collection schedules",
        "Proper waste segregation and disposal",
        "Convenient door-to-door service",
        "Environmentally responsible waste management"
      ],
      pricing: [
        { name: "Basic Plan", price: "₦5,000/month", description: "Weekly collection of up to 3 bags" },
        { name: "Standard Plan", price: "₦8,000/month", description: "Weekly collection of up to 5 bags" },
        { name: "Premium Plan", price: "₦12,000/month", description: "Twice-weekly collection of up to 5 bags each time" }
      ],
      faqs: [
        { 
          question: "What types of household waste do you collect?", 
          answer: "We collect general household waste including food waste, packaging materials, and other non-hazardous items. We do not collect hazardous materials like batteries, chemicals, or electronic waste in our regular household collection." 
        },
        { 
          question: "What days do you collect household waste?", 
          answer: "Collection days vary by location. When you sign up, you'll be assigned specific collection days based on your area. You can also request preferred days during registration." 
        },
        { 
          question: "Do I need to sort my waste before collection?", 
          answer: "Basic sorting is recommended. We ask that you separate recyclables from general waste when possible. Detailed guidelines will be provided when you schedule your first pickup." 
        }
      ],
      testimonial: {
        quote: "The household waste collection service has been incredibly reliable. The collectors always arrive on schedule and are very professional. It's made managing our family's waste so much easier!",
        author: "Chioma Okafor, Lagos Resident",
        rating: 5
      }
    },
    {
      id: "recyclable",
      title: "Recyclable Materials",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <polyline points="4 14 10 14 10 20" />
          <polyline points="20 10 14 10 14 4" />
          <path d="M10.7 21A10 10 0 0 1 3.4 13.4L13.2 3.6a10 10 0 0 1 7.3 7.3L10.7 21z" />
        </svg>
      ),
      shortDescription: "Collection of paper, plastic, glass and metal for recycling.",
      longDescription: "Our recycling service helps you reduce your environmental footprint by ensuring your recyclable materials are properly processed and reused. We collect paper, plastic, glass, and metal items.",
      benefits: [
        "Reduces landfill waste and environmental impact",
        "Separate collection of different recyclable materials",
        "Educational resources on proper recycling practices",
        "Monthly reports on your recycling contribution"
      ],
      pricing: [
        { name: "Basic Recycling", price: "₦3,000/month", description: "Bi-weekly collection of mixed recyclables" },
        { name: "Advanced Recycling", price: "₦5,000/month", description: "Weekly collection with sorting containers provided" },
        { name: "Commercial Recycling", price: "Custom pricing", description: "Tailored solutions for businesses with high volume recyclables" }
      ],
      faqs: [
        { 
          question: "What items can I recycle through your service?", 
          answer: "We accept paper (newspapers, magazines, cardboard), plastics (bottles, containers), glass (bottles, jars), and metals (cans, aluminum foil). All items should be clean and free of food residue." 
        },
        { 
          question: "Do I need special containers for recycling?", 
          answer: "For our basic service, you can use any clear bags to separate recyclables. Our advanced service includes proper sorting containers for different materials." 
        },
        { 
          question: "How is the recycling actually processed?", 
          answer: "After collection, materials are taken to our sorting facility where they're separated by type. They're then compressed, bundled, and sent to specialized recycling facilities where they're processed into new materials." 
        }
      ],
      testimonial: {
        quote: "Since starting with CleanNigeria's recycling service, we've reduced our regular waste by over 60%. The team provides great education on what can be recycled, and it feels good knowing we're making a positive environmental impact.",
        author: "Emmanuel Adeyemi, Abuja",
        rating: 5
      }
    },
    {
      id: "bulk",
      title: "Bulk Waste",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M15 9h.01" />
          <path d="M9 15h.01" />
          <circle cx="15" cy="15" r="1" />
          <circle cx="9" cy="9" r="1" />
        </svg>
      ),
      shortDescription: "Removal of large items like furniture and appliances.",
      longDescription: "Our bulk waste removal service handles those large items that don't fit in regular waste collection. We safely remove and dispose of furniture, appliances, and other bulky items from your home or business.",
      benefits: [
        "Convenient removal of large, difficult-to-transport items",
        "Professional handling of heavy objects",
        "Responsible disposal or donation of usable items",
        "Same-day or scheduled pickup options"
      ],
      pricing: [
        { name: "Single Item", price: "₦5,000-₦15,000", description: "Removal of one large item (price varies by size)" },
        { name: "Room Clearance", price: "₦25,000-₦50,000", description: "Removal of multiple items from a single room" },
        { name: "Property Clearance", price: "Custom pricing", description: "Complete clearance of all bulk items from a property" }
      ],
      faqs: [
        { 
          question: "How do I prepare large items for pickup?", 
          answer: "Simply ensure there's clear access to the items. For appliances, they should be disconnected and emptied. For furniture, remove any loose cushions or detachable parts." 
        },
        { 
          question: "Can you take items that are still in good condition?", 
          answer: "Yes! We partner with local charities and will donate items that are still usable. Please let us know if your items are in good condition when scheduling." 
        },
        { 
          question: "What's the largest item you can remove?", 
          answer: "We can handle virtually any household or office item, including large sofas, beds, refrigerators, and office equipment. For extremely large items, we may need to assess first." 
        }
      ],
      testimonial: {
        quote: "When we needed to clear out an entire apartment quickly, CleanNigeria's bulk waste team was amazing. They arrived on time, worked efficiently, and even managed to donate several pieces of furniture that were still in good condition.",
        author: "Oluwaseun Adeleke, Property Manager, Port Harcourt",
        rating: 4
      }
    },
    {
      id: "business",
      title: "Business Waste",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M8 4h8" />
          <rect width="14" height="10" x="5" y="10" rx="1" ry="1" />
          <path d="M6 18h12a1 1 0 0 0 1-1v-5h-5a2 2 0 0 0-1.46.6L12 13l-1.54-1.4A2 2 0 0 0 9 11H4v6a1 1 0 0 0 1 1z" />
        </svg>
      ),
      shortDescription: "Commercial waste management for offices and retail.",
      longDescription: "Our business waste management solutions are tailored to meet the unique needs of commercial enterprises. We offer reliable, efficient waste collection services that help businesses maintain clean, professional environments while meeting regulatory requirements.",
      benefits: [
        "Customized collection schedules to suit business hours",
        "Compliance with commercial waste regulations",
        "Waste audit and reduction consulting",
        "Dedicated account manager for business clients"
      ],
      pricing: [
        { name: "Small Business", price: "₦15,000-₦30,000/month", description: "Suitable for offices and small retail (up to 10 employees)" },
        { name: "Medium Business", price: "₦30,000-₦60,000/month", description: "For medium-sized operations (10-50 employees)" },
        { name: "Enterprise Solutions", price: "Custom pricing", description: "Comprehensive waste management for large businesses" }
      ],
      faqs: [
        { 
          question: "Do you offer confidential document disposal?", 
          answer: "Yes, we provide secure document shredding and disposal services that comply with privacy regulations. This service can be added to any business waste management package." 
        },
        { 
          question: "Can you handle specialized waste from our business?", 
          answer: "We handle many types of specialized commercial waste. This includes retail packaging, office waste, food service waste, and more. For highly specialized or hazardous waste, we can arrange appropriate disposal methods." 
        },
        { 
          question: "Do you provide waste management certificates for compliance?", 
          answer: "Yes, we provide all necessary documentation to demonstrate your business's compliance with waste management regulations. This includes waste transfer notes and disposal certificates." 
        }
      ],
      testimonial: {
        quote: "As a restaurant owner, proper waste management is crucial for our operation. CleanNigeria's business service has been exceptional - they understand our specific needs, provide appropriate bins, and their flexible collection times work around our busy periods.",
        author: "Adebayo Ogunlesi, Restaurant Owner, Lagos",
        rating: 5
      }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Waste Management Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive waste collection and management solutions for homes and businesses across Nigeria
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <Tabs defaultValue="household" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="text-sm md:text-base">
                  <span className="hidden md:inline mr-2">{service.icon}</span>
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="bg-primary-50 p-3 rounded-full text-primary">
                            {service.icon}
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                            <CardDescription className="text-base mt-1">
                              {service.shortDescription}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-3">About This Service</h3>
                          <p className="text-gray-700">{service.longDescription}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-3">Benefits</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary mt-0.5">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-3">Frequently Asked Questions</h3>
                          <Accordion type="single" collapsible className="w-full">
                            {service.faqs.map((faq, index) => (
                              <AccordionItem key={index} value={`faq-${index}`}>
                                <AccordionTrigger className="text-left">
                                  {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                  {faq.answer}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </div>
                        
                        <div className="bg-primary-50 p-6 rounded-lg">
                          <div className="flex items-start gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <div>
                              <p className="italic text-gray-700 mb-3">"{service.testimonial.quote}"</p>
                              <div className="flex items-center justify-between">
                                <p className="font-medium">{service.testimonial.author}</p>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <svg
                                      key={i}
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill={i < service.testimonial.rating ? "#FCD34D" : "none"}
                                      stroke={i < service.testimonial.rating ? "#FCD34D" : "currentColor"}
                                      className="w-5 h-5"
                                    >
                                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link to={`/schedule?service=${service.id}`} className="w-full">
                          <Button size="lg" className="w-full">Schedule {service.title} Pickup</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Pricing Options</CardTitle>
                        <CardDescription>
                          Choose the plan that best fits your needs
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {service.pricing.map((plan, index) => (
                            <div key={index} className="border rounded-lg p-4">
                              <h4 className="font-medium text-lg">{plan.name}</h4>
                              <p className="text-2xl font-bold text-primary my-2">{plan.price}</p>
                              <p className="text-gray-600">{plan.description}</p>
                              <Link to={`/schedule?service=${service.id}&plan=${index}`} className="w-full block mt-4">
                                <Button variant="outline" className="w-full">Select Plan</Button>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start">
                        <p className="text-sm text-gray-500 mb-4">
                          Need a custom solution? Contact us for a personalized quote.
                        </p>
                        <Button variant="link" className="p-0">Contact for Custom Quote</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Schedule your first pickup today and experience hassle-free waste management with CleanNigeria.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/schedule">
                <Button size="lg">Schedule a Pickup</Button>
              </Link>
              <Link to="/collectors">
                <Button variant="outline" size="lg">Browse Collectors</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
