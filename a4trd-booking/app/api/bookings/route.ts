
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { serviceId, date, time } = body;

    // Validate required fields
    if (
      !Number.isInteger(serviceId) ||
      typeof date !== "string" ||
      typeof time !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid booking information." },
        { status: 400 }
      );
    }

    // Validate date format: YYYY-MM-DD
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { error: "Invalid date." },
        { status: 400 }
      );
    }

    // Validate time format: HH:MM
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) {
      return NextResponse.json(
        { error: "Invalid time." },
        { status: 400 }
      );
    }

    // Check that the service exists
    const { data: service, error: serviceError } = await supabase
      .from("availableservices")
      .select("id")
      .eq("id", serviceId)
      .maybeSingle();

    if (serviceError) throw serviceError;

    if (!service) {
      return NextResponse.json(
        { error: "Service not found." },
        { status: 404 }
      );
    }

    // Create booking
    const { error } = await supabase
      .from("bookings")
      .insert({
        service_id: serviceId,
        booking_date: date,
        booking_time: time,
      });

    if (error) {
      // Duplicate booking slot
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This time slot is already booked." },
          { status: 409 }
        );
      }

      throw error;
    }

    return NextResponse.json(
      { message: "Booking successfully created!" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Booking error:", error);

    return NextResponse.json(
      { error: "Could not create booking." },
      { status: 500 }
    );
  }
}
