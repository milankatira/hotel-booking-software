"use client";

import { LucideIcon } from "lucide-react";
import {
  Wifi,
  Coffee,
  Dumbbell,
  // Pool,
  Utensils,
  Car,
  // Spa,
  Tv
} from "lucide-react";

interface AmenityIconProps {
  icon: LucideIcon;
}

const AmenityIcon = ({ icon: Icon }: AmenityIconProps) => {
  return <Icon className="h-6 w-6" />;
};

const amenities: { icon: LucideIcon; name: string }[] = [
  { icon: Wifi, name: "Free Wi-Fi" },
  { icon: Coffee, name: "Coffee Shop" },
  { icon: Dumbbell, name: "Fitness Center" },
  // { icon: Pool, name: "Swimming Pool" },
  { icon: Utensils, name: "Restaurant" },
  { icon: Car, name: "Parking" },
  // { icon: Spa, name: "Spa" },
  { icon: Tv, name: "Smart TV" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hotel Amenities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enjoy our wide range of modern amenities designed to make your stay
            comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-muted rounded-lg"
            >
              <div className="mb-4 text-primary">
                <AmenityIcon icon={amenity.icon} />
              </div>
              <h3 className="text-lg font-medium">{amenity.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}