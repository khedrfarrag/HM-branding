# Workflow, Review & Definition of Done Rules

* **Filename**: `file:///g:/hossam%20mabrouk/.ai/workflow/review-validation.md`
* **Purpose**: Outline tests validation, review workflows, code delivery checkpoints, and agent scope boundaries.
* **Responsibility**: Enforcing quality gates and the "Definition of Done".
* **Dependencies**: [Constitution](file:///g:/hossam%20mabrouk/.specify/memory/constitution.md) (Definition of Done, Review, & Refactoring rules)
* **Update Frequency**: Medium
* **AI Agents**: Reviewer, Automated Tester
* **Priority**: HIGH

---

## 1. Unit Testing & Mocking
* **Rule**: Core business helpers and utilities MUST contain isolated unit tests.
* **Requirements**:
  * System adapters (like database connections) must be mocked inside test environments.

## 2. Automated Validation Pipelines
* **Rule**: Code compilation, lint tests, and syntax formats MUST be validated automatically on pull requests.
* **Requirements**:
  * Build failures are non-negotiable; merges are blocked until compilation finishes cleanly.

## 3. Pull Request Review Checklist
* **Rule**: Submitted code changes MUST verify compliance with the project Constitution.
* **Requirements**:
  * The PR description must specify which section of the Constitution governs the changes.

## 4. Definition of Done (DoD)
* **Rule**: A task is only DONE if it builds successfully, passes test coverages, and complies with performance budgets.
* **Requirements**:
  * The walkthrough documentation must be updated with verification results.
