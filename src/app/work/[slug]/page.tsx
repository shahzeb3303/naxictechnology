import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case-study";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BreadcrumbLd, CaseStudyLd } from "@/components/jsonld";
import { clampDescription, mediumLabels, projects, site } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

/** Pre-renders every case study at build time — no runtime lookup needed. */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return { title: `Work | ${site.name}` };

  return {
    // Was `client: full title | brand`, which ran to 103 characters and was
    // cut off in results. Client plus discipline keeps every one under 60.
    title: `${project.client}: ${mediumLabels[project.medium]} case study | ${site.name}`,
    description: clampDescription(project.summary),
    alternates: { canonical: `${site.url}/work/${project.id}` },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  // Any slug outside generateStaticParams renders the 404 rather than crashing
  if (!project) notFound();

  return (
    <>
      <CaseStudyLd project={project} />
      <BreadcrumbLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: project.client, path: `/work/${project.id}` },
        ]}
      />
      <SiteHeader />
      <main id="main">
        <CaseStudy project={project} />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
