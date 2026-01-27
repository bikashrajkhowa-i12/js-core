# js-core

> **Core JavaScript fundamentals and internals — no fluff, no frameworks.**

This repository is a **from-scratch, interview-grade deep dive** into JavaScript. It focuses on _how JS actually works_ under the hood: execution model, async behavior, DOM mechanics, and performance patterns. Everything here is written to build **first-principles clarity**.

---

## Why this repo exists

Most JS resources teach _what to write_. This repo teaches **why it works**.

If you:

- Know JavaScript syntax but feel shaky about internals
- Want to reason about performance instead of guessing
- Are preparing for **SDE-2 / Senior-level interviews**
- Want to build a rock-solid mental model before touching frameworks

→ this repo is for you.

---

## What you will learn

### 1. JavaScript Core

- Data types & coercion (truth tables, edge cases)
- Execution context & call stack
- Scope chain, lexical environment
- `var` vs `let` vs `const`
- Hoisting (real behavior, not myths)

### 2. Functions (Deep Dive)

- Function declarations vs expressions
- Arrow functions (design trade-offs)
- `this` binding (call/apply/bind)
- Closures (how & why they exist)
- Pure vs impure functions

### 3. Asynchronous JavaScript

- Event loop (step-by-step)
- Microtasks vs macrotasks
- Promises (states, chaining, error flow)
- `async/await` (what it compiles to mentally)
- Concurrency vs parallelism

### 4. DOM & Browser Internals

- What the DOM actually is
- Event propagation (capture → target → bubble)
- Event delegation (why it matters)
- Reflow vs repaint
- Browser rendering pipeline

### 5. Performance Patterns

- Debouncing vs throttling
- Avoiding unnecessary reflows
- Memory leaks (common JS mistakes)
- Time & space complexity thinking in JS

---

## Repo Structure

```
js-core/
│
├── 01-basics/          # Language fundamentals & execution model
├── 02-functions/       # this, closures, bindings, arrow functions
├── 03-prototypal-js/   # Prototype Chain, Prototypal Inheritance vs. Class-based syntax, and Shadowing.
├── 04-async-architecture/        # event loop, promises, async/await
├── 05-dom/             # DOM, events, rendering
├── 06-performance/     # optimization patterns && polyfils
├── notes/           # concise interview-ready notes
└── README.md
```

> Folder names are conceptual, not random. Each builds on the previous one.

---

## How to use this repo

**Recommended order:**

1. Read the notes
2. Run the examples
3. Predict output _before_ executing
4. Break things intentionally

This repo rewards **thinking**, not memorization.

---

## Philosophy

- No frameworks
- No magic
- No copy-paste learning

Every concept is explained until it becomes _obvious_.

If you can explain it simply, you truly understand it.

---

## Who this is for

- Intermediate JS developers leveling up
- Interview prep (SDE-2 / Senior Frontend / Fullstack)
- Backend engineers who want real JS mastery
- Anyone tired of shallow tutorials

---

## Status

🚧 Actively growing

Concepts are added only after being fully reasoned and verified.

---

## License

MIT — use it, break it, improve it.

---

## Final Note

If this repo makes JavaScript feel _predictable instead of magical_, it has done its job.

Happy breaking things 🚀
