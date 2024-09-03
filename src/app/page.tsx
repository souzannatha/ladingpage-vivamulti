import { AccreditedNetworks } from "./components/accreditednetworks";
import { BenefitsSession } from "./components/benefits";
import { SectionDownload } from "./components/section-download";
import { Plans } from "./components/plans";
import { Testimonial } from "./components/testimonials";

export default function Home() {
  return (
    <main>
      <BenefitsSession />
      <AccreditedNetworks />
      <Plans />
      <SectionDownload />
      <Testimonial />
    </main>
  );
}
