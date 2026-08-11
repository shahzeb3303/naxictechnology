import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { ScaleBanner } from "@/components/scale-banner";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Studio } from "@/components/studio";
import { Ticker } from "@/components/ticker";
import { WhyChoose } from "@/components/why-choose";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Ticker />
        <ScaleBanner />
        <Services />
        <WhyChoose />
        <Work />
        <Process />
        <Studio />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
