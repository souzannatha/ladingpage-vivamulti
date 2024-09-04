import { AccreditedNetworks } from "./components/accreditednetworks";
import { BenefitsSession } from "./components/benefits";
import { SectionDownload } from "./components/section-download";
import { Plans } from "./components/plans";
import { Testimonial } from "./components/testimonials";
import { FaqSection } from "./components/faq-section";
import { FinalCall } from "./components/final-call";

export default function Home() {
  return (
    <main>
      <BenefitsSession />
      <AccreditedNetworks />
      <Plans />
      <SectionDownload />
      <Testimonial />
      <FaqSection />
      <FinalCall />
    </main>
  );
}
