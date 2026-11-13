
import type { AvailableServicesType } from "@/types/AvailableServicesType";

type AvailableServicesProps = {
  availableServices: AvailableServicesType[];
  selectedService?: AvailableServicesType;
  onServiceSelect?: (service: AvailableServicesType) => void;
};

export default function AvailableServices({
  availableServices,
  selectedService,
  onServiceSelect,
}: AvailableServicesProps) {
  return (
    <div className="w-full max-w-md rounded-md bg-background shadow-lg border border-gray-100 p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Available Services
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {availableServices.map((service) => (
          <div key={service.id} className="service-tooltip">
            <button
              type="button"
              onClick={() => onServiceSelect?.(service)}
              className={`
                w-full rounded-md border p-2 transition
                ${
                  selectedService?.id === service.id
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
  );
}
