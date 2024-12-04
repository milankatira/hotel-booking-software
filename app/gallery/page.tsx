"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3",
    category: "exterior",
    title: "Hotel Exterior",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3",
    category: "rooms",
    title: "Deluxe Suite",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3",
    category: "rooms",
    title: "Executive Room",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3",
    category: "rooms",
    title: "Family Suite",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3",
    category: "amenities",
    title: "Swimming Pool",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3",
    category: "amenities",
    title: "Spa",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Gallery preview"
                  className="w-full h-auto"
                />
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Footer />
    </main>
  );
}