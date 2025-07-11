import React from 'react'
import { X, Bot, Lightbulb } from 'lucide-react'

interface AICoachHintProps {
  questionId: string
  onClose: () => void
  formData: { [key: string]: string }
}

const AICoachHint: React.FC<AICoachHintProps> = ({ questionId, onClose, formData }) => {
  const getHintForQuestion = (questionId: string) => {
    const hints: { [key: string]: string } = {
      'situation_problem': 'Pomyśl o konkretnej sytuacji, która się ostatnio wydarzyła. Opisz ją szczegółowo - co się stało, kto był zaangażowany, jakie były Twoje odczucia. Przykład: "Podczas rozmowy o planach na weekend mój partner odrzucił moją propozycję bez wyjaśnienia, co sprawiło, że poczułem się zlekceważony."',
      
      'conflicts': 'Zastanów się nad wzorcami konfliktów w Twojej relacji. Czy powtarzają się podobne tematy? Czy są to kwestie komunikacyjne, różnice w wartościach, czy może nieporozumienia? Przykład: "Często kłócimy się o podział obowiązków domowych, bo każde z nas ma inne standardy porządku."',
      
      'support_lack': 'Pomyśl o sytuacjach, gdy czułeś się nierozumiany lub niewspierany. Co konkretnie chciałbyś usłyszeć od partnera? Przykład: "Gdy opowiadam o problemach w pracy, partner od razu daje rady zamiast po prostu mnie wysłuchać i zrozumieć moje emocje."',
      
      'understanding_goal': 'Wyobraź sobie, jak będzie wyglądać Twoja relacja, gdy lepiej zrozumiesz perspektywę partnera. Jakie konkretne zmiany zauważysz? Przykład: "Zrozumiem, dlaczego partner potrzebuje więcej czasu dla siebie i nie będę tego odbierać jako odrzucenia."',
      
      'conflict_resolution': 'Pomyśl o umiejętnościach, które chciałbyś rozwinąć. Jak będziesz reagować w trudnych sytuacjach? Przykład: "Nauczę się rozpoznawać, kiedy partner jest zmęczony i potrzebuje wsparcia, a nie krytyki."',
      
      'communication_improvement': 'Zastanów się nad stylem komunikacji partnera. Czy preferuje bezpośredniość czy delikatność? Czy potrzebuje czasu na przemyślenie? Przykład: "Zrozumiem, że partner lepiej reaguje na spokojną rozmowę niż na emocjonalne wybuchy."',
      
      'my_position': 'Przeanalizuj swoje odpowiedzi z poprzednich kroków. Co było dla Ciebie najważniejsze? Jakie emocje się pojawiły? Przykład: "Najważniejsze było dla mnie poczucie, że jestem słuchany i szanowany w tej relacji."',
      
      'important_realization': 'Pomyśl o momentach "aha!" podczas tego ćwiczenia. Co Cię zaskoczyło w perspektywie partnera? Przykład: "Zaskoczyło mnie, że partner może odbierać moją troskę jako kontrolę."',
      
      'new_perspective': 'Jak zmieniło się Twoje postrzeganie sytuacji po przejściu przez perspektywę partnera? Przykład: "Teraz widzę, że partner nie jest obojętny, tylko wyraża troskę w inny sposób niż ja."',
      
      'communication_help': 'Pomyśl konkretnie - jakie słowa, ton, timing będziesz używać inaczej? Przykład: "Zamiast od razu wyrażać swoje niezadowolenie, najpierw zapytam partnera o jego perspektywę."'
    }
    
    return hints[questionId] || 'Zastanów się głębiej nad tym pytaniem. Spróbuj być szczery i konkretny w swojej odpowiedzi. Pomyśl o konkretnych przykładach z Twojego życia.'
  }

  const getPersonalizedHint = () => {
    const baseHint = getHintForQuestion(questionId)
    const contextualAddition = Object.keys(formData).length > 0 
      ? ' Uwzględnij to, co już napisałeś w poprzednich odpowiedziach - jak to się łączy z Twoją obecną sytuacją?'
      : ''
    
    return baseHint + contextualAddition
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Bot className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">AI Coach - Podpowiedź</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Lightbulb className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-800 leading-relaxed">
                  {getPersonalizedHint()}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Tips */}
          <div className="mt-6 bg-yellow-50 rounded-lg p-4">
            <h4 className="font-medium text-yellow-800 mb-2">💡 Dodatkowe wskazówki:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Bądź szczery i autentyczny w swoich odpowiedziach</li>
              <li>• Nie ma złych odpowiedzi - liczy się Twoja perspektywa</li>
              <li>• Jeśli potrzebujesz więcej czasu, możesz wrócić do tego pytania później</li>
              <li>• Pomyśl o konkretnych przykładach z Twojego życia</li>
            </ul>
          </div>

          {/* Close Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Rozumiem, dziękuję
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AICoachHint
