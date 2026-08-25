import { ContactCta } from "@/components/contact-cta";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Team } from "@/components/team";
import { Testimonial } from "@/components/testimonial";
import { Trust } from "@/components/trust";
import { WhyChoose } from "@/components/why-choose";
import { Work } from "@/components/work";

/**
 * Section order is tuned for tonal rhythm as much as narrative — dark, orange,
 * light, dark, light, dark, light, orange, light, light, dark. No two
 * same-tone sections sit adjacent, so the scroll never flattens out.
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Services />
        <WhyChoose />
        <Work />
        <Process />
        <Team />
        <Testimonial />
        <Trust />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
