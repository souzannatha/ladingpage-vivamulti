import { AccreditedNetworks } from "./components/accreditednetworks";
import { BenefitsSession } from "./components/benefits";
import { Plans } from "./components/plans";

export default function Home() {
  return (
    <main>
      <BenefitsSession />
      <AccreditedNetworks />
      <Plans />
    </main>
  );
}
