
//This component is responsible for rendering the booking page, which includes the available services, calendar, and time slots.all interaction should be handled here, and passed down to the child components as props.

"use client";

import { useState } from "react";
import AvailableServices from "./AvailableServices";
import BookingCalendar from "./BookingCalendar";
import TimeSlots from "./TimeSlots";
import { AvailableServicesType } from "../types/AvailableServicesType";


export default function BookingPage({ availableServices }: { availableServices: AvailableServicesType[] }) {
  const [selectedService, setSelectedService] = useState<AvailableServicesType | undefined>();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);


  function handleDateSelect(date: Date | undefined) {
    setSelectedDate(date);
  }

  async function handleSubmit() {
    if (!selectedService || !selectedDate || !selectedTime) {
      setError("Please select a service, date and time.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      // Format date as YYYY-MM-DD
      const date = [
        selectedDate.getFullYear(),
        String(selectedDate.getMonth() + 1).padStart(2, "0"),
        String(selectedDate.getDate()).padStart(2, "0"),
      ].join("-");

      // Send booking to API
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceId: selectedService.id,
          date: date,
          time: selectedTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Booking failed.");
      }

      setSuccess("Your booking was successfully created!");

      // Reset selections
      setSelectedService(undefined);
      setSelectedDate(undefined);
      setSelectedTime(undefined);

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 gap-10 bg-background text-foreground">
      <AvailableServices
        availableServices={availableServices}
        selectedService={selectedService}
        onServiceSelect={setSelectedService}
      />
      {
        selectedService && (
          <BookingCalendar selected={selectedDate} onDateSelect={handleDateSelect} />
        )
      }
      {/* Calendar */}
      {selectedDate && (
        <TimeSlots
          selectedTime={selectedTime}
          onTimeSelect={setSelectedTime}
        />
      )}


      {/* Booking summary */}
      {selectedService && selectedDate && selectedTime && (
        <div className="w-full max-w-md rounded-lg bg-background border border-gray-300 p-3">

          <p className="text-sm text-foreground font-medium">
            Booking summary
          </p>

          <p className="text-foreground font-semibold">
            {selectedService.name} : {selectedDate.toDateString()} at {selectedTime}
          </p>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full mt-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium p-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Confirm Booking"}
          </button>

          {error && (
            <p className="mt-3 text-sm text-red-500">
              {error}
            </p>
          )}

          {success && (
            <p className="mt-3 text-sm text-green-600">
              {success}
            </p>
          )}

        </div>
      )}



      {/* Footer */}
      <div className="text-center text-sm text-gray-300">
        © {new Date().getFullYear()} A4trd Booking. All rights reserved.
      </div>
    </main>
  );
}
