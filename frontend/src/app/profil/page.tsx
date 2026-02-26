'use client';

import { useAuth } from '../context/AuthContext';
import { Trophy, Award, Sparkles, TrendingUp } from 'lucide-react';

export default function ProfilPage() {
  const { user } = useAuth();

  const xpForNextLevel = 1000;
  const xpInCurrentLevel = (user?.xp || 0) % xpForNextLevel;
  const progressPercent = (xpInCurrentLevel / xpForNextLevel) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Conteneur principal */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Section Profil */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200">
            
            {/* Avatar */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-5xl sm:text-6xl shadow-lg">
                  👤
                </div>
                {/* Badge niveau */}
                <div className="absolute bottom-0 right-0 bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg border-4 border-white shadow-md">
                  {user?.level}
                </div>
              </div>

              {/* Infos utilisateur */}
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-2">
                {user?.username}
              </h1>
              <p className="text-slate-600 font-medium flex items-center gap-2">
                <Sparkles size={16} className="text-emerald-600" />
                {user?.xp} XP
              </p>
            </div>

            {/* Barre XP */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-700">Progression</span>
                <span className="text-sm font-semibold text-emerald-600">
                  {Math.round(progressPercent)}%
                </span>
              </div>
              <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 mt-2">
                {xpForNextLevel - xpInCurrentLevel} XP jusqu'au prochain niveau
              </p>
            </div>
          </div>
        </div>

        {/* Section Statistiques */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Trophy className="text-amber-600" size={28} />
            Statistiques
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card XP Total */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <p className="text-slate-600 font-semibold text-sm">XP Total</p>
                <Sparkles className="text-emerald-600" size={20} />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-emerald-600">
                {user?.xp}
              </p>
              <p className="text-xs text-slate-500 mt-3">
                Points d'expérience accumulés
              </p>
            </div>

            {/* Card Niveau */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <p className="text-slate-600 font-semibold text-sm">Niveau</p>
                <TrendingUp className="text-teal-600" size={20} />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-teal-600">
                {user?.level}
              </p>
              <p className="text-xs text-slate-500 mt-3">
                Tu progresses bien !
              </p>
            </div>
          </div>
        </div>

        {/* Section Badges */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Award className="text-amber-600" size={28} />
            Badges
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <p className="text-slate-600 text-center mb-6">
              Déverrouille des badges en atteignant des jalons
            </p>

            {/* Grille de badges */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 opacity-40 grayscale">
              <div className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-2">🏆</div>
                <p className="text-xs font-semibold text-amber-900">Champion</p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-2">📚</div>
                <p className="text-xs font-semibold text-blue-900">Scholar</p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-2">🔥</div>
                <p className="text-xs font-semibold text-red-900">On Fire</p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-2">⭐</div>
                <p className="text-xs font-semibold text-purple-900">Star</p>
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 mt-6">
              😎 Continue d'apprendre pour déverrouiller les badges !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}