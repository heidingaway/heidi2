---
title: Leadership
aliases:
- Leadership
created: 2025-07-29
modified: 2025-08-03
tags: []
draft: false
subClassOf:
- '[[cdso_specific_accountability]]'
entities:
- http://www.thesaurus.gc.ca/#leadership
- http://www.thesaurus.gc.ca/#personnel_management
- http://www.thesaurus.gc.ca/#pr_processes
- https://heidingaway.github.io/heidi2/cdo_accountability_1
- https://heidingaway.github.io/heidi2/cdso_accountability_1
- https://heidingaway.github.io/heidi2/cdso_specific_accountability
---

- [[pr_processes]]

## Semantic Connections

```mermaid
graph TD
  Leadership["Leadership"]:::current-page-node
  personnel_management["personnel_management"]
  cdso_specific_accountability["cdso_specific_accountability"]
  pr_processes["pr_processes"]
  cdso_accountability_1["cdso_accountability_1"]
  cdo_accountability_1["cdo_accountability_1"]
  personnel_management-->|" related "|Leadership
  cdo_accountability_1-->|" subClassOf "|Leadership
  cdso_accountability_1-->|" subClassOf "|Leadership
  Leadership-->|" related "|personnel_management
  Leadership-->|" subClassOf "|cdso_specific_accountability
  pr_processes-->|" member "|Leadership
```
