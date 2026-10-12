"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio — Message de ${form.name}`);
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
          04 — Contact
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Parlons de votre prochain projet.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Remplis le formulaire ou écris directement — je réponds sous 24 h.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
        <Reveal>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="card p-8"
              >
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  Message préparé ✓
                </p>
                <p className="mt-3 leading-relaxed text-muted">
                  Ton client mail vient de s&apos;ouvrir avec le message pré-rempli.
                  Tu peux aussi m&apos;écrire directement sur WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-6"
                >
                  Écrire un autre message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="card space-y-4 p-6 sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-[12px] font-medium text-muted">
                    Nom
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="mt-2 w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      placeholder="Votre nom"
                    />
                  </label>
                  <label className="block text-[12px] font-medium text-muted">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="mt-2 w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                      placeholder="vous@email.com"
                    />
                  </label>
                </div>
                <label className="block text-[12px] font-medium text-muted">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="mt-2 w-full resize-y rounded-xl border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    placeholder="Parlez-moi de votre projet…"
                  />
                </label>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Envoyer le message
                  <span aria-hidden>→</span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-4">
            <a
              href={profile.phoneHref}
              className="link-soft block text-2xl font-semibold tracking-tight text-foreground hover:text-accent sm:text-3xl"
            >
              {profile.phoneDisplay}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="link-soft block text-sm text-muted"
            >
              {profile.email}
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-2"
            >
              WhatsApp ↗
            </a>
            <p className="pt-4 text-sm text-faint">{profile.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
