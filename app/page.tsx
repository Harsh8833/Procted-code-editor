"use client"

import ProctoringWidget from "@/components/proctoring-widget"

const sampleQuestions = [
  {
    id: "q1",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists.",
    ],
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
    ],
    difficulty: "easy" as const,
    timeLimit: 1800,
  },
  {
    id: "q2",
    title: "Valid Parentheses",
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'."],
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    difficulty: "easy" as const,
    timeLimit: 1200,
  },
]

export default function Home() {
  const handleReadyToStart = () => {
    console.log("Proctoring session ready to start")
  }

  const handleUpdate = (data: any) => {
    console.log("Session update:", data)
  }

  const handleComplete = (data: any) => {
    console.log("Session complete:", data)
  }

  return (
    <main className="min-h-screen">
      <ProctoringWidget
        questions={sampleQuestions}
        onReadyToStart={handleReadyToStart}
        onUpdate={handleUpdate}
        onComplete={handleComplete}
      />
    </main>
  )
}
