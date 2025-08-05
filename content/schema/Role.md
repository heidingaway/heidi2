---
title: Role
created: 2025-07-28
modified: 2025-08-03
tags: []
draft: false
mermaid_layers: 1
permalink: null
subClassOf:
- '[[Intangible]]'
entities:
- https://schema.org/Intangible
- https://schema.org/Role
---

> Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.[^1]

[^1]: [Role - Schema.org Type](https://schema.org/Role)

## Related Links

- [[Intangible]]

## Semantic Connections

```mermaid
graph TD
  Role["Role<br>+ label: Role<br>+ comment: //blog.schema.org/2014/06/introducing-role.html)."]:::current-page-node
  Intangible["Intangible<br>+ label: Intangible<br>+ comment: A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc."]
  Role-->|" subClassOf "|Intangible
```
