import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    title: "Deluxe Suite",
    type: "suite",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3",
    price: 299,
    description: "Spacious suite with city view and premium amenities",
    features: ["King Size Bed", "City View", "Mini Bar", "Work Desk"],
    size: "45m²",
  },
  {
    id: 2,
    title: "Executive Room",
    type: "executive",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3",
    price: 199,
    description: "Modern comfort with dedicated workspace",
    features: ["Queen Size Bed", "Work Area", "Coffee Machine", "Smart TV"],
    size: "35m²",
  },
  {
    id: 3,
    title: "Family Suite",
    type: "suite",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3",
    price: 399,
    description: "Perfect for families, with connecting rooms",
    features: ["2 Bedrooms", "Living Area", "Dining Space", "2 Bathrooms"],
    size: "75m²",
  },
  {
    id: 4,
    title: "Standard Room",
    type: "standard",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3",
    price: 149,
    description: "Comfortable and cozy room for a pleasant stay",
    features: ["Queen Size Bed", "Private Bathroom", "TV", "Air Conditioning"],
    size: "28m²",
  },
];

interface RoomListProps {
  filter: string;
}

export default function RoomList({ filter }: RoomListProps) {
  const filteredRooms = filter === "all" 
    ? rooms 
    : rooms.filter(room => room.type === filter);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {filteredRooms.map((room) => (
        <Card key={room.id} className="overflow-hidden">
          <img
            src={room.image}
            alt={room.title}
            className="h-48 w-full object-cover"
          />
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{room.title}</h3>
              <span className="text-lg font-bold">${room.price}/night</span>
            </div>
            <p className="text-muted-foreground mb-4">{room.description}</p>
            <div className="text-sm text-muted-foreground">
              <p>Size: {room.size}</p>
              <ul className="mt-2 list-disc list-inside">
                {room.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Link href="/booking" className="w-full">
              <Button className="w-full">Book Now</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}