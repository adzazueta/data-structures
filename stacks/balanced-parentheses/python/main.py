from balanced_parentheses import is_balanced

if __name__ == "__main__":
    is_balanced('()');     # Valid
    is_balanced('()[]{}'); # Valid
    is_balanced('({[]})'); # Valid
    is_balanced('(]');     # Invalid (Type mismatch)
    is_balanced('([)]');   # Invalid (Order mismatch)
    is_balanced('{[]}');   # Valid
    is_balanced('((');     # Invalid (Unclosed brackets)
    is_balanced('))');     # Invalid (Closing bracket with no corresponding opener)
    is_balanced('""');     # Valid (Empty srring)
