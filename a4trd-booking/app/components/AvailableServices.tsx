const fakeServices = [
  {
    id: 1,
    "name": "Hair Cutting",
    "description": "Professional hair cutting service"
  },
  {
    id: 2,
    "name": "Hair Coloring",
    "description": "Color your hair with our expert stylists"
  },
  {
    id: 3,
    "name": "Hair Treatment",
    "description": "Restore and nourish your hair with our treatment"
  }
];

export default function AvailableServices({
  selectedService,
  onServiceSelect,
}: {
  selectedService?: string
  onServiceSelect?: (service: string) => void
}) {
  return (
    <div className="w-full max-w-md rounded-md bg-background shadow-lg border border-gray-100 p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Available Services
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {fakeServices.map((service) => (
          <div key={service.id} className="service-tooltip">
            <button
              key={service.id}
              onClick={() =>
                onServiceSelect?.(service.name)
              }
              className={`
                            w-full
                            service-options
                            rounded-md border p-2 transition
                            ${selectedService === service.name
                  ? "service-options-selected"
                  : "service-options"
                }
                        `}
            >
              {service.name}
            </button>
            <div className="service-tooltip-content">
              {service.description}
              <div className="service-tooltip-arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}