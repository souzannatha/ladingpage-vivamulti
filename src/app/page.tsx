import { AccreditedNetworks } from "./components/accreditednetworks";
import { BenefitsSession } from "./components/benefits";
import { SectionDownload } from "./components/section-download";
import { Plans } from "./components/plans";
import { Testimonial } from "./components/testimonials";
import { FaqSection } from "./components/faq-section";

export default function Home() {
  return (
    <main>
      <BenefitsSession />
      <AccreditedNetworks />
      <Plans />
      <SectionDownload />
      <Testimonial />
      <FaqSection />
    </main>
  );
}
