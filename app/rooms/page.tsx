"use client";

import RoomList from "@/components/rooms/RoomList";
import RoomFilters from "@/components/rooms/RoomFilters";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RoomsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Our Rooms & Suites</h1>
          <RoomFilters selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
          <RoomList filter={selectedFilter} />
        </div>
      </div>
      <Footer />
    </main>
  );
}