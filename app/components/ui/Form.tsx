'use client';

import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    ville: '',
    codePostal: '',
    sectionParcelle: '',
    numeroParcelle: '',
    message: '',
    honeypot: '', // Anti-bot
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return; // Bot detected

    // Here you can post to an API route if needed
    // await fetch('/api/send-form', { method: 'POST', body: JSON.stringify(formData) });

    setSubmitted(true);
  };

  if (submitted) {
    return <p className="text-white font-medium">Votre demande a bien été transmise, nous vous recontacterons rapidement.</p>;
  }

  return (
    <section className="py-6 px-4 text-black">
      <div className="max-w-2xl mx-auto bg-white/30 backdrop-blur-md rounded-xl p-8 shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">Étude de faisabilité</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom" className="block mb-2 font-semibold">Nom *</label>
              <input
                type="text"
                id="nom"
                name="nom"
                required
                className="w-full p-3 rounded-xl border border-black/20 bg-white/70 backdrop-blur-md text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] transition"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="prenom" className="block mb-2 font-semibold">Prénom *</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                required
                className="w-full p-3 rounded-xl border border-black/20 bg-white/70 backdrop-blur-md text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] transition"
                placeholder="Votre prénom"
              />
            </div>
            <div>
              <label htmlFor="telephone" className="block mb-2 font-semibold">Téléphone *</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                required
                className="w-full p-3 rounded-xl border border-black/20 bg-white/70 backdrop-blur-md text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] transition"
                placeholder="Votre numéro de téléphone"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 rounded-xl border border-black/20 bg-white/70 backdrop-blur-md text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] transition"
                placeholder="Votre adresse e-mail"
              />
            </div>
            <div>
              <label htmlFor="ville" className="block mb-2 font-semibold">Ville *</label>
              <input
                type="text"
                id="ville"
                name="ville"
                required
                className="w-full p-3 rounded-xl border border-black/20 bg-white/70 backdrop-blur-md text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] transition"
                placeholder="Votre ville"
              />
            </div>
            <div>
              <label htmlFor="codePostal" className="block mb-2 font-semibold">Code Postal *</label>
              <input
                type="text"
                id="codePostal"
                name="codePostal"
                required
                className="w-full p-3 rounded-xl border border-black/20 bg-white/70 backdrop-blur-md text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] transition"
                placeholder="Votre code postal"
              />
            </div>
            <div>
              <label htmlFor="sectionParcelle" className="block mb-2 font-semibold">Section de parcelle *</label>
              <input
                type="text"
                id="sectionParcelle"
                name="sectionParcelle"
                required
                className="w-full p-3 rounded-xl border border-black/20 bg-white/70 backdrop-blur-md text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] transition"
                placeholder="Section de votre parcelle"
              />
            </div>
            <div>
              <label htmlFor="numeroParcelle" className="block mb-2 font-semibold">Numéro de parcelle *</label>
              <input
                type="text"
                id="numeroParcelle"
                name="numeroParcelle"
                required
                className="w-full p-3 rounded-xl border border-black/20 bg-white/70 backdrop-blur-md text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] transition"
                placeholder="Numéro de votre parcelle"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-3 rounded-xl border border-black/20 bg-white/70 backdrop-blur-md text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] transition"
              placeholder="Votre message (facultatif)"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[color:var(--gold)] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[color:var(--gold)]/80 transition"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
