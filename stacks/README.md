# Data Structure: Stacks 📚

## What is a Stack? 🤔
Imagine a stack of plates, books or pancakes. You can only perform two main actions easily:

1. **Add** a new item to the **top**.
2. **Remove** the irem currently at the **top**.

You can't easily grab an item from the middle or the bottom without disturbing the ones above it.

Stacks follows the **LIFO** principle: **Last-In, First-Out**. The las item you put onto the stack is the very first item you can take off.

## Core Operations ⚙️

* **`push(item)`**: Adds a new item to the top of the stack.
* **`pop()`**: Removes the top item from the stack and returns it. (Throws an error or returns null/undefined if the stack is empty).
* **`peek()`**: (or `top()`): Looks at the top item *whitout* removing it. (Also handles empty stack).
* **`isEmpty()`**: Returns `true` if the stack contains no items, `false` otherwise.
* **`size()`**: Returns the number of items currently in the stack.

## Pros and Cons 👍👎

**Pros:**
* **Simple Concept**: Easy to grasp the LIFO idea.
* **Fast Operations**: `push` and `pop` are tipically very fast (O(1) - constant time, meaning their speed doesn't depend on the stack size), specially when using arrays or linked lists.
* **Memory Efficient**: Can be implemented simply with basic arrays or linked lists.
* **Build-in Order**: Naturally handles scenarios requiring reversal or backtracking.

**Cons:**
* **Limited Access**: You can only efficiently access to the top element. Accessing or searching for items deeper in the stack is inefficient (requires popping items above it).
* **Not for General Searching**: If you need to frequently find arbitrary items, a stack is the wrong choice.

## Common Use Cases ✅

Stacks shine when the order of operations involves reversing sequences or handling nested structures:

* **Function Call Management**: Programming languages use a "Call Stack" to keep track of active functions. When a function is called, it's pushed; when it returns, it's popped.
* **Undo/Redo Features**: Storing previous states or actions to allow undoing (pop the last action).
* **Parsing Expressions**: Evaluating mathematical formulas or checking syntax.
* **Backtracking Algorithms**: Used in algorithms that explore possibilities and need to "go back" if a path fails (e.g., maze solving, some AI searches).
* **Browser History (Back Button)**: Storing previously visited pages to navigate back.

Explore the subfolders here to see specific problems solved using stacks!
