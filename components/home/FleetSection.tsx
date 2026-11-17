import { vehicleGroups, vehicles } from "@/data/vehicles";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FleetCard } from "@/components/shared/FleetCard";

export function FleetSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Direct Owner Fleet in Jaipur"
          title="Choose Your"
          highlight="Force Urbania On Rent In Jaipur"
          description="Whether you need a luxury van for Jaipur local sightseeing, wedding guest mobility, or an outstation holiday to Jodhpur, Udaipur and Jaisalmer, we have the exact seating model ready at fixed transparent rates."
        />

        {vehicleGroups.map((group) => {
          const items = vehicles.filter((v) => v.category === group.category);
          if (items.length === 0) return null;
          return (
            <div key={group.category} className="mt-8">
              <div className="mb-5 border-l-4 border-primary pl-3">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <p className="text-sm text-muted-foreground">{group.blurb}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((vehicle) => (
                  <FleetCard key={vehicle.slug} vehicle={vehicle} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
