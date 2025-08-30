import React, { useState, useCallback, useEffect } from 'react'
import { CodingEnvironment } from '@/components/coding-environment'

import codingQuestionsData from '../coding-questions.json'

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [questions, setQuestions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setQuestions(codingQuestionsData.questions)
    setLoading(false)
  }, [])

  const handleQuestionChange = useCallback((index: number) => {
    setCurrentQuestionIndex(index)
  }, [])

  const handleSessionComplete = useCallback(() => {
    console.log('Coding session complete')
  }, [])

  if (loading) return <div>Loading...</div>

  // Extract timer and test cases from JSON
  const timer = codingQuestionsData.timer
  const testCases = codingQuestionsData.testCases
  const numberOfQuestions = questions.length

  return (
    <main className="min-h-screen">
      <CodingEnvironment
        questions={questions}
        testCases={testCases}
        timer={timer}
        numberOfQuestions={numberOfQuestions}
        currentQuestionIndex={currentQuestionIndex}
        onQuestionChange={handleQuestionChange}
        onSessionComplete={handleSessionComplete}
      />
    </main>
  )
}
