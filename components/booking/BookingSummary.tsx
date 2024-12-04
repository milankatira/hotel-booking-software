import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

interface BookingSummaryProps {
  data: any;
}

export default function BookingSummary({ data }: BookingSummaryProps) {
  if (!data) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            Fill out the booking form to see your reservation summary
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Guest Information</h3>
            <p className="text-muted-foreground">
              {data.firstName} {data.lastName}
            </p>
            <p className="text-muted-foreground">{data.email}</p>
            <p className="text-muted-foreground">{data.phone}</p>
          </div>
          <div>
            <h3 className="font-medium">Stay Details</h3>
            <p className="text-muted-foreground">
              Check-in: {data.checkIn ? format(data.checkIn, "PPP") : "Not selected"}
            </p>
            <p className="text-muted-foreground">
              Check-out: {data.checkOut ? format(data.checkOut, "PPP") : "Not selected"}
            </p>
            <p className="text-muted-foreground">
              Number of Guests: {data.guests}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}