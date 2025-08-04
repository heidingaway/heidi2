---
title: Japanese Approach to Coding
created: 2025-07-27
modified: 2025-08-03
tags: []
draft: true
mermaid_layers: 1
permalink: 
relatedTerm:
  - "[[Japan]]"
subject:
  - "[[computer_programming]]"
---
# Japanese Approach to Coding
## Monozukuri

> the art of making things.[^1]

## Kaizen: The 1% Better Principle

> Instead of massive refactoring sprints or complete rewrites, they make tiny, continuous improvements[^2]

```
// Western approach: "Let's refactor this entire module next sprint"  
function processUserData(users) {  
  // 200 lines of increasingly complex code  
  return results;  
}  
  
// Japanese approach: "Let's improve this function by 1% today"  
function processUserData(users) {  
  // Today: extract one small helper function  
  const validUsers = filterValidUsers(users);  
  // Tomorrow: maybe extract another small piece  
  // Next week: optimize one specific case  
  return processValidUsers(validUsers);  
}
```
## Takeaways

1. 1 improvement a day
2. Find a bug, fix the bug, prevent same bug.
3. Progress over perfection
4. Reflect regularly on improvements
5. Build to last over ship fast and break things
# Footnotes

[^1]: [Why Japanese Developers Write Code Completely Differently (And Why It Works Better) \| by Sohail Saifi \| Jul, 2025 \| Medium](https://medium.com/@sohail_saifi/why-japanese-developers-write-code-completely-differently-and-why-it-works-better-de84d6244fab)
[^2]: ibid
