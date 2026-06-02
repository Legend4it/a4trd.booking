const fakeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
]

export default function TimeSlots({
    selectedTime,
    onTimeSelect,
}: {
    selectedTime?: string
    onTimeSelect?: (time: string) => void
}) {
    return (
        <div className="w-full max-w-md rounded-2xl bg-background shadow-lg border border-gray-100 p-6">
            <h2 className="mb-4 text-xl font-semibold">
                Choose a time
            </h2>

            <div className="grid grid-cols-2 gap-3">
                {fakeSlots.map((slot) => (
                    <button
                        key={slot}
                        onClick={() =>
                            onTimeSelect?.(slot)
                        }
                        className={`
                            time-slot
                            rounded-xl border p-2 transition
                            ${
                                selectedTime === slot
                                    ? "time-slot-selected"
                                    : "time-slot"
                            }
                        `}
                    >
                        {slot}
                    </button>
                ))}
            </div>
        </div>
    )
}