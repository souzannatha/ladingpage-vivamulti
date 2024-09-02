import { AccreditedNetworks } from "./components/accreditednetworks";
import { BenefitsSession } from "./components/benefits";

export default function Home() {
  return (
    <main>
      <BenefitsSession />
      <AccreditedNetworks />
    </main>
  );
}
