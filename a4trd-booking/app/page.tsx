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