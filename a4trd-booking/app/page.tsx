"use client";

import { useState } from "react";
import BookingCalendar from "./components/BookingCalendar";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  function handleDateSelect(date: Date | undefined) {
    setSelectedDate(date);

    console.log("📅 Selected date:", {
      date: date?.toISOString(),
      readable: date?.toDateString(),
    });
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 gap-10 bg-background text-foreground">

      {/* Title + description */}
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          A4trd Booking
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className="text-gray-300 text-lg md:text-xl">
          A smarter way to manage bookings. Launching soon.
        </p>
      </div>

      {/* Calendar */}
      <BookingCalendar selected={selectedDate} onDateSelect={handleDateSelect} />

      {/* Debug UI */}
      {/* {selectedDate && (
        <div className="text-sm text-gray-300 bg-black/10 px-4 py-2 rounded-lg">
          Selected: {selectedDate.toDateString()}
        </div>
      )} */}

      {/* Footer */}
      <div className="text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Bookly. All rights reserved.
      </div>

    </main>
  );
}