import { isBalanced } from "./BalancedParentheses.ts";

isBalanced('()');     // Valid
isBalanced('()[]{}'); // Valid
isBalanced('({[]})'); // Valid
isBalanced('(]');     // Invalid (Type mismatch)
isBalanced('([)]');   // Invalid (Order mismatch)
isBalanced('{[]}');   // Valid
isBalanced('((');     // Invalid (Unclosed brackets)
isBalanced('))');     // Invalid (Closing bracket with no corresponding opener)
isBalanced('""');     // Valid (Empty srring)
