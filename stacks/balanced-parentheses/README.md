# Balanced Parentheses / Brackets

This problem is a classic computer science puzzle and a great example of where the **Stack** data structure shines.

## The Challenge 🎯

Given a string `input` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is **valid**.

An input string is considered **valid** if:

1. **Matching Types**: Every opening bracket must be closed by the *same type* of bracket.
    * `(` must be closed by `)`.
    * `{` must be closed by `}`.
    * `[` must be closed by `]`.
2. **Correct Order**: Open bracket must be closed in the correct nested order. The last opened bracket must be the first one closed.
3. **Complete Pairs**: Every closing bracket must have a corresponding opening bracket of the same type that appeared earlier.

**Examples:**

* `()` -> **Valid**
* `()[]{}` -> **Valid**
* `({[]})` -> **Valid**
* `(]` -> **Invalid** (Type mismatch)
* `([)]` -> **Invalid** (Order mismatch)
* `{[]}` -> **Valid**
* `((` -> **Invalid** (Unclosed brackets)
* `))` -> **Invalid** (Closing bracket with no corresponding opener)
* `""` -> **Valid** (Empty string)

## How Stacks Solve It 💡

The **LIFO (Last-In, First-Out)** nature of a Stack is perfect for tracking nested structures. The core idea is:

* When we encounter an **opening** bracket, we expect a corresponding closing bracket later. We push the opening bracket onto the stack to remember it's waiting to be closed.
* When we encounter a **closing** bracket, it *must* match the *most recently opened* (and still unclosed) bracket. Where do we find the most recently opened bracket? At the **top** of the stack!
