Edge Cases:
When current * 10 > n:

We cannot move deeper; need to consider moving to the next sibling.
When current % 10 == 9 or current + 1 > n:

We cannot increment current directly.
We need to backtrack by dividing current by 10 until we can increment.
Handling Leading Zeros:

Since numbers do not have leading zeros, we avoid adding zeros at the beginning.

Determine the Next Number:

Option 1: Go Deeper in the Tree

If current * 10 <= n, set current = current * 10.
Why? Moving to current * 10 adds a '0' at the end, exploring numbers starting with the current prefix.
Example: From 1 to 10, from 10 to 100.
Option 2: Move to the Next Sibling

Else if current % 10 != 9 and current + 1 <= n, set current = current + 1.
Why current % 10 != 9?
Numbers ending with 9 are the last in their series at that level.
After 9, lexicographically, we don't have 10; instead, we need to backtrack.
Why current + 1 <= n?
Ensure we don't exceed n.
Example: From 1 to 2, from 2 to 3.
Option 3: Backtrack

Else:
While current % 10 == 9 or current + 1 > n, set current = current // 10.
Why? We've reached the end of the current branch and need to move up to find the next available number.
After backtracking, increment current by 1: current = current + 1.

Condition Breakdown:
current % 10 != 9

We cannot increment current if its last digit is 9 because lexicographically, after a number ending with 9, we need to backtrack to the parent prefix.
Example:
After 19, lexicographically comes 2, not 20.
current + 1 <= n

We ensure that incrementing current doesn't exceed n.
Example:
If current = 13 and n = 13, current + 1 = 14 which is > n, so we cannot increment.
Why Do We Need Both Conditions?
To stay within lexicographical order:
We can only increment current if it doesn't end with 9 (i.e., it's not the last sibling in its level).
To stay within the limit n:
We need to ensure the next number is within the desired range.
Examples:
From 1 to 2:

current = 1
current * 10 = 10 (assuming n >= 10), we can go deeper.
If we cannot (e.g., n < 10), we check if we can increment.
Since 1 % 10 != 9 and 1 + 1 <= n, we increment to current = 2.
When current Ends with 9:

current = 9
current % 10 == 9, so we cannot increment.
We need to backtrack by dividing by 10.
Backtracking Explanation:
When to Backtrack:

When we cannot go deeper (current * 10 > n).
When we cannot increment (current % 10 == 9 or current + 1 > n).
How to Backtrack:

Remove the last digit by dividing current by 10 (current = current // 10).
Repeat until we find a prefix where we can increment.
Example:

current = 19, n = 20
Cannot go deeper (190 > 20), cannot increment (19 % 10 == 9), so backtrack:
current = 1 (after current = 19 // 10)
