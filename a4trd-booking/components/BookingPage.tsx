
// This component is responsible for rendering the booking page, which includes the available services, calendar, and time slots.all interaction should be handled here, and passed down to the child components as props.

"use client";

import { useState } from "react";
import AvailableServices from "./AvailableServices";
import BookingCalendar from "./BookingCalendar";


export default function BookingPage({ availableServices }: { availableServices: any }) {
  const [selectedService, setSelectedService] = useState<any>();
  const [selectedDate, setSelectedDate] = useState<any>();
  const [selectedTime, setSelectedTime] = useState<any>();

  return (
    <>
      <AvailableServices
        availableServices={availableServices}
        onServiceSelect={setSelectedService}
      />
      {
        selectedService && (
          <BookingCalendar selected={selectedDate} onDateSelect={() => { }} />
        )
      }
    </>
  );
}
