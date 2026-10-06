export const profile = {
  name: "APEDO Kodjo Joel",
  role: "Développeur Full-Stack & Designer d'interfaces",
  location: "Mali · Remote",
  email: "joelapedo63@gmail.com",
  phoneDisplay: "+223 63 75 93 10",
  phoneHref: "tel:+22363759310",
  whatsapp: "https://wa.me/22363759310",
  year: "2026",
  intro: "Des interfaces qui se remarquent, du code qui tient.",
  tagline:
    "Je transforme des produits complexes en expériences simples, rapides et mémorables.",
  about:
    "Je conçois des produits web qui allient performance, accessibilité et direction artistique. De la stratégie au déploiement, je transforme des idées complexes en interfaces limpides. Cinq ans à livrer pour des startups et des studios — toujours avec la même obsession : le détail.",
};

export const navLinks = [
  { href: "#apropos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

export type Project = {
  number: string;
  title: string;
  meta: string;
  year: string;
  image: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  resultStat: string;
  resultText: string;
  stack: string[];
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "E-Shop",
    meta: "E-commerce · Refonte complète",
    year: "2025",
    image: "/projects/e-shop.svg",
    imageAlt:
      "Capture de la boutique en ligne E-Shop : bannière soldes et grille de produits",
    challenge:
      "Un marchand spécialisé perdait 40 % de ses paniers au paiement : tunnel lent, formulaires interminables, aucune confiance visuelle.",
    solution:
      "Refonte du tunnel en Next.js avec paiement Stripe en une étape, pré-remplissage intelligent, cache ISR et design system repris de zéro. Livré en six semaines avec l'équipe interne.",
    resultStat: "+32 %",
    resultText: "de conversion en trois mois, LCP ramené à 1,2 s sur mobile.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demo: "#",
  },
  {
    number: "02",
    title: "TaskFlow",
    meta: "Productivité · SaaS temps réel",
    year: "2024",
    image: "/projects/taskflow.svg",
    imageAlt:
      "Capture de TaskFlow : tableau kanban avec colonnes à faire, en cours et terminé",
    challenge:
      "Des équipes distribuées utilisaient cinq outils différents : l'information se perdait et les réunions de statut prenaient des heures chaque semaine.",
    solution:
      "Application de collaboration temps réel (Socket.IO), tableaux drag & drop, mentions et notifications ciblées. Architecture Node.js + MongoDB, tests E2E critiques sur les conflits d'édition.",
    resultStat: "−25 %",
    resultText: "de réunions de statut, 10 000 tâches traitées chaque mois.",
    stack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    demo: "#",
  },
  {
    number: "03",
    title: "DevMetrics",
    meta: "Data · Dashboard interne",
    year: "2024",
    image: "/projects/devmetrics.svg",
    imageAlt:
      "Capture du tableau de bord DevMetrics : indicateurs de déploiement et graphiques",
    challenge:
      "Aucune visibilité sur la vélocité réelle : les leads tech pilotaient au ressenti, sans données de déploiement ni de qualité.",
    solution:
      "Tableau de bord d'analytics branché sur GitHub Actions et les APIs internes : métriques DORA, graphiques D3 interactifs, exports hebdomadaires automatiques.",
    resultStat: "3 équipes",
    resultText:
      "pilotées avec ces métriques, 200+ déploiements suivis en continu.",
    stack: ["Next.js", "D3.js", "GitHub API", "REST"],
    demo: "#",
  },
];

export const bento = {
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "GraphQL",
    "Docker",
    "Stripe",
  ],
  softSkills: [
    "Communication claire avec les non-techs",
    "Autonomie et sens du produit",
    "Pédagogie en revue de code",
    "Rigueur sur l'accessibilité",
  ],
  tools: ["Git · CI/CD", "Figma", "Linear", "Vitest / Playwright", "Vercel"],
  stats: [
    { value: "5+", label: "ans d'expérience" },
    { value: "30+", label: "projets livrés" },
  ],
};

export const skills = bento;
