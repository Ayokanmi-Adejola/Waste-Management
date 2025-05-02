
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ScheduleForm = () => {
  const { toast } = useToast();
  interface FormData {
    name: string;
    phone: string;
    email: string;
    address: string;
    wasteType: string;
    wasteSize: string;
    date: string;
    time: string;
    notes: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    wasteType: "household",
    wasteSize: "small",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Display success toast
    toast({
      title: "Pickup Scheduled!",
      description: "We've sent your request to local collectors. You'll receive confirmation shortly.",
      duration: 5000,
    });

    // Reset form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      wasteType: "household",
      wasteSize: "small",
      date: "",
      time: "",
      notes: "",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-primary text-white">
        <CardTitle className="text-2xl">Schedule a Waste Pickup</CardTitle>
        <CardDescription className="text-primary-50">
          Fill out the form below and local waste collectors will respond to your request.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Your contact number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Pickup Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Your full address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Waste Type</Label>
              <RadioGroup
                name="wasteType"
                value={formData.wasteType}
                onValueChange={(value) => handleSelectChange("wasteType", value)}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="household" id="household" />
                  <Label htmlFor="household" className="font-normal">Household Waste</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recyclable" id="recyclable" />
                  <Label htmlFor="recyclable" className="font-normal">Recyclable Materials</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bulk" id="bulk" />
                  <Label htmlFor="bulk" className="font-normal">Bulk Items</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="business" id="business" />
                  <Label htmlFor="business" className="font-normal">Business Waste</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="wasteSize">Waste Size</Label>
              <Select
                value={formData.wasteSize}
                onValueChange={(value) => handleSelectChange("wasteSize", value)}
              >
                <SelectTrigger id="wasteSize">
                  <SelectValue placeholder="Select waste size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (1-2 bags)</SelectItem>
                  <SelectItem value="medium">Medium (3-5 bags)</SelectItem>
                  <SelectItem value="large">Large (6-10 bags)</SelectItem>
                  <SelectItem value="xlarge">X-Large (11+ bags)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Pickup Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Select
                value={formData.time}
                onValueChange={(value) => handleSelectChange("time", value)}
              >
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                  <SelectItem value="evening">Evening (4PM - 8PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Any special instructions or details about your waste"
                value={formData.notes}
                onChange={handleChange}
                className="min-h-[100px]"
              />
            </div>
          </div>

          <CardFooter className="flex justify-end pt-6 px-0">
            <Button type="submit" size="lg">
              Schedule Pickup
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default ScheduleForm;
