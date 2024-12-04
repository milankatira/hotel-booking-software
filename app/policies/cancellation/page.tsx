"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <AlertCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Cancellation Policy</h1>
            <p className="text-muted-foreground">Last updated: April 1, 2024</p>
          </div>

          <Card>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none p-8">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Standard Cancellation Policy</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Free cancellation up to 48 hours before check-in</li>
                  <li>50% refund for cancellations between 24-48 hours before check-in</li>
                  <li>No refund for cancellations less than 24 hours before check-in</li>
                  <li>No-shows will be charged the full amount of the reservation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Special Conditions</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Different cancellation policies may apply for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Peak season bookings (holidays and special events)</li>
                    <li>Group reservations (5 rooms or more)</li>
                    <li>Special rate packages and promotions</li>
                    <li>Extended stays (7 nights or more)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How to Cancel</h2>
                <p className="text-muted-foreground mb-4">
                  To cancel your reservation, you can:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Log in to your account and cancel online</li>
                  <li>Contact our reservations team by phone</li>
                  <li>Send an email to cancellations@luxuryhotel.com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
                <p className="text-muted-foreground">
                  Eligible refunds will be processed within 5-7 business days to the original payment method. Processing times may vary depending on your bank or credit card issuer.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}