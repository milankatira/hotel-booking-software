"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <ScrollText className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: April 1, 2024</p>
          </div>

          <Card>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none p-8">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Booking and Reservations</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>All reservations are subject to availability and confirmation</li>
                  <li>Valid identification is required at check-in</li>
                  <li>Payment must be made in accordance with our payment policies</li>
                  <li>Special requests are subject to availability and cannot be guaranteed</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Guest Responsibilities</h2>
                <p className="text-muted-foreground mb-4">Guests agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Conduct themselves in a respectful manner</li>
                  <li>Comply with hotel policies and regulations</li>
                  <li>Be responsible for any damage caused during their stay</li>
                  <li>Not exceed the maximum occupancy of the room</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  The hotel shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of our services or your stay at our property, except where such limitations are prohibited by law.
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