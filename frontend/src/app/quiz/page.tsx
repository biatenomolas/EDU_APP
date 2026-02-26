import Link from 'next/link';
import { Target, ArrowLeft, Sparkles, Award } from 'lucide-react';

export default function QuizzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Conteneur principal */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Header avec bouton retour */}
        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/"
            className="p-2.5 hover:bg-slate-100 active:bg-slate-200 rounded-lg transition-colors duration-200 text-slate-600 hover:text-slate-900"
            title="Retour à l'accueil"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Quizz IA
          </h1>
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col items-center justify-center py-12 sm:py-20">
          
          {/* Icône principale */}
          <div className="mb-8">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center">
                <Target size={56} className="text-emerald-600" />
              </div>
              {/* Badge d'accent */}
              <div className="absolute -top-2 -right-2 bg-emerald-600 rounded-full p-2">
                <Sparkles size={20} className="text-white" />
              </div>
            </div>
          </div>

          {/* Titre et description */}
          <div className="text-center max-w-md mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Prêt à tester tes connaissances ?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Les quizz sont générés automatiquement à partir de tes cours et résumés pour renforcer ton apprentissage.
            </p>
          </div>

          {/* Cartes étapes */}
          <div className="w-full max-w-md space-y-3 mb-10">
            <div className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center font-bold text-emerald-600 text-sm">
                1
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">Upload un PDF</p>
                <p className="text-sm text-slate-500 mt-1">Va dans l'onglet Résumé</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center font-bold text-emerald-600 text-sm">
                2
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">Crée un résumé</p>
                <p className="text-sm text-slate-500 mt-1">Laisse l'IA faire le travail</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center font-bold text-emerald-600 text-sm">
                3
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">Génère un quizz</p>
                <p className="text-sm text-slate-500 mt-1">Et gagne des XP</p>
              </div>
            </div>
          </div>

          {/* CTA principal */}
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:from-emerald-800 active:to-teal-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl mb-8"
          >
            <Target size={20} />
            Générer un Quizz
          </Link>

          {/* Info supplémentaire */}
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-4">
              Aucun quizz en cours ?
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-50 border border-emerald-200 rounded-lg">
              <Award size={18} className="text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Gagne jusqu'à 500 XP par quizz
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}