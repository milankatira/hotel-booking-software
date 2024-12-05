import { useCallback } from "react";
import { Button } from "./ui/button";
import { loadScript } from "@/lib/utils";

interface PaymentButtonProps {
  amount: number;
  onSuccess?: (response: any) => void;
  onError?: (error: any) => void;
}

export default function PaymentButton({
  amount,
  onSuccess,
  onError,
}: PaymentButtonProps) {
  const handlePayment = useCallback(async () => {
    try {
      // Load Razorpay script
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      if (!res) {
        throw new Error("Razorpay SDK failed to load");
      }

      // Create order
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const order = await response.json();

      if (!order) {
        throw new Error("Server error");
      }

      // Initialize Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Premium Hotel Booking",
        description: "Hotel Room Booking Payment",
        order_id: order.id,
        handler: async function (response: any) {
          try {
            const verificationResponse = await fetch("/api/payment", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const data = await verificationResponse.json();

            if (data.success) {
              onSuccess?.(response);
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (error) {
            onError?.(error);
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      onError?.(error);
    }
  }, [amount, onSuccess, onError]);

  return (
    <Button onClick={handlePayment} className="w-full">
      Pay ₹{amount}
    </Button>
  );
}
