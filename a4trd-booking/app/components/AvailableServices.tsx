"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { AvailableServicesType } from "../types/AvailableServicesType";

export default function AvailableServices({
  selectedService,
  onServiceSelect,
}: {
  selectedService?: string;
  onServiceSelect?: (service: string) => void;
}) {
  const [availableServices, setServices] = useState<AvailableServicesType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase
        .from("availableservices")
        .select("*");
console.log("data:", data);
console.log("error:", error);
      if (!error && data) {
        setServices(data);
      }

      setLoading(false);
    }

    fetchServices();
  }, []);

  if (loading) {
    return <div>Loading services...</div>;
  }

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