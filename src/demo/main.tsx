import React from "react"
import { createRoot } from "react-dom/client"
import { CodingEditorWidget } from "../index"
import type { CodingQuestion } from "../types/proctoring"

const questions: CodingQuestion[] = [
  {
    id: "q1",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    constraints: ["Return indices in any order", "0 <= nums.length <= 10^4"],
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "2 + 7 = 9" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]", explanation: "2 + 4 = 6" },
    ],
    testCases: [
      { input: "4\n2 7 11 15\n9\n", output: "0 1\n" },
      { input: "3\n3 2 4\n6\n", output: "1 2\n" },
      { input: "5\n1 3 5 7 9\n8\n", output: "0 3\n" },
    ],
    difficulty: "easy",
    timeLimit: 60,
  },

  {
    id: "q2",
    title: "Longest Substring Without Repeating Characters",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    constraints: ["0 <= s.length <= 5 * 10^4", "Use O(n) sliding window approach if possible"],
    examples: [
      { input: "s = \"abcabcbb\"", output: "3", explanation: "The answer is \"abc\", with the length of 3." },
      { input: "s = \"bbbbb\"", output: "1", explanation: "The answer is \"b\", with the length of 1." },
    ],
    testCases: [
      { input: "abcabcbb\n", output: "3\n" },
      { input: "bbbbb\n", output: "1\n" },
      { input: "pwwkew\n", output: "3\n" },
    ],
    difficulty: "medium",
    timeLimit: 120,
  },

  {
    id: "q3",
    title: "Valid Parentheses",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    constraints: [
      "1 <= s.length <= 10^4",
      "Open brackets must be closed by the same type of brackets.",
      "Open brackets must be closed in the correct order.",
    ],
    examples: [
      { input: "s = \"()\"", output: "true" },
      { input: "s = \"()[]{}\"", output: "true" },
    ],
    testCases: [
      { input: "()\n", output: "true\n" },
      { input: "()[]{}\n", output: "true\n" },
      { input: "(]\n", output: "false\n" },
    ],
    difficulty: "easy",
    timeLimit: 60,
  },
]

const el = document.getElementById("root")!
createRoot(el).render(
  <React.StrictMode>
    <CodingEditorWidget questions={questions} />
  </React.StrictMode>
)
