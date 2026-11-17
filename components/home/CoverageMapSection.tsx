import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CoverageStops } from "@/components/home/CoverageStops";

export function CoverageMapSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our Coverage"
          title="Where We Operate"
          highlight="in Rajasthan"
          description="From Jaisalmer to Jaipur, Bikaner to Udaipur — our Urbania fleet covers every major city and tourist circuit across the state."
        />
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <Image
            src="/images/maprajcity.png"
            alt="Map of Rajasthan showing Urbania Hire coverage across Jaisalmer, Bikaner, Jodhpur, Jaipur and Udaipur"
            width={612}
            height={408}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="mx-auto h-auto w-full"
          />
          <CoverageStops />
        </div>
      </div>
    </section>
  );
}
