import BookingPage from "@/components/BookingPage";
import { supabase } from "../lib/supabase";

{/*How to structure the app?*/ }
// Page (Server Component)
// │
// ├── Fetch data from database
// │
// └── Pass data to Client Components
//     │
//     ├── AvailableServices
//     ├── BookingCalendar
//     └── TimeSlots

export default async function Home() {
  const { data: services } = await supabase
    .from("availableservices")
    .select("*");

  return (
    <BookingPage
      availableServices={services || []}
    />
  );
}

// "use client";

// import { useState } from "react";
// import BookingCalendar from "./components/BookingCalendar";
// import TimeSlots from "./components/TimeSlots";
// import AvailableServices from "./components/AvailableServices";

// export default function Home() {
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>();
//   const [selectedTime, setSelectedTime] = useState<string | undefined>();
//   const [selectedService, setSelectedService] = useState<string | undefined>();

//   function handleDateSelect(date: Date | undefined) {
//     setSelectedDate(date);

//     // console.log("📅 Selected date:", {
//     //   date: date?.toISOString(),
//     //   readable: date?.toDateString(),
//     // });
//   }

//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center px-6 gap-10 bg-background text-foreground">

//       {/* Title + description */}
//       <div className="max-w-2xl w-full text-center space-y-6">
//         <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//           A4trd Booking
//         </h1>

//         <p className="text-gray-300 text-lg md:text-xl">
//           A smarter way to manage bookings. Launching soon.
//         </p>
//       </div>

//       {/* Available Services */}
//       <AvailableServices
//         selectedService={selectedService}
//         onServiceSelect={setSelectedService}
//       />

//       {/* Calendar */}
//       {selectedService && (
//       <BookingCalendar selected={selectedDate} onDateSelect={handleDateSelect} />
//       )}

//       {/* Debug UI */}
//       {selectedDate && (
//         <TimeSlots
//           selectedTime={selectedTime}
//           onTimeSelect={setSelectedTime}
//         />
//       )}

//       {selectedDate && selectedTime && (
//         <div className="w-full max-w-md rounded-lg bg-background border border-gray-300 p-3">
//           <p className="text-sm text-foreground font-medium">
//             Selected date and time
//           </p>
//           <p className="text-foreground font-semibold">
//             {selectedService} : {selectedDate.toDateString()} at {selectedTime.toString()}
//           </p>
//         </div>
//       )}

//       {/* Footer */}
//       <div className="text-center text-sm text-gray-300">
//         © {new Date().getFullYear()} A4trd Booking. All rights reserved.
//       </div>

//     </main>
//   );
// }