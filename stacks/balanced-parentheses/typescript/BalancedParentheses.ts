/**
 * Check if a string containing parentheses, brackets, and braces is balanced.
 * 
 * @param input The input string containing brackets.
 * @returns True if the string is balanced, false otherwise.
 */
export function isBalanced(input: string): boolean {
    // An empty string is considered balanced
    if (input.length === 0) {
        return true;
    }

    const stack: string[] = [];
    // Map closing brackets to their corresponding opening brackets
    const bracketMap: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    for (let i = 0; i < input.length; i++) {
        const character = input[i];

        // If it's an opening bracket, push onto the stack
        if (character === '(' || character === '[' || character === '{') {
            stack.push(character);
        }
        // If it's a closing bracket
        else if (character === ')' || character === ']' || character === '}') {
            // If stack is empty, no matching opener
            if (stack.length === 0) return false;

            // Pop and check for match
            const lastOpenBracket = stack.pop(); // pop() returns string | undefined, but we checked length > 0
            if (bracketMap[character] !== lastOpenBracket) return false; // Mismatched bracket types
        }
    }

    // After the loop, the stack must be empty for the string to be balanced
    return stack.length === 0
}
