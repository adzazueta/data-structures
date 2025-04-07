def is_balanced(input: str) -> bool:
    """
    Checks if a string containing parentheses, brackets, and braces is balanced.

    Args:
        input: The input string containing brackets.
    
    Returns:
        True if the string is balanced, false otherwise.
    """
    # An empty string is considered balanced
    if not input:
        return True
    
    # Use a list to act as a stack
    stack = []
    # Map closing brackets to their corresponding opening brackets.
    bracket_map = {
        ")": "(",
        "]": "[",
        "}": "{",
    }

    for character in input:
        # If it's an opening bracket, push onto the stack
        if character in "([{":
            stack.append(character) # Push
        
        # If it's a closing bracket
        elif character in ")]}":
            # If stack is empty, not matching opener
            if not stack:
                return False
            
            # Pop and check for match
            last_open_bracket = stack.pop() # Pop
            if bracket_map[character] != last_open_bracket:
                return False # Mismatched bracket type
    
    # After the loop, the stack must be empty for the string to be balanced
    return len(stack) == 0
