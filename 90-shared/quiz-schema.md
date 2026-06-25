# Quiz Schema

Quiz banks are stored as YAML files named `quiz.yaml` in each module folder.

## Required Top-Level Fields

```yaml
module_id: "claude-chat"
title: "Claude Chat"
version: "0.1"
language: "en"
recommended_duration_minutes: 45
passing_score: 80
question_bank_size: 15
questions_to_serve: 10
retakes: "unlimited"
randomize_questions: true
policy_review_required: true
questions: []
answers: {}
feedback: {}
```

## Question Fields

Each question must include:

- `id`: Unique stable ID, such as `chat-q01`.
- `type`: Use `multiple_choice` for v1.
- `prompt`: The question shown to the user.
- `options`: Four options with keys `A`, `B`, `C`, and `D`.

## Answer Fields

The `answers` map links each question ID to the correct option key.

```yaml
answers:
  chat-q01: "B"
```

## Feedback Fields

Each question should have short correct and incorrect feedback.

```yaml
feedback:
  chat-q01:
    correct: "Correct. This is the safest practical choice."
    incorrect: "Review the module guidance and choose the option that protects data and keeps a human in control."
```

## Scoring Rules

- Passing score: 80%.
- Retakes: unlimited.
- Claude Chat: 15-question bank; portal serves 10 questions.
- Claude Cowork, Claude Code, Claude Design: 12-question bank; portal serves 8 questions.
- Randomize questions if the portal supports it.
- Randomize answer options only if feedback remains mapped correctly.

## Authoring Rules

- Test practical decisions, not memorized product marketing.
- Include at least two policy or risk questions per module.
- Avoid trick questions.
- Use global English.
- Update quiz questions when product behavior or Sandvik policy changes.
