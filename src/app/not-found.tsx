import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-md text-muted">
        Ce projet n&apos;est peut-être pas encore lié à Notion, ou le lien a
        changé.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
