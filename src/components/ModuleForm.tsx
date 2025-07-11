import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Bot, Lightbulb } from 'lucide-react'
import { useForm } from '../context/FormContext'
import AICoachHint from './AICoachHint'

const ModuleForm: React.FC = () => {
  const { topicId, moduleId } = useParams()
  const navigate = useNavigate()
  const { formData, updateFormData } = useForm()
  const [currentStep, setCurrentStep] = useState(1)
  const [showHint, setShowHint] = useState<string | null>(null)

  const steps = [
    {
      id: 1,
      title: 'Założenia - Sytuacja i Problem',
      type: 'assumptions',
      description: 'Zdefiniuj sytuację problemową i wyzwania',
      questions: [
        {
          id: 'situation_problem',
          label: 'Opisz sytuację problemową w relacji:',
          type: 'textarea',
          placeholder: 'Nie dogadujesz się z bliską osobą, lub osobą z którą chcesz/potrzebujesz się dogadać...'
        },
        {
          id: 'conflicts',
          label: 'Gdy w relacji pojawiają się konflikty i nieporozumienia:',
          type: 'text'
        },
        {
          id: 'support_lack',
          label: 'Gdy bliska ci osoba nie popiera twoich pomysłów, działań, wyborów:',
          type: 'text'
        }
      ]
    },
    {
      id: 2,
      title: 'Założenia - Cele i Korzyści',
      type: 'assumptions',
      description: 'Określ cele i oczekiwane korzyści',
      questions: [
        {
          id: 'understanding_goal',
          label: 'Zobaczysz punkt widzenia osoby, z którą jesteś w relacji i zrozumiesz z czego wynika właśnie takie podejście:',
          type: 'text'
        },
        {
          id: 'conflict_resolution',
          label: 'Nauczysz się rozpoznawać źródła konfliktów i zapobiegać im w przyszłości:',
          type: 'text'
        },
        {
          id: 'communication_improvement',
          label: 'Zrozumiesz lepiej osobę, z którą jesteś w relacji i nauczysz się trafniej dopasowywać sposób komunikacji:',
          type: 'text'
        }
      ]
    },
    {
      id: 3,
      title: 'Założenia - Refleksja Osobista',
      type: 'assumptions',
      description: 'Głęboka refleksja nad swoją sytuacją',
      questions: [
        {
          id: 'importance',
          label: 'Dlaczego to jest dla mnie takie ważne?',
          type: 'text'
        },
        {
          id: 'gains',
          label: 'Co dzięki temu zyskam?',
          type: 'text'
        },
        {
          id: 'fears',
          label: 'Co przez to stracę?',
          type: 'text'
        },
        {
          id: 'changes',
          label: 'Co się dla mnie zmieni?',
          type: 'text'
        },
        {
          id: 'life_changes',
          label: 'Co zmieni się w moim życiu?',
          type: 'text'
        },
        {
          id: 'goodness',
          label: 'Czy to jest dla mnie dobre?',
          type: 'text'
        },
        {
          id: 'partner_goodness',
          label: 'Czy to jest dobre dla mojego otoczenia?',
          type: 'text'
        },
        {
          id: 'partner_meaning',
          label: 'Co to oznacza dla mojego partnera?',
          type: 'text'
        },
        {
          id: 'thoughts',
          label: 'Dlaczego tak myślę?',
          type: 'text'
        },
        {
          id: 'feelings',
          label: 'Co w związku z tym czuję?',
          type: 'text'
        }
      ]
    },
    {
      id: 4,
      title: 'Twierdzenia - Pozycja "JA"',
      type: 'theorems',
      description: 'Analiza własnej perspektywy',
      questions: [
        {
          id: 'my_position',
          label: 'Co było ważne dla ciebie w tym ćwiczeniu w pozycji "JA"?',
          type: 'textarea',
          placeholder: 'Zapisz wszystkie odpowiedzi, jakie ci się pojawiły...'
        }
      ]
    },
    {
      id: 5,
      title: 'Twierdzenia - Pozycja Partnera',
      type: 'theorems',
      description: 'Analiza perspektywy partnera',
      questions: [
        {
          id: 'partner_meaning_detailed',
          label: 'Co to dla mnie oznacza?',
          type: 'text'
        },
        {
          id: 'partner_changes',
          label: 'Co się dla mnie zmieni?',
          type: 'text'
        },
        {
          id: 'partner_gains',
          label: 'Co zyskam?',
          type: 'text'
        },
        {
          id: 'partner_losses',
          label: 'Co stracę?',
          type: 'text'
        },
        {
          id: 'partner_life_changes',
          label: 'Co zmieni się w moim życiu?',
          type: 'text'
        },
        {
          id: 'partner_desire',
          label: 'Czy ja chcę aby tak się zmieniło się moje życie? Dlaczego?',
          type: 'text'
        },
        {
          id: 'partner_goodness_self',
          label: 'Czy to jest dla mnie dobre?',
          type: 'text'
        },
        {
          id: 'partner_similar',
          label: 'Co mi się w tym podobało?',
          type: 'text'
        },
        {
          id: 'partner_concerns',
          label: 'Czego się obawiam?',
          type: 'text'
        },
        {
          id: 'partner_resistance',
          label: 'Dlaczego to budzę mój opór/niezgodę?',
          type: 'text'
        },
        {
          id: 'partner_thoughts_detailed',
          label: 'Dlaczego tak myślę? (jakie mam wcześniejsze doświadczenia?)',
          type: 'text'
        },
        {
          id: 'partner_feelings_detailed',
          label: 'Co w związku z tym czuję?',
          type: 'text'
        }
      ]
    },
    {
      id: 6,
      title: 'Twierdzenia - Refleksje i Wnioski',
      type: 'theorems',
      description: 'Podsumowanie i nowe perspektywy',
      questions: [
        {
          id: 'important_realization',
          label: 'Co cię zaskoczyło, co było nowego, czego wcześniej nie widziałeś/eś?',
          type: 'textarea'
        },
        {
          id: 'new_perspective',
          label: 'Jaką nową/inną perspektywę dostrzegłeś/eś?',
          type: 'textarea'
        },
        {
          id: 'partner_understanding',
          label: 'Czego dowiedziałeś/aś się o swoim partnerze, czego wcześniej nie widziałeś/łaś?',
          type: 'textarea'
        },
        {
          id: 'partner_needs',
          label: 'Czego Twój partner potrzebuje w tej sytuacji?',
          type: 'textarea'
        },
        {
          id: 'communication_help',
          label: 'Jak ci to pomoże w dalszej komunikacji w tym temacie?',
          type: 'textarea'
        },
        {
          id: 'most_important',
          label: 'Co jest w tym dla ciebie najcenniejsze?',
          type: 'textarea'
        },
        {
          id: 'future_application',
          label: 'Jak możesz wykorzystać to w przyszłości, aby usprawić komunikację między wami?',
          type: 'textarea'
        }
      ]
    }
  ]

  const currentStepData = steps[currentStep - 1]

  const handleInputChange = (questionId: string, value: string) => {
    updateFormData({ [questionId]: value })
  }

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      navigate(`/wyniki/${topicId}/${moduleId}`)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getStepColor = (step: any) => {
    switch (step.type) {
      case 'assumptions':
        return 'bg-blue-500'
      case 'theorems':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen">
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
            <div className="text-sm text-gray-500">
              Krok {currentStep} z {steps.length}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex-1 h-2 rounded ${
                  index + 1 <= currentStep
                    ? getStepColor(step)
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          {/* Step Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`${getStepColor(currentStepData)} p-2 rounded-lg`}>
                <span className="text-white font-semibold text-sm">
                  {currentStepData.type === 'assumptions' ? 'ZAŁOŻENIA' : 'TWIERDZENIA'}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                {currentStepData.title}
              </h1>
            </div>
            <p className="text-gray-600">{currentStepData.description}</p>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {currentStepData.questions.map((question) => (
              <div key={question.id} className="space-y-2">
                <div className="flex items-start justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    {question.label}
                  </label>
                  <button
                    onClick={() => setShowHint(question.id)}
                    className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 text-sm"
                  >
                    <Bot className="h-4 w-4" />
                    <span>Podpowiedź AI</span>
                  </button>
                </div>
                
                {question.type === 'textarea' ? (
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder={question.placeholder}
                    value={formData[question.id] || ''}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder={question.placeholder}
                    value={formData[question.id] || ''}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Poprzedni</span>
            </button>

            <button
              onClick={handleNext}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <span>{currentStep === steps.length ? 'Zakończ i zobacz wyniki' : 'Następny'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>

      {/* AI Coach Hint Modal */}
      {showHint && (
        <AICoachHint
          questionId={showHint}
          onClose={() => setShowHint(null)}
          formData={formData}
        />
      )}
    </div>
  )
}

export default ModuleForm
