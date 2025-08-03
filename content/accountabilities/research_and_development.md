---
title: Research and Development
aliases:
- Research and Development
created: 2025-08-02
modified: 2025-08-03
tags: []
draft: false
includes:
- '[[applies Artificial Intelligence]]'
entities:
- http://www.thesaurus.gc.ca/#applied_research
- http://www.thesaurus.gc.ca/#development
- http://www.thesaurus.gc.ca/#industrial_research
- http://www.thesaurus.gc.ca/#patents
- http://www.thesaurus.gc.ca/#pr_processes
- http://www.thesaurus.gc.ca/#r&d
- http://www.thesaurus.gc.ca/#research
- http://www.thesaurus.gc.ca/#research_and_development
---

- [[pr_processes]]

## Semantic Connections

```mermaid
graph TD
  Research_and_Development["Research and Development"]:::current-page-node
  applied_research["applied_research"]
  development["development"]
  industrial_research["industrial_research"]
  patents["patents"]
  research["research"]
  pr_processes["pr_processes"]
  rd["r&d"]
  industrial_research-->|" related "|Research_and_Development
  development-->|" related "|Research_and_Development
  rd-->|" related "|Research_and_Development
  Research_and_Development-->|" related "|research
  research-->|" related "|Research_and_Development
  Research_and_Development-->|" related "|applied_research
  Research_and_Development-->|" related "|industrial_research
  Research_and_Development-->|" related "|patents
  pr_processes-->|" member "|Research_and_Development
  patents-->|" related "|Research_and_Development
  Research_and_Development-->|" related "|development
  applied_research-->|" related "|Research_and_Development
```
