
//This component is responsible for rendering the booking page, which includes the available services, calendar, and time slots.all interaction should be handled here, and passed down to the child components as props.

"use client";

import { useState } from "react";
import AvailableServices from "./AvailableServices";
import BookingCalendar from "./BookingCalendar";
import TimeSlots from "./TimeSlots";


export default function BookingPage({ availableServices }: { availableServices: any }) {
  const [selectedService, setSelectedService] = useState<any>();
  const [selectedDate, setSelectedDate] = useState<any>();
  const [selectedTime, setSelectedTime] = useState<any>();
  function handleDateSelect(date: Date | undefined) {
    setSelectedDate(date);
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
      {/* Time */}
      {selectedDate && selectedTime && (
        <div className="w-full max-w-md rounded-lg bg-background border border-gray-300 p-3">
          <p className="text-sm text-foreground font-medium">
            Selected date and time
          </p>
          <p className="text-foreground font-semibold">
            {selectedService} : {selectedDate.toDateString()} at {selectedTime.toString()}
          </p>
        </div>
      )}

       {/* Footer */}
       <div className="text-center text-sm text-gray-300">
         © {new Date().getFullYear()} A4trd Booking. All rights reserved.
       </div>
    </main>
  );
}
