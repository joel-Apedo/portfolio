import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { NotionContent } from "@/components/NotionContent";
import { getNotionRecordMap, getProjectsFromNotion } from "@/lib/notion";

export const instant = false;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { projects } = await getProjectsFromNotion();
  const project =
    projects.find((p) => p.slug === id || p.notionId === id) ?? null;

  if (!project?.notionId) {
    notFound();
  }

  const recordMap = await getNotionRecordMap(project.notionId);

  return (
    <>
      <CustomCursor />
      <Header />
      <main id="contenu" className="flex-1">
        <article className="mx-auto w-full max-w-3xl px-5 pt-28 pb-24 sm:px-8">
          <Link
            href="/#projets"
            className="link-soft text-[12px] font-medium text-muted"
          >
            ← Retour aux projets
          </Link>

          <p className="mt-8 text-[12px] font-medium text-muted">
            {project.meta}
            <span className="mx-2 text-faint">·</span>
            {project.year}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>

          {project.stack.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="chip text-[12px]">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10 space-y-8">
            <section className="card p-6 sm:p-8">
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
                Défi
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                {project.challenge}
              </p>
            </section>
            <section className="card p-6 sm:p-8">
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
                Solution
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                {project.solution}
              </p>
            </section>
            <section className="card p-6 sm:p-8">
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
                Résultat
              </h2>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-accent">
                {project.resultStat}
              </p>
              <p className="mt-2 leading-relaxed text-muted">
                {project.resultText}
              </p>
            </section>
          </div>

          {recordMap ? (
            <div className="mt-12">
              <h2 className="mb-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
                Depuis Notion
              </h2>
              <NotionContent recordMap={recordMap} />
            </div>
          ) : (
            <p className="mt-12 rounded-2xl border border-dashed border-line p-6 text-sm text-faint">
              Contenu Notion indisponible (vérifie NOTION_TOKEN et que la page
              est partagée avec l&apos;intégration).
            </p>
          )}

          <div className="mt-12 flex flex-wrap gap-4">
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Démo en ligne ↗
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Code source ↗
              </a>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
