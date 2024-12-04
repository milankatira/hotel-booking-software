import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Coffee } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Experience world-class service and amenities",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Service",
      description: "Round-the-clock support for your comfort",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Fine Dining",
      description: "Exquisite culinary experiences",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Hotel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Welcome to a world of unparalleled luxury and comfort. Our hotel combines
            modern amenities with traditional hospitality to create an unforgettable
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}