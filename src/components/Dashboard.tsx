import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Users, Brain, ArrowRight, BookOpen } from 'lucide-react'

const Dashboard: React.FC = () => {
  const topics = [
    {
      id: 'relacje',
      title: 'Relacje',
      description: 'Budowanie i utrzymywanie zdrowych relacji interpersonalnych',
      icon: Heart,
      color: 'bg-rose-500',
      modules: [
        {
          id: 'w-obcych-butach',
          title: 'W obcych butach',
          description: 'Rozwijanie empatii i zrozumienia perspektywy partnera',
          duration: '15-20 min'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Narzędziownik Coacha</h1>
          </div>
          <p className="mt-2 text-gray-600">
            Narzędzie do rozwoju osobisto-zawodowego oparte na metodologii naukowej
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Jak korzystać z tej książki
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Sytuacja - Problem - Wyzwanie</h3>
              <p className="text-yellow-700 text-sm">
                Tu znajdziesz informacje, kiedy najlepiej użyć tego narzędzia, do czego jest przydatne.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">Korzyści - Cel tego narzędzia</h3>
              <p className="text-amber-700 text-sm">
                Tu dowiesz się co osiągniesz, gdy je zastostujesz.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Opis narzędzia</h3>
              <p className="text-gray-700 text-sm">
                To opis, który poprowadzi cię w procesie krok po kroku.
              </p>
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-8">
          {topics.map((topic) => {
            const IconComponent = topic.icon
            return (
              <div key={topic.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`${topic.color} p-3 rounded-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{topic.title}</h2>
                      <p className="text-gray-600">{topic.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {topic.modules.map((module) => (
                      <Link
                        key={module.id}
                        to={`/modul/${topic.id}/${module.id}`}
                        className="group bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                              {module.title}
                            </h3>
                            <p className="text-gray-600 mt-1">{module.description}</p>
                            <span className="inline-block mt-2 text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">
                              {module.duration}
                            </span>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Framework Info */}
        <div className="mt-12 bg-indigo-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-indigo-900 mb-4">
            Framework Naukowy
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800">Założenia</h4>
              <p className="text-sm text-indigo-600 mt-1">Kroki 08-12</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800">Twierdzenia</h4>
              <p className="text-sm text-indigo-600 mt-1">Kroki 13-15</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800">Dowód</h4>
              <p className="text-sm text-indigo-600 mt-1">Analiza danych</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800">Wniosek</h4>
              <p className="text-sm text-indigo-600 mt-1">Krok 16 - Rekomendacje AI</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
