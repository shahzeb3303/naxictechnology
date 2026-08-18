import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case-study";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects, site } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

/** Pre-renders every case study at build time — no runtime lookup needed. */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return { title: `Work — ${site.name}` };

  return {
    title: `${project.client} — ${project.title} | ${site.name}`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  // Any slug outside generateStaticParams renders the 404 rather than crashing
  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main">
        <CaseStudy project={project} />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
