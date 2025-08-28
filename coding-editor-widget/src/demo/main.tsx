import React from "react"
import { createRoot } from "react-dom/client"
import { CodingEditorWidget } from "../index"
import type { CodingQuestion } from "../types/proctoring"

const questions: CodingQuestion[] = [
  {
    id: "q1",
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    constraints: ["Use O(n) time complexity if possible"],
    examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]" }],
    difficulty: "easy",
  },
]

const el = document.getElementById("root")!
createRoot(el).render(
  <React.StrictMode>
    <CodingEditorWidget questions={questions} />
  </React.StrictMode>
)
