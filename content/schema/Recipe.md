---
title: Recipe
created: 2025-07-27
modified: 2025-08-03
tags: prefix/schema
draft: false
subClassOf:
- '[[HowTo]]'
entities:
- https://schema.org/HowTo
- https://schema.org/Recipe
---

> A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [suitableForDiet](https://schema.org/suitableForDiet). The [keywords](https://schema.org/keywords) property can also be used to add more detail.[^1]

[^1]: [Recipe - Schema.org Type](https://schema.org/Recipe)

## Semantic Connections

```mermaid
graph TD
  Recipe["Recipe<br>+ label: Recipe<br>+ comment: A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail."]:::current-page-node
  HowTo["HowTo<br>+ label: HowTo<br>+ comment: Instructions that explain how to achieve a result by performing a sequence of steps."]
  Recipe-->|" subClassOf "|HowTo
```
