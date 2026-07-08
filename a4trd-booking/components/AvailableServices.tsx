import { AvailableServicesType } from "../types/AvailableServicesType";


type AvailableServicesProps = {
  availableServices: AvailableServicesType[];
  selectedService?: string;
  onServiceSelect?: (service: string) => void;
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
          onClick={() => onServiceSelect?.(service.name)}
               className={`
                 w-full rounded-md border p-2 transition
                 ${
                   selectedService === service.name
                     ? "service-options-selected"
                     : "service-options"
                 }
               `}>
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