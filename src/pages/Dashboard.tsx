
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type PickupStatus = 'pending' | 'scheduled' | 'completed';

interface Pickup {
  id: string;
  date: string;
  time: string;
  status: PickupStatus;
  wasteType: string;
  collector: string | null;
  address: string;
  rating: number | null;
}

const mockPickups: Pickup[] = [
  {
    id: "PU-1234",
    date: "2023-05-10",
    time: "Morning (8AM - 12PM)",
    status: "completed",
    wasteType: "Household",
    collector: "Lagos Waste Solutions",
    address: "15 Marina Road, Lagos Island",
    rating: 5
  },
  {
    id: "PU-2345",
    date: "2023-05-18",
    time: "Afternoon (12PM - 4PM)",
    status: "scheduled",
    wasteType: "Recyclable",
    collector: "Eco Warriors Port Harcourt",
    address: "7B Aba Road, Port Harcourt",
    rating: null
  },
  {
    id: "PU-3456",
    date: "2023-05-25",
    time: "Evening (4PM - 8PM)",
    status: "pending",
    wasteType: "Bulk Waste",
    collector: null,
    address: "42 Allen Avenue, Ikeja, Lagos",
    rating: null
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingPickups = mockPickups.filter(p => ["pending", "scheduled"].includes(p.status));
  const pastPickups = mockPickups.filter(p => p.status === "completed");

  const getStatusBadge = (status: PickupStatus) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">Awaiting Collector</Badge>;
      case "scheduled":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">Scheduled</Badge>;
      case "completed":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">Completed</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Total Pickups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{mockPickups.length}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Upcoming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{upcomingPickups.length}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{pastPickups.length}</p>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">Upcoming Pickups</TabsTrigger>
              <TabsTrigger value="past">Past Pickups</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              {upcomingPickups.length > 0 ? (
                <div className="grid gap-6">
                  {upcomingPickups.map((pickup) => (
                    <Card key={pickup.id} className="overflow-hidden">
                      <div className="border-l-4 border-primary h-full">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold">{pickup.wasteType} Waste Pickup</h3>
                                {getStatusBadge(pickup.status)}
                              </div>
                              <p className="text-gray-600">{pickup.address}</p>
                              <div className="mt-2 text-sm text-gray-500">
                                <span>Ref: {pickup.id}</span> •
                                <span className="ml-2">{new Date(pickup.date).toLocaleDateString('en-US', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}</span> •
                                <span className="ml-2">{pickup.time}</span>
                              </div>
                              {pickup.collector && (
                                <div className="mt-2">
                                  <span className="text-sm font-medium">Collector:</span> {pickup.collector}
                                </div>
                              )}
                            </div>

                            <div className="flex flex-wrap gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              {pickup.status === "pending" && (
                                <Button variant="destructive" size="sm">
                                  Cancel
                                </Button>
                              )}
                              {pickup.status === "scheduled" && (
                                <Button variant="secondary" size="sm">
                                  Reschedule
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">No Upcoming Pickups</h3>
                    <p className="text-gray-600 mb-6">You don't have any waste pickups scheduled.</p>
                    <Button>Schedule a Pickup</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="past">
              {pastPickups.length > 0 ? (
                <div className="grid gap-6">
                  {pastPickups.map((pickup) => (
                    <Card key={pickup.id} className="overflow-hidden">
                      <div className="border-l-4 border-gray-300 h-full">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold">{pickup.wasteType} Waste Pickup</h3>
                                {getStatusBadge(pickup.status)}
                              </div>
                              <p className="text-gray-600">{pickup.address}</p>
                              <div className="mt-2 text-sm text-gray-500">
                                <span>Ref: {pickup.id}</span> •
                                <span className="ml-2">{new Date(pickup.date).toLocaleDateString('en-US', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}</span>
                              </div>
                              {pickup.collector && (
                                <div className="mt-2">
                                  <span className="text-sm font-medium">Collector:</span> {pickup.collector}
                                </div>
                              )}
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {pickup.rating ? (
                                <div className="flex items-center">
                                  <span className="mr-2">Your rating:</span>
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill={i < pickup.rating ? "#FCD34D" : "none"}
                                        stroke={i < pickup.rating ? "#FCD34D" : "currentColor"}
                                        className="w-5 h-5"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Button variant="outline" size="sm">
                                  Rate & Review
                                </Button>
                              )}
                              <Button variant="secondary" size="sm">
                                Schedule Similar
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">No Past Pickups</h3>
                    <p className="text-gray-600 mb-6">You haven't completed any waste pickups yet.</p>
                    <Button>Schedule Your First Pickup</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
