---
uri: https://gcxgce.sharepoint.com/teams/10001579/#person
title: Person
mermaid_layers: 1
entities:
- https://schema.org/Person
- https://schema.org/Thing
- https://schema.org/docs/collab/rNews
draft: false
---

## Related Links

- [[Thing]]

## Semantic Connections

```mermaid
graph TD
  Person["Person<br>+ label: Person<br>+ comment: A person (alive, dead, undead, or fictional)."]:::current-page-node
  Thing["Thing<br>+ label: Thing<br>+ comment: The most generic type of item."]
  Person_1["Person"]
  rNews["rNews"]
  Person-->|" subClassOf "|Thing
  Person-->|" contributor "|rNews
  Person-->|" equivalentClass "|Person_1
```
