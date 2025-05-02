import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  const teamMembers = [
    {
      name: "Olufemi Akinwande",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1672675225389-4d7b6f231f5b?w=200&h=200&fit=crop",
      bio: "A graduate of UNILAG with 15 years at LAWMA, Olufemi founded CleanNigeria after witnessing the waste challenges in Lagos metropolis. His vision is to transform waste management across Nigeria."
    },
    {
      name: "Chidinma Onyekachi",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1615453262312-022a72d3842a?w=200&h=200&fit=crop",
      bio: "Former logistics manager at Dangote Group, Chidinma oversees our operations from our Lekki headquarters, ensuring efficient service delivery across all 36 states."
    },
    {
      name: "Yusuf Abdullahi",
      role: "Technology Lead",
      image: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?w=200&h=200&fit=crop",
      bio: "A tech entrepreneur from Kaduna and alumnus of ABU Zaria, Yusuf leads our digital initiatives, developing solutions that work even in areas with limited internet connectivity."
    },
    {
      name: "Folashade Adeleke",
      role: "Community Engagement Manager",
      image: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=200&h=200&fit=crop",
      bio: "With experience at NESREA and a passion for environmental education, Folashade leads our outreach programs in local communities from Calabar to Sokoto."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Foundation in Yaba",
      description: "CleanNigeria was founded in Yaba, Lagos, after securing initial funding from the Lagos State Employment Trust Fund (LSETF)."
    },
    {
      year: "2019",
      title: "Launch in Lagos Mainland",
      description: "We began operations in Surulere and Yaba, partnering with 50 PSP operators and informal waste collectors in Lagos."
    },
    {
      year: "2020",
      title: "USSD Platform Launch",
      description: "Launched our USSD platform (*737*277#) alongside our app, making services accessible even without smartphones or internet."
    },
    {
      year: "2021",
      title: "Six States Expansion",
      description: "Expanded to FCT Abuja, Rivers (Port Harcourt), Kano, Enugu, Oyo (Ibadan), and Delta (Warri) states."
    },
    {
      year: "2022",
      title: "Partnership with NESREA",
      description: "Partnered with the National Environmental Standards and Regulations Enforcement Agency for our recycling initiative."
    },
    {
      year: "2023",
      title: "500+ Collectors Nationwide",
      description: "Reached 500+ verified waste collectors and won the Nigeria Climate Innovation Center's Green Business Award."
    }
  ];

  const values = [
    {
      title: "Environmental Stewardship",
      description: "We are committed to sustainable waste management practices that protect Nigeria's diverse ecosystems from Lagos Lagoon to the Niger Delta.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "Community Partnership",
      description: "We work with local communities through traditional leaders, market associations, and youth groups to create sustainable waste management solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Nigerian Innovation",
      description: "We develop solutions tailored to Nigeria's unique challenges, from USSD services for areas with limited internet to partnerships with keke and okada riders for last-mile collection.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      title: "Transparency",
      description: "We operate with complete openness in our pricing, operations, and partnerships, building trust with customers from Maiduguri to Calabar.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About CleanNigeria</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Connecting communities with waste collectors for a cleaner, healthier Nigeria
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  To revolutionize waste management in Nigeria by connecting communities with reliable waste collectors, promoting sustainable practices, and creating a cleaner environment for all.
                </p>
                <p className="text-lg text-gray-700">
                  We believe that proper waste management is not just an environmental necessity but a fundamental right for every Nigerian. Through our platform, we're making it accessible, affordable, and efficient.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6">
                  To be the leading waste management platform in Africa, setting the standard for innovative, sustainable, and community-focused waste solutions.
                </p>
                <p className="text-lg text-gray-700">
                  We envision a Nigeria where waste is properly managed, recycled, and repurposed, contributing to cleaner cities, healthier communities, and a more sustainable future for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-primary-50 p-4 rounded-full text-primary mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:flex-row`}>
                    <div className="flex-1 md:pr-12 md:text-right">
                      {index % 2 === 0 || isMobile ? (
                        <>
                          <h3 className="text-xl font-bold text-primary">{milestone.year}</h3>
                          <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
                        </>
                      ) : null}
                    </div>

                    <div className="z-10 flex-shrink-0 bg-primary rounded-full w-8 h-8 flex items-center justify-center mx-4">
                      <div className="bg-white rounded-full w-3 h-3"></div>
                    </div>

                    <div className="flex-1 md:pl-12">
                      {index % 2 !== 0 && !isMobile ? (
                        <>
                          <h3 className="text-xl font-bold text-primary">{milestone.year}</h3>
                          <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
                        </>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p className="text-xl">Local Waste Collectors</p>
                <p className="text-sm mt-2">From PSP operators to informal sector workers</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">25,000+</h3>
                <p className="text-xl">Tons of Waste Managed</p>
                <p className="text-sm mt-2">Across 24 states and the FCT</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-xl">Nigerian States Covered</p>
                <p className="text-sm mt-2">From Lagos to Borno, Rivers to Sokoto</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Whether you're a household looking for reliable waste collection, a business seeking sustainable waste management solutions, or a waste collector wanting to expand your customer base, CleanNigeria is here for you.
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

export default AboutPage;
