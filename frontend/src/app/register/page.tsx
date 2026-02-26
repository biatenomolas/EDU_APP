'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import { ArrowRight, Mail, Lock, User } from 'lucide-react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await register(username, email, password);
      alert('✅ Compte créé avec succès !\nRedirection vers la page de connexion...');
      window.location.href = '/login';
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erreur lors de l’inscription');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-600 px-4 py-8 sm:py-12">
      <div className="w-full max-w-md">
        {/* Carte d'inscription */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
          
          {/* Branding */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
              EduAI
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Apprends plus vite avec l'IA
            </p>
          </div>

          {/* Titre de la page */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
              Crée ton compte
            </h2>
            <p className="text-slate-500 text-sm text-center mt-2">
              C'est gratuit et tu auras accès à tout !
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Champ Pseudo */}
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-slate-700 mb-2">
                <User className="inline mr-2" size={16} />
                Pseudo
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-base"
                placeholder="SalomonBiate"
                required
              />
            </div>

            {/* Champ Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                <Mail className="inline mr-2" size={16} />
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-base"
                placeholder="ton@email.com"
                required
              />
            </div>

            {/* Champ Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                <Lock className="inline mr-2" size={16} />
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-base"
                placeholder="Minimum 8 caractères"
                required
              />
              <p className="text-xs text-slate-500 mt-2">
                Utilise au moins 8 caractères pour plus de sécurité
              </p>
            </div>

            {/* Message d'erreur */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm font-medium">⚠️ {error}</p>
              </div>
            )}

            {/* Bouton d'inscription */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:from-emerald-800 active:to-teal-800 text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Création en cours...
                </>
              ) : (
                <>
                  Créer mon compte
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          {/* Lien de connexion */}
          <p className="text-center mt-8 text-slate-600 text-sm">
            Déjà un compte ?{' '}
            <Link
              href="/login"
              className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200"
            >
              Se connecter
            </Link>
          </p>

          {/* Divider */}
          <div className="relative mt-8 mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">ou continue sans créer un compte</span>
            </div>
          </div>

          {/* Info supplémentaire */}
          <div className="space-y-2 text-xs text-slate-500">
            <p>✅ Accès à tous les tutoriels vidéo</p>
            <p>✅ Création de résumés avec l'IA</p>
            <p>✅ Quizz et suivi de progression</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white/70 text-xs mt-6">
          En t'inscrivant, tu acceptes nos conditions d'utilisation
        </p>
      </div>
    </div>
  );
}