"use client";

import { useState } from "react";
import BookingForm from "@/components/booking/BookingForm";
import BookingSummary from "@/components/booking/BookingSummary";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BookingPage() {
  const [bookingData, setBookingData] = useState(null);

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Book Your Stay</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <BookingForm onSubmit={setBookingData} />
            <BookingSummary data={bookingData} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}