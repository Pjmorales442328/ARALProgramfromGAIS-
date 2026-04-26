# ARAL Teaching Flow Builder Guidelines

When generating or formatting the interactive teaching flow for the ARAL program sessions, strictly adhere to the following rules:

1. **Verify with Learner's Workbook:** Always cross-reference the Tutor Guide with the Learner's Workbook. Some guide instructions are confusing or lack context without the workbook (e.g., missing texts, exact activity requirements, specific choices). Provide the complete picture.
2. **Accurate and Logical Student Views:** What is shown in `studentView` must exactly match what the student is meant to see or read at that exact moment.
    - If the teacher says "Take note of the underlined words," ensure the words in the `studentView` are actually marked with `<u>` or highlight styled tags.
    - Break up steps logically. Do not show answers, teacher prompts, or next steps in the student view prematurely (e.g., don't show the jumbled letters AND the follow-up definition/sentence questions in the same view if it ruins the guessing progression).
    - If a text or material is missing, create a reasonable placeholder.
3. **Structured Content:** Use HTML tags (e.g., `<strong>`, `<u>`, `<span style="...">`, `<br/>`) inside the `studentView` string to format activities attractively, legibly, and accurately for the web application UI.
4. **Follow STRICT B-R-I-D-G-E step format:**
    - Bridge, Revisit, Immerse, Discuss, Grow, Evaluate.
    - Keep steps small and clear. One idea per step.
5. **No Summarizing/Explaining:** Output only the requested step-by-step teacher actions, expectations, and student views. Make it instantly actionable for a real-time substitute teacher with zero preparation.
6. **Continuous Improvement from Corrections:** Analyze user corrections carefully. Whenever a correction or feedback is provided, adapt to not create the same, similar, or closely related mistakes moving forward.
7. **Explicit Expected Answers:** The `expected` field must contain the *actual, complete answers* the teacher should expect to receive (e.g., the correct choice letter AND the corresponding definition/value). It should not just restate the target word, question, or just the letter without context, so the teacher immediately knows if the student's answer is truly correct.
8. **Visual Context and UI Emulation:** When the workbook contains visual exercises (e.g., matching words to shapes like hearts, filling out specific tables, or connecting boxes), use HTML/CSS, emojis, and inline styles (e.g., borders, grid layouts) in the `studentView` to faithfully recreate that visual experience. Do not just output plain text if the visual structure is key to the activity.
