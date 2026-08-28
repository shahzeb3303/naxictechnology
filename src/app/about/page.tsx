import type { Metadata } from "next";
import { AboutHero } from "@/components/about-hero";
import { AboutStats, AboutStory, AboutValues } from "@/components/about-story";
import { ContactCta } from "@/components/contact-cta";
import { BreadcrumbLd } from "@/components/jsonld";
import { Offices } from "@/components/offices";
import { Process } from "@/components/process";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Team } from "@/components/team";
import { Trust } from "@/components/trust";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description:
    "A digital marketing and software studio in Islamabad and Manchester. We run marketing, ads and SEO, and build the design, video, websites and apps behind them.",
  alternates: { canonical: `${site.url}/about` },
};

/**
 * Section order alternates tone throughout: light, orange, light, dark,
 * light, dark, light — so the page never runs flat.
 */
export default function AboutPage() {
  return (
    <>
      <BreadcrumbLd
        trail={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <SiteHeader />
      <main id="main">
        <AboutHero />
        <AboutStats />
        <AboutStory />
        <AboutValues />
        <Team />
        <Process />
        <Offices />
        <Trust />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
