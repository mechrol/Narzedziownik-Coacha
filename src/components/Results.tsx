import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Download, Share2, Bot, CheckCircle, Lightbulb, Target } from 'lucide-react'
import { useForm } from '../context/FormContext'

const Results: React.FC = () => {
  const { topicId, moduleId } = useParams()
  const navigate = useNavigate()
  const { formData, resetFormData } = useForm()

  const generateAIRecommendations = () => {
    // Symulacja rekomendacji AI na podstawie danych z formularza
    const recommendations = [
      {
        category: 'Komunikacja',
        icon: '💬',
        title: 'Aktywne słuchanie',
        description: 'Na podstawie Twoich odpowiedzi widzę, że ważne jest dla Ciebie poczucie bycia wysłuchanym. Spróbuj zastosować technikę aktywnego słuchania również wobec partnera.',
        actions: [
          'Zadawaj pytania otwarte: "Co myślisz o...?"',
          'Parafrazuj to, co usłyszałeś: "Rozumiem, że czujesz..."',
          'Unikaj przerywania podczas rozmowy'
        ]
      },
      {
        category: 'Empatia',
        icon: '❤️',
        title: 'Rozwijanie perspektywy partnera',
        description: 'Twoje odpowiedzi pokazują, że zaczynasz rozumieć punkt widzenia partnera. To doskonały fundament do budowania głębszej więzi.',
        actions: [
          'Przed reakcją zadaj sobie pytanie: "Dlaczego partner tak reaguje?"',
          'Spróbuj zrozumieć emocje stojące za zachowaniem',
          'Wyrażaj zrozumienie: "Widzę, że to dla Ciebie ważne"'
        ]
      },
      {
        category: 'Rozwiązywanie konfliktów',
        icon: '🤝',
        title: 'Konstruktywne podejście do różnic',
        description: 'Zauważam, że identyfikujesz źródła napięć w relacji. Teraz czas na konstruktywne rozwiązania.',
        actions: [
          'Skupiaj się na problemie, nie na osobie',
          'Używaj komunikatów "ja" zamiast "ty"',
          'Szukaj kompromisów i wspólnych rozwiązań'
        ]
      },
      {
        category: 'Rozwój relacji',
        icon: '🌱',
        title: 'Budowanie głębszej więzi',
        description: 'Twoja gotowość do zrozumienia partnera to klucz do rozwoju relacji. Oto jak możesz to wykorzystać.',
        actions: [
          'Regularnie rozmawiaj o potrzebach i oczekiwaniach',
          'Doceniaj różnice jako źródło wzajemnego wzbogacania',
          'Twórz wspólne cele i plany na przyszłość'
        ]
      }
    ]

    return recommendations
  }

  const recommendations = generateAIRecommendations()

  const handleNewSession = () => {
    resetFormData()
    navigate('/')
  }

  const handleDownloadResults = () => {
    // Symulacja pobierania wyników
    const results = {
      module: 'W obcych butach',
      topic: 'Relacje',
      date: new Date().toLocaleDateString('pl-PL'),
      responses: formData,
      recommendations: recommendations
    }
    
    const dataStr = JSON.stringify(results, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `wyniki-coaching-${Date.now()}.json`
    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Powrót do Dashboard</span>
            </button>
            <div className="flex space-x-3">
              <button
                onClick={handleDownloadResults}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <Download className="h-4 w-4" />
                <span>Pobierz wyniki</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <Share2 className="h-4 w-4" />
                <span>Udostępnij</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Gratulacje! Ukończyłeś moduł "W obcych butach"
            </h1>
            <p className="text-gray-600 text-lg">
              Na podstawie Twoich odpowiedzi przygotowaliśmy spersonalizowane rekomendacje
            </p>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Bot className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Rekomendacje AI Coach</h2>
              <p className="text-gray-600">Spersonalizowane wskazówki na podstawie Twoich odpowiedzi</p>
            </div>
          </div>

          <div className="grid gap-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{rec.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">
                        {rec.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">{rec.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{rec.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                        <Target className="h-4 w-4" />
                        <span>Konkretne działania:</span>
                      </h4>
                      <ul className="space-y-1">
                        {rec.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="text-gray-700 text-sm flex items-start space-x-2">
                            <span className="text-indigo-500 mt-1">•</span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Podsumowanie Twojej podróży
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-lg mb-3">
                <Lightbulb className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900">Założenia</h4>
              <p className="text-sm text-gray-600">Zdefiniowałeś sytuację i cele</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-lg mb-3">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900">Twierdzenia</h4>
              <p className="text-sm text-gray-600">Przeanalizowałeś różne perspektywy</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-4 rounded-lg mb-3">
                <Target className="h-8 w-8 text-indigo-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900">Wnioski</h4>
              <p className="text-sm text-gray-600">Otrzymałeś spersonalizowane rekomendacje</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-xl font-semibold mb-4">Co dalej?</h3>
          <p className="mb-6">
            Zastosuj otrzymane rekomendacje w praktyce i obserwuj zmiany w swojej relacji.
            Możesz wrócić do tego modułu w każdej chwili lub eksplorować inne obszary rozwoju.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleNewSession}
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Rozpocznij nową sesję
            </button>
            <button
              onClick={() => navigate('/')}
              className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Eksploruj inne moduły
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Results
