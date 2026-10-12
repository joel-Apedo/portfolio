export const profile = {
  name: "APEDO Kodjo Joel",
  role: "Développeur Full-Stack · Android sécurisé & Cybersécurité",
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
    "Je conçois des produits web qui allient performance, accessibilité et direction artistique. De la stratégie au déploiement, je transforme des idées complexes en interfaces limpides. Côté cybersécurité et Android, je démonte, analyse et sécurise — du pentest au décodage mobile. Toujours avec la même obsession : le détail.",
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
  notionId?: string;
  slug?: string;
  cover?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "ArtisanLink",
    meta: "Marketplace · Services locaux à Bamako",
    year: "2026",
    image: "/projects/artisanlink.svg",
    imageAlt:
      "Capture d'ArtisanLink : accueil avec proposition de trouver un artisan vérifié en 5 minutes",
    challenge:
      "À Bamako, trouver un électricien, un plombier ou un mécanicien de confiance prend des heures d'appels. Les artisans sérieux, eux, restent invisibles.",
    solution:
      "Plateforme web qui connecte la demande WhatsApp à un annuaire d'artisans vérifiés et notés : tableau de bord, notifications, multi-langue FR/EN et mode sombre. Zéro friction pour le client, zéro app à installer.",
    resultStat: "5 min",
    resultText:
      "pour être connecté à un artisan vérifié — et des appels WhatsApp en hausse dès le premier mois.",
    stack: ["HTML5", "CSS3", "JavaScript Vanilla", "Figma"],
    repo: "https://github.com/joel-Apedo/artisanlink",
    slug: "artisanlink",
  },
  {
    number: "02",
    title: "FASOmarket",
    meta: "AgriTech · Marketplace d'élevage",
    year: "2025",
    image: "/projects/fasomarket.svg",
    imageAlt:
      "Capture de FASOmarket : annonces d'élevage avec paiement mobile et traçabilité QR",
    challenge:
      "Éleveurs et acheteurs maliens se trouvent au marché avec un rapport de confiance faible : prix opaques, animaux non traçés, paiement en espèces risqué.",
    solution:
      "PWA marketplace d'élevage : annonces vérifiées, chat intégré, paiement Orange Money & Wave, traçabilité par QR code et livraison Translait. Transformable en app Android via Capacitor.",
    resultStat: "3 flux",
    resultText:
      "réunis en une seule app : annonce, paiement mobile et traçabilité de bout en bout.",
    stack: ["PWA", "HTML5", "CSS3", "JavaScript", "Capacitor"],
    repo: "https://github.com/joel-Apedo/fasomarket",
    slug: "fasomarket",
  },
  {
    number: "03",
    title: "UniGest",
    meta: "EdTech · Gestion universitaire desktop",
    year: "2025",
    image: "/projects/unigest.svg",
    imageAlt:
      "Capture d'UniGest : tableau de bord de gestion universitaire avec statistiques",
    challenge:
      "Une université gérait étudiants, notes, frais et absences sur papier et fichiers Excel : bulletins tardifs, impayés introuvables, zéro vue d'ensemble.",
    solution:
      "Application desktop Electron + SQLite, multi-rôles (admin, professeur, étudiant) : inscriptions, notes et bulletins imprimables, finances et reçus numérotés, absences, bibliothèque, sauvegardes automatiques.",
    resultStat: "1 clic",
    resultText:
      "pour générer un bulletin officiel ou clôturer l'année — avant, c'était des jours de travail.",
    stack: ["Electron", "SQLite", "Node.js", "JavaScript"],
    repo: "https://github.com/joel-Apedo/unigest",
    slug: "unigest",
  },
];

export const skills = {
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Python",
    "Django",
    "Electron",
    "Capacitor",
    "Kotlin",
    "Java Android",
    "Flutter",
  ],
  android: [
    "Développement d'apps Android natives (Kotlin / Java)",
    "Apps hybrides & PWA sécurisées (Capacitor, Flutter)",
    "Durcissement d'APK : anti-reverse, SSL pinning, obfuscation",
    "Gestion des permissions et stockage chiffré",
    "Intégration paiement mobile (Orange Money, Wave)",
    "Publication Play Store & signing sécurisé",
  ],
  security: [
    "Analyse de vulnérabilités & pentest éthique",
    "Programmation Android sécurisée (hardening, anti-tampering)",
    "Sécurité mobile : ADB, rooting, recovery",
    "Décodage / déverrouillage et forensics mobile",
    "Réseaux : sniffing, Wi-Fi, protocoles",
    "Chiffrement, mots de passe, OSINT",
    "Scripting bash & Python pour l'automatisation",
  ],
  softSkills: [
    "Communication claire avec les non-techs",
    "Autonomie et sens du produit",
    "Pédagogie en revue de code",
    "Rigueur sur l'accessibilité",
  ],
  tools: ["Git · CI/CD", "Figma", "VS Code", "Vercel", "Linux"],
  stats: [
    { value: "5+", label: "ans d'expérience" },
    { value: "30+", label: "projets livrés" },
    { value: "24h", label: "délai de réponse" },
  ],
};
