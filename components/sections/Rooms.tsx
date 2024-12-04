import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const rooms = [
  {
    title: "Deluxe Suite",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3",
    price: "$299",
    description: "Spacious suite with city view",
  },
  {
    title: "Executive Room",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3",
    price: "$199",
    description: "Modern comfort with dedicated workspace",
  },
  {
    title: "Family Suite",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3",
    price: "$399",
    description: "Perfect for families, with connecting rooms",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Rooms</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of luxurious rooms and suites, each designed
            for your ultimate comfort and relaxation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={room.image}
                alt={room.title}
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{room.title}</h3>
                  <span className="text-lg font-bold">{room.price}/night</span>
                </div>
                <p className="text-muted-foreground">{room.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}