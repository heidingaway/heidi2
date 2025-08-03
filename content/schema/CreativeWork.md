---
title: Creative Work
aliases:
- Creative Work
created: 2025-07-23
modified: 2025-08-03
tags: []
context: schema
draft: false
subClassOf:
- '[[Thing]]'
entities:
- https://schema.org/CreativeWork
- https://schema.org/Thing
- https://schema.org/docs/collab/rNews
---

> The most generic kind of creative work, including books, movies, photographs, software programs, etc. [^1]

[^1]: [CreativeWork - Schema.org Type](https://schema.org/CreativeWork)

## Related Links

- [[Thing]]

## Semantic Connections

```mermaid
graph TD
  Creative_Work["Creative Work<br>+ label: CreativeWork<br>+ comment: The most generic kind of creative work, including books, movies, photographs, software programs, etc."]:::current-page-node
  Thing["Thing<br>+ label: Thing<br>+ comment: The most generic type of item."]
  rNews["rNews"]
  Creative_Work-->|" contributor "|rNews
  Creative_Work-->|" subClassOf "|Thing
```
