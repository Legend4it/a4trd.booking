"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";


export default function BookingCalendar({ onDateSelect }: {
    onDateSelect?: (date: Date | undefined) => void;
}) {
    const [selected, setSelected] = useState<Date | undefined>();

    function handleSelect(date: Date | undefined) {
        setSelected(date);
        onDateSelect?.(date);
    }

    return (
        <div className="w-full max-w-md rounded-2xl bg-background shadow-lg border border-gray-100 p-6">
            {/* Header */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground">
                    Choose a date
                </h2>
                <p className="text-sm text-gray-500">
                    Select a day for your booking
                </p>
            </div>

            {/* Calendar */}
            <div className="rdp-custom">
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={handleSelect}
                    className="mx-auto"
                />
            </div>

            {/* Selected date */}
            {selected && (
                <div className="mt-5 rounded-lg bg-background border border-gray-300 p-3">
                    <p className="text-sm text-foreground font-medium">
                        Selected date
                    </p>
                    <p className="text-foreground font-semibold">
                        {selected.toDateString()}
                    </p>
                </div>
            )}
        </div>
    );
}